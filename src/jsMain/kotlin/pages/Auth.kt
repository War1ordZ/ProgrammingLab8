package pages

import Cookies
import StateManager
import androidx.compose.runtime.*
import authRequest
import bindWebSocket
import data.TokenData
import data.groups.*
import language.translatable
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.dom.*
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import registerRequest
import requestAllGroups
import setCookie
import kotlin.js.Json

@Composable
fun authPage() {
    var currentUser by remember { StateManager.user }
    var username by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var error by remember { mutableStateOf("") }
    var authStatus by remember { StateManager.authorized }
    var token by remember { StateManager.token }
    var appGroups by remember { StateManager.groups }
    var currentLocale by remember { StateManager.language }

    val onSuccess: (XMLHttpRequest, String) -> ((Event) -> dynamic)= { xhr, msg -> {
        if (xhr.status == 200.toShort()) {
            console.log(xhr.responseText)
            authStatus = true
            currentUser = username
            error = ""
            val json: Json = JSON.parse(xhr.responseText)
            val tokenData = TokenData(
                accessToken = json["accessToken"] as String,
                tokenType = json["tokenType"] as String
            )
            token = tokenData
            val onSuccess = { xhr: XMLHttpRequest -> { ev: Event ->
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
            bindWebSocket(token!!, onSuccess)
            requestAllGroups(token!!, onSuccess)
            setCookie(Cookies.TOKEN, tokenData.accessToken)
            setCookie(Cookies.TOKEN_TYPE, tokenData.tokenType)
        } else {
            error = msg
        }
    }
    }
    val onError: (XMLHttpRequest) -> ((Event) -> dynamic)= { {
        error = translatable("error-server-unreachable", currentLocale)
        0
    }
    }

    Div (attrs = { classes("centered-container", "full-screen") }) {
        Div (attrs = {classes("auth-menu")}) {
            Div (attrs = {classes("centered-container", "auth-header")}) {
                Text(translatable("auth-header", currentLocale))
            }
            Div (attrs = {classes("auth-line")}) {
                Text(translatable("login", currentLocale) + ":")
                Input(type = InputType.Text, attrs = {
                    onInput { ev ->
                        username = ev.value
                    }
                })
            }
            Div (attrs = {classes("auth-line")}) {
                Text(translatable("password", currentLocale) + ":")
                Input(type = InputType.Password, attrs = {
                    onInput { ev ->
                        password = ev.value
                    }
                })
            }
            Div (attrs = {classes("auth-line")}) {
                Div (attrs = {
                    classes("centered-container", "auth-button")
                    onClick {
                        error = ""
                        authRequest(username, password, onSuccess, onError)
                    }
                }) {
                    Text(translatable("login", currentLocale))
                }

                Div (attrs = {
                    classes("centered-container", "auth-button")
                    onClick {
                        error = ""
                        registerRequest(username, password, onSuccess, onError)
                    }
                }) {
                    Text(translatable("register", currentLocale))
                }
            }
            Div (attrs = {classes("centered-container", "auth-error-message")}) {
                Text(error)
            }
        }
    }
}
