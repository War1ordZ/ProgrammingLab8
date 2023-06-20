package components.header

import Languages
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import router.Routes

@Composable
fun header() {
    val user by remember { StateManager.user }
    Div (attrs = {classes("header")}) {
        Div (attrs = {classes("row-container")}) {
            headerButton("Main", Routes.MAIN, 0)
            headerButton("Table", Routes.TABLE, 1)
            headerButton("Overview", Routes.OVERVIEW, 2)
        }
        Div (attrs = {classes("row-container")}) {
            localeButton()
            Div (attrs = {classes("user-indicator", "centered-container")}) {
                Text(if (user == null) "Not authorized" else user.toString())
            }
            logoutButton()
        }
    }
}