package components.table

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import components.table.menu.Menu
import data.groups.StudyGroup
import org.jetbrains.compose.web.dom.*
import removeGroup

@Composable
fun tableRow(group: StudyGroup) {
    val token by remember { StateManager.token }
    val username by remember { StateManager.user }
    var activeGroup by remember { StateManager.activeGroup }
    var activeMenu by remember { StateManager.activeMenu }
    Div(attrs = { classes("table-row") }) {
        Div(attrs = { classes("table-row-group-info") }) {
            Span { Text("ID: ${group.id}") }
            Span { Text("Name: ${group.name}") }
            Span(attrs = { classes("group-info-panel") }) {
                B { Text("Group info") }
                Div {
                    Div(attrs = { classes("group-info-header") }) {
                        B { Text("Group info") }
                    }
                    Div {
                        Div { Text("Students: ${group.studentsCount}") }
                        Div { Text("Form: ${group.formOfEducation}") }
                        Div { Text("Semester: ${group.semesterEnum}") }
                        Div { Text("Coordinates: x = ${group.coordinates!!.x} / y = ${group.coordinates!!.y}") }
                    }
                }
            }
            Span(attrs = { classes("group-info-panel") }) {
                B { Text("Admin info") }
                Div {
                    Div(attrs = { classes("group-info-header") }) {
                        B { Text("Admin info") }
                    }
                    Div {
                        Div { Text("Name: ${group.groupAdmin!!.name}") }
                        Div { Text("Eye color: ${group.groupAdmin!!.eyeColor}") }
                        Div { Text("Weight: ${group.groupAdmin!!.weight}") }
                        Div { Text("Location: x = ${group.groupAdmin!!.location!!.x} / " +
                                "y = ${group.groupAdmin!!.location!!.y} / " +
                                "z = ${group.groupAdmin!!.location!!.z}") }
                    }
                }
            }
        }
        Div(attrs = { classes("table-row-group-config") }) {
            Span { Text("Created: ${group.creationDate}") }
            Span { Text("Owner: ${group.owner}") }
            if (group.owner == username) {
                Span (attrs = {
                    classes("table-row-group-config-button")
                    onClick {
                        activeGroup = group
                        activeMenu = Menu.UPDATE
                    }
                }) { Img(src = "/icons/pencil.svg") }
                Span (attrs = {
                    classes("table-row-group-config-button")
                    onClick {
                        removeGroup(group.id!!, token!!)
                    }
                }) { Img(src = "/icons/trash.svg") }
            }
        }
    }
}