package components.table

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Img
import org.jetbrains.compose.web.dom.Text

@Composable
fun operationButton(icon: String, hint: String, callback: () -> Unit) {
    Div (attrs = {
        classes("operation-button", "centered-container")
        onClick { callback() }
    }) {
        Img(src = icon)
        Div {
            Text(hint)
        }
    }
}
