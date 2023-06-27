package components.header

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import app.softwork.routingcompose.NavLink
import kotlinx.browser.window
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

@Composable
fun headerButton(text: String, link: String, id: Int) {
    var currentId by remember { StateManager.pageId }
    NavLink (to = link, attrs = {
        classes("header-button-container", "centered-container")
        onClick {
            currentId = id
            console.log(currentId)
        }
    }) {
        Div (attrs = {classes("header-button", "centered-container")}) {
            Text(text)
        }
    }
}