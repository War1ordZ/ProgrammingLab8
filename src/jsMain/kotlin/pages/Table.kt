package pages

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import components.table.menu.Menu
import components.table.menu.menu
import components.table.operationButton
import components.table.table
import org.jetbrains.compose.web.dom.Div
import removeAllGroups

@Composable
fun tablePage() {
    val token by remember { StateManager.token }
    var activeMenu by remember { StateManager.activeMenu }
    menu()
    Div (attrs = {classes("table-page", "full-screen")}) {
        Div (attrs = {classes("operation-buttons-container")}) {
            operationButton("/icons/plus.svg", "Add group") {
                println("sus")
                activeMenu = Menu.ADD
            }
            operationButton("/icons/trash.svg", "Remove all your groups") {
                removeAllGroups(token!!)
            }
            operationButton("/icons/briefcase.svg", "Show all forms of education") {
                activeMenu = Menu.SHOW_FORMS_OF_EDUCATION
            }
            operationButton("/icons/arrow.svg", "Show all semesters") {
                activeMenu = Menu.SHOW_SEMESTERS
            }
        }
        Div (attrs = {classes("table-section")}) {
            Div (attrs = {classes("table")}) {
                table()
            }
        }
    }
}
