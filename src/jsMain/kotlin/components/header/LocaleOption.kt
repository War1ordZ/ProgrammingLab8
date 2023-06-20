package components.header

import Languages
import StateManager
import androidx.compose.runtime.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import setCookie

@Composable
fun localeOption(target: Languages) {
    var locale by remember { StateManager.language }

    Div (attrs = {
        classes("locale-option", "centered-container")
        onClick {
            locale = target
            setCookie("lang", target.name)
        }
    }) {
        Text(target.nativeName)
    }
}