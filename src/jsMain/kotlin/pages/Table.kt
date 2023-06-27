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
import language.translatable
import org.jetbrains.compose.web.dom.Div
import removeAllGroups

@Composable
fun tablePage() {
    val token by remember { StateManager.token }
    var activeMenu by remember { StateManager.activeMenu }
    var currentLocale by remember { StateManager.language }
    menu()
    Div (attrs = {classes("table-page", "full-screen")}) {
        Div (attrs = {classes("operation-buttons-container")}) {
            operationButton("/icons/plus.svg", translatable("table-hint-add", currentLocale)) {
                println("sus")
                activeMenu = Menu.ADD
            }
            operationButton("/icons/trash.svg", translatable("table-hint-remove", currentLocale)) {
                removeAllGroups(token!!)
            }
            operationButton("/icons/briefcase.svg", translatable("table-hint-education", currentLocale)) {
                activeMenu = Menu.SHOW_FORMS_OF_EDUCATION
            }
            operationButton("/icons/arrow.svg", translatable("table-hint-semesters", currentLocale)) {
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
