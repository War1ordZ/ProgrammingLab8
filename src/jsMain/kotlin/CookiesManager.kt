import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import data.TokenData
import data.groups.*
import kotlinx.browser.document
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Json

object Cookies {
    const val LANG = "lang"
    const val TOKEN = "token"
    const val TOKEN_TYPE = "token_type"
}

@Composable
fun restoreData() {
    var locale by remember { StateManager.language }
    var token by remember { StateManager.token }
    var user by remember { StateManager.user }
    var auth by remember { StateManager.authorized }
    var isLoadReady by remember { StateManager.isLoadReady }
    var appGroups by remember { StateManager.groups }

    val lang = getCookie(Cookies.LANG)
    if (lang != null) {
        try {
            val savedLocale = Languages.valueOf(lang)
            locale = savedLocale
        } catch (ex: IllegalArgumentException) {
            error("'lang' cookie value is not valid")
        }
    }

    val accessToken = getCookie(Cookies.TOKEN)
    val tokenType = getCookie(Cookies.TOKEN_TYPE)
    val loadGroups = { xhr: XMLHttpRequest -> { ev: Event ->
        println(xhr.responseText)
        val jsonArray: Array<Json> = JSON.parse(xhr.responseText)
        val groupList: MutableList<StudyGroup> = mutableListOf()
        jsonArray.forEach {
                json ->
            val coordinateJson: Json = JSON.parse(JSON.stringify(json["coordinates"]))
            val coordinates = Coordinates(
                x = coordinateJson["x"].toString().toFloat(),
                y = coordinateJson["y"].toString().toLong()
            )
            val adminJson: Json = JSON.parse(JSON.stringify(json["groupAdmin"]))
            val locationJson: Json = JSON.parse(JSON.stringify(adminJson["location"]))
            val location = Location(
                x = locationJson["x"].toString().toFloat(),
                y = locationJson["y"].toString().toInt(),
                z = locationJson["z"].toString().toInt()
            )
            val admin = Person(
                name = adminJson["name"].toString(),
                weight = adminJson["weight"].toString().toLong(),
                eyeColor = Color.valueOf((adminJson["eyeColor"].toString())),
                location = location
            )
            val group = StudyGroup(
                id = json["id"].toString().toLong(),
                coordinates = coordinates,
                creationDate = json["creationDate"].toString(),
                formOfEducation = FormOfEducation.valueOfOrNull(json["formOfEducation"].toString()),
                groupAdmin = admin,
                name = json["name"].toString(),
                owner = json["owner"].toString(),
                semesterEnum = Semester.valueOf(json["semesterEnum"].toString()),
                studentsCount = json["studentsCount"].toString().toInt()
            )
            groupList.add(group)
        }
        appGroups = groupList
        println("Request finished ${appGroups.size} to ${groupList.size}")
    }}
    if (accessToken != null && tokenType != null) {
            token = TokenData(accessToken, tokenType)
            val onSuccess: (XMLHttpRequest) -> ((Event) -> Unit)= { xhr -> {
                    console.log("Legit")
                    if (xhr.status == 200.toShort()) {
                        auth = true
                        user = xhr.responseText
                        bindWebSocket(token!!, loadGroups)
                        requestAllGroups(token!!, loadGroups)
                    } else {
                        auth = false
                    }
                    isLoadReady = true
                }
            }
            val onError: (XMLHttpRequest) -> ((Event) -> Unit)= { _ -> {
                console.log("Ne legit")
                isLoadReady = true
            }
        }
        console.log("Restoring username...")
        restoreUsername(token!!, onSuccess, onError)
    } else {
        auth = false
        isLoadReady = true
    }
}

fun setCookie(name: String, value: String) {
    document.cookie = "${name}=${value}; path=/;"
}

fun getCookie(name: String): String? {
    val cookies = document.cookie
    val regex = "(?<=${name}=).+?(?=;|\$|\\s)".toRegex()
    return regex.find(cookies)?.value
}

fun removeCookie(name: String) {
    document.cookie = "${name}=null; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
}