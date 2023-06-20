package components.header

import Languages
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

@Composable
fun header() {
    val user by remember { StateManager.user }
    Div (attrs = {classes("header")}) {
        Div (attrs = {classes("row-container")}) {
            headerButton("Main", "/")
            headerButton("Table", "/table")
            headerButton("Overview", "/overview")
        }
        Div (attrs = {classes("row-container")}) {
            localeButton()
            Div (attrs = {classes("user-indicator", "centered-container")}) {
                Text(if (user == null) "N/A" else user.toString())
            }
        }
    }
}