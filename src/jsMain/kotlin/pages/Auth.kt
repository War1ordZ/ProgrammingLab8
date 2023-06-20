package pages

import Cookies
import StateManager
import androidx.compose.runtime.*
import authRequest
import data.TokenData
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.dom.*
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest
import registerRequest
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
            setCookie(Cookies.TOKEN, tokenData.accessToken)
            setCookie(Cookies.TOKEN_TYPE, tokenData.tokenType)
        } else {
            error = msg
        }
    }
    }
    val onError: (XMLHttpRequest) -> ((Event) -> dynamic)= { {
        error = "Server is unreachable"
        null
    }
    }

    Div (attrs = { classes("centered-container", "full-screen") }) {
        Div (attrs = {classes("auth-menu")}) {
            Div (attrs = {classes("centered-container", "auth-header")}) {
                Text("Please auth to proceed")
            }
            Div (attrs = {classes("auth-line")}) {
                Text("Login:")
                Input(type = InputType.Text, attrs = {
                    onInput { ev ->
                        username = ev.value
                    }
                })
            }
            Div (attrs = {classes("auth-line")}) {
                Text("Password:")
                Input(type = InputType.Password, attrs = {
                    onInput { ev ->
                        password = ev.value
                    }
                })
            }
            Div (attrs = {classes("auth-line", "auth-line")}) {
                Div (attrs = {
                    classes("centered-container", "auth-button")
                    onClick {
                        error = ""
                        authRequest(username, password, onSuccess, onError)
                    }
                }) {
                    Text("Login")
                }

                Div (attrs = {
                    classes("centered-container", "auth-button")
                    onClick {
                        error = ""
                        registerRequest(username, password, onSuccess, onError)
                    }
                }) {
                    Text("Register")
                }
            }
            Div (attrs = {classes("centered-container", "auth-error-message")}) {
                Text(error)
            }
        }
    }
}