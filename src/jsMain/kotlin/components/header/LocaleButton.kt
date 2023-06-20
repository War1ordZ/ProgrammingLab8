package components.header

import Languages
import StateManager
import androidx.compose.runtime.*
import app.softwork.routingcompose.NavLink
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Img
import org.jetbrains.compose.web.dom.Text
import org.w3c.dom.svg.SVGElement

@Composable
fun localeButton() {
    val locale by remember { StateManager.language }
    Div (attrs = {classes("header-button", "centered-container", "header-locale-button")}) {
        Text(locale.nativeName)
        Div (attrs = {classes("locale-menu")}) {
            Languages.values().map { lang ->
                localeOption(lang)
            }
        }
    }
}