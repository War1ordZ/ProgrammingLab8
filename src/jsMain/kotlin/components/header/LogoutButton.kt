package components.header

import Cookies
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import language.translatable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import removeCookie
import setCookie

@Composable
fun logoutButton() {
    var token by remember { StateManager.token }
    var user by remember { StateManager.user }
    var auth by remember { StateManager.authorized }
    var currentLocale by remember { StateManager.language }
    Div (attrs = {
        classes("header-button", "centered-container")
        onClick {
            token = null
            user = null
            auth = false
            removeCookie(Cookies.TOKEN)
            removeCookie(Cookies.TOKEN_TYPE)
        }
    }) {
        Text(translatable("logout-header-button", currentLocale))
    }
}