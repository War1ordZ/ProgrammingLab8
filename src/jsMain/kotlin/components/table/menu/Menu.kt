package components.table.menu

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.dom.Div

enum class Menu {
    ADD,
    UPDATE,
    SHOW_FORMS_OF_EDUCATION,
    SHOW_SEMESTERS
}

@Composable
fun menu() {
    var activeMenu by remember { StateManager.activeMenu }
    if (activeMenu != null) {
        Div (attrs = {classes("centered-container", "full-screen-container")}) {
            if (activeMenu == Menu.ADD) {
                addMenu()
            } else if (activeMenu == Menu.UPDATE) {
                updateMenu()
            } else if (activeMenu == Menu.SHOW_SEMESTERS) {
                semesterMenu()
            } else if (activeMenu == Menu.SHOW_FORMS_OF_EDUCATION) {
                formsOfEducationMenu()
            }
        }
    }
}