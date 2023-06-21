package components.table.menu

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Composable
fun menuButton(name: String, callback: () -> Unit) {
    Span (attrs = {
        classes("centered-container", "menu-button")
        onClick {
            callback()
        }
    }) { Text(name) }
}