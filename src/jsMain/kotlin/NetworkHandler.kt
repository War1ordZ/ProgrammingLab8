import data.TokenData
import data.groups.StudyGroup
import kotlinx.browser.window
import org.w3c.dom.WebSocket
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Json
import kotlin.js.json

const val BASE_URL = "10.196.143.243:35664"
const val TIMEOUT = 2000

fun authRequest(username: String,
                password: String,
                successCallback: (XMLHttpRequest, String) -> ((Event) -> Unit),
                errorCallback: (XMLHttpRequest) -> ((Event) -> Unit)
) {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "http://${BASE_URL}/auth/login", true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.timeout = TIMEOUT
    xhr.ontimeout = errorCallback(xhr)
    xhr.onload = successCallback(xhr, "Incorrect credentials")
    xhr.onerror = errorCallback(xhr)
    val json: Json = json(
        "username" to username,
        "password" to password
    )
    xhr.send(JSON.stringify(json))
}


fun registerRequest(username: String,
                password: String,
                successCallback: (XMLHttpRequest, String) -> ((Event) -> Unit),
                errorCallback: (XMLHttpRequest) -> ((Event) -> Unit)
) {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "http://${BASE_URL}/auth/register", true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.timeout = TIMEOUT
    xhr.ontimeout = errorCallback(xhr)
    xhr.onload = successCallback(xhr, "Username is taken")
    xhr.onerror = errorCallback(xhr)
    val json: Json = json(
        "username" to username,
        "password" to password
    )
    xhr.send(JSON.stringify(json))
}

fun restoreUsername(tokenData: TokenData, 
                    successCallback: (XMLHttpRequest) -> ((Event) -> Unit),
                    errorCallback: (XMLHttpRequest) -> ((Event) -> Unit)) {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "http://${BASE_URL}/auth/username", true)
    xhr.timeout = TIMEOUT
    xhr.setRequestHeader("Authorization", "${tokenData.tokenType} ${tokenData.accessToken}")
    xhr.onload = successCallback(xhr)
    xhr.onerror = errorCallback(xhr)
    xhr.ontimeout = errorCallback(xhr)
    xhr.send()
}

fun removeGroup(id: Long, token: TokenData) {
    val xhr = XMLHttpRequest()
    xhr.open("DELETE", "http://${BASE_URL}/groups/${id}", true)
    xhr.setRequestHeader("Authorization", "${token.tokenType} ${token.accessToken}")
    xhr.send()
}

fun removeAllGroups(token: TokenData) {
    val xhr = XMLHttpRequest()
    xhr.open("DELETE", "http://${BASE_URL}/groups/all", true)
    xhr.setRequestHeader("Authorization", "${token.tokenType} ${token.accessToken}")
    xhr.send()
}

fun addGroup(group: StudyGroup, token: TokenData) {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "http://${BASE_URL}/groups/add", true)
    xhr.setRequestHeader("Authorization", "${token.tokenType} ${token.accessToken}")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(group.getJson())
}

fun updateGroup(id: Long, group: StudyGroup, token: TokenData) {
    println("update")
    val xhr = XMLHttpRequest()
    xhr.open("POST", "http://${BASE_URL}/groups/${id}", true)
    xhr.setRequestHeader("Authorization", "${token.tokenType} ${token.accessToken}")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(group.getJson())
}

fun requestAllGroups(token: TokenData, successCallback: (XMLHttpRequest) -> (Event) -> Unit) {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "http://${BASE_URL}/groups/all", true)
    xhr.setRequestHeader("Authorization", "${token.tokenType} ${token.accessToken}")
    xhr.onload = successCallback(xhr)
    xhr.send()
}

fun bindWebSocket(token: TokenData, loadGroups: (XMLHttpRequest) -> (Event) -> Unit) {
    StateManager.webSocket?.close()
    StateManager.webSocket = WebSocket("ws://${BASE_URL}/websocket")
    val websocket = StateManager.webSocket!!

    websocket.onmessage = {
        requestAllGroups(token, loadGroups)
    }
}