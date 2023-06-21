package pages

import androidx.compose.runtime.Composable
import components.table.table
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Text

@Composable
fun tablePage() {
    Div (attrs = {classes("table-page", "full-screen")}) {
        Div (attrs = {classes("table-section")}) {
            H1 {
                Text("Operations")
            }
        }
        Div (attrs = {classes("table-section")}) {
            H1 {
                Text("Table")
            }
            Div (attrs = {classes("table")}) {
                table()
            }
        }
    }
}
