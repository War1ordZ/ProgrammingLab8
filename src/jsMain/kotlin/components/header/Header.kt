package components.header

import Languages
import StateManager
import androidx.compose.runtime.*
import language.translatable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import router.Routes

@Composable
fun header() {
    val user by remember { StateManager.user }
    val isLoadReady by remember { StateManager.isLoadReady }
    var currentLocale by remember { StateManager.language }
    Div (attrs = {classes("header")}) {
        Div (attrs = {classes("row-container")}) {
            headerButton(translatable("main-header-button", currentLocale), Routes.MAIN, 0)
            headerButton(translatable("table-header-button", currentLocale), Routes.TABLE, 1)
            headerButton(translatable("overview-header-button", currentLocale), Routes.OVERVIEW, 2)
        }
        Div (attrs = {classes("row-container")}) {
            localeButton()
            Div (attrs = {classes("user-indicator", "centered-container")}) {
                Text(if (user == null) if (isLoadReady) translatable("not-authorized", currentLocale) else translatable("loading-progress", currentLocale) else user.toString())
            }
            logoutButton()
        }
    }
}