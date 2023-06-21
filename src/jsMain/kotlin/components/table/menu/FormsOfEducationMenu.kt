package components.table.menu

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Composable
fun formsOfEducationMenu() {
    var activeMenu by remember { StateManager.activeMenu }
    var groups by remember { StateManager.groups }
    Div (attrs = { classes("menu", "vertical-menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text("Present forms of education") }
        }
        Div {
            groups.distinctBy { it.formOfEducation }.map {
                Span (attrs = {classes("distinct-option")}) { Text("${it.formOfEducation}") }
            }
        }
        menuButton("OK") {
            activeMenu = null
        }
    }
}