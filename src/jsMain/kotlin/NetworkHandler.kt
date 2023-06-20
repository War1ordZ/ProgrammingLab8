import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import data.Credentials
import data.TokenData
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Json
import kotlin.js.json

const val BASE_URL = "http://10.196.143.243:35664"
const val TIMEOUT = 2000

fun authRequest(username: String,
                password: String,
                successCallback: (XMLHttpRequest, String) -> ((Event) -> dynamic),
                errorCallback: (XMLHttpRequest) -> ((Event) -> dynamic)
) {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "${BASE_URL}/auth/login", true)
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
                successCallback: (XMLHttpRequest, String) -> ((Event) -> dynamic),
                errorCallback: (XMLHttpRequest) -> ((Event) -> dynamic)
) {
    val xhr = XMLHttpRequest()
    xhr.open("POST", "${BASE_URL}/auth/register", true)
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

fun restoreUsername(tokenData: TokenData, successCallback: (XMLHttpRequest) -> ((Event) -> dynamic)) {
    val xhr = XMLHttpRequest()
    xhr.open("GET", "${BASE_URL}/auth/username", true)
    xhr.timeout = TIMEOUT
    xhr.setRequestHeader("Authorization", "${tokenData.tokenType} ${tokenData.accessToken}")
    xhr.onload = successCallback(xhr)
    xhr.send()
}