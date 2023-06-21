package components.table.menu

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Composable
fun semesterMenu() {
    var activeMenu by remember { StateManager.activeMenu }
    var groups by remember { StateManager.groups }
    Div (attrs = { classes("menu", "vertical-menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text("Present semesters") }
        }
        Div {
            groups.distinctBy { it.semesterEnum }.map {
                Span (attrs = {classes("distinct-option")}) { Text("${it.semesterEnum}") }
            }
        }
        menuButton("OK") {
            activeMenu = null
        }
    }
}