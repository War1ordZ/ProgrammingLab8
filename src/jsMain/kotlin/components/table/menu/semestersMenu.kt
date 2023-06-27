package components.table.menu

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
fun semesterMenu() {
    var activeMenu by remember { StateManager.activeMenu }
    var groups by remember { StateManager.groups }
    var currentLocale by remember { StateManager.language }
    Div (attrs = { classes("menu", "vertical-menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text(translatable("present-edu-semesters", currentLocale)) }
        }
        Div (attrs = {classes("distinct-option-menu")}) {
            groups.distinctBy { it.semesterEnum }.map {
                Div (attrs = {classes("distinct-option")}) { Text("${it.semesterEnum}") }
            }
        }
        menuButton("OK") {
            activeMenu = null
        }
    }
}