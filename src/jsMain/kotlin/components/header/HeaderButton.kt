package components.header

import androidx.compose.runtime.Composable
import app.softwork.routingcompose.NavLink
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

@Composable
fun headerButton(text: String, link: String) {
    NavLink (to = link, attrs = {classes("header-button-container", "centered-container")}) {
        Div (attrs = {classes("header-button", "centered-container")}) {
            Text(text)
        }
    }
}