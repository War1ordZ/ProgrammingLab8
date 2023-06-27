package components.table.menu

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import language.translatable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Composable
fun formsOfEducationMenu() {
    var activeMenu by remember { StateManager.activeMenu }
    var groups by remember { StateManager.groups }
    var currentLocale by remember { StateManager.language }
    Div (attrs = { classes("menu", "vertical-menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text(translatable("present-edu-forms", currentLocale)) }
        }
        Div (attrs = {classes("distinct-option-menu")}) {
            groups.distinctBy { it.formOfEducation }.map {
                Div (attrs = {classes("distinct-option")}) { Text("${it.formOfEducation}") }
            }
        }
        menuButton("OK") {
            activeMenu = null
        }
    }
}