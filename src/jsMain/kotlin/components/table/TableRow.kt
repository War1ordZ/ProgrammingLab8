package components.table

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import components.table.menu.Menu
import data.groups.StudyGroup
import language.localizedDate
import language.translatable
import org.jetbrains.compose.web.dom.*
import removeGroup

@Composable
fun tableRow(group: StudyGroup) {
    val token by remember { StateManager.token }
    val username by remember { StateManager.user }
    var activeGroup by remember { StateManager.activeGroup }
    var activeMenu by remember { StateManager.activeMenu }
    val currentLocale by remember { StateManager.language }
    Div(attrs = { classes("table-row") }) {
        Div(attrs = { classes("table-row-group-info") }) {
            Span { Text("ID: ${group.id}") }
            Span { Text("${translatable("table-name", currentLocale)}: ${group.name}") }
            Span(attrs = { classes("group-info-panel") }) {
                B { Text(translatable("table-group-info", currentLocale)) }
                Div {
                    Div(attrs = { classes("group-info-header") }) {
                        B { Text(translatable("table-group-info", currentLocale)) }
                    }
                    Div {
                        Div { Text("${translatable("students", currentLocale)}: ${group.studentsCount}") }
                        Div { Text("${translatable("form", currentLocale)}: ${group.formOfEducation}") }
                        Div { Text("${translatable("semester", currentLocale)}: ${group.semesterEnum}") }
                        Div { Text("${translatable("coordinates", currentLocale)}: x = ${group.coordinates!!.x} / y = ${group.coordinates!!.y}") }
                    }
                }
            }
            Span(attrs = { classes("group-info-panel") }) {
                B { Text(translatable("admin-info", currentLocale)) }
                Div {
                    Div(attrs = { classes("group-info-header") }) {
                        B { Text(translatable("admin-info", currentLocale)) }
                    }
                    Div {
                        Div { Text("${translatable("admin-name", currentLocale)}: ${group.groupAdmin!!.name}") }
                        Div { Text("${translatable("eye-color", currentLocale)}: ${group.groupAdmin!!.eyeColor}") }
                        Div { Text("${translatable("weight", currentLocale)}: ${group.groupAdmin!!.weight}") }
                        Div { Text("${translatable("location", currentLocale)}: x = ${group.groupAdmin!!.location!!.x} / " +
                                "y = ${group.groupAdmin!!.location!!.y} / " +
                                "z = ${group.groupAdmin!!.location!!.z}") }
                    }
                }
            }
        }
        Div(attrs = { classes("table-row-group-config") }) {
            Span { Text("${translatable("created", currentLocale)}: ${localizedDate(group.creationDate!!, currentLocale)}") }
            Span { Text("${translatable("owner", currentLocale)}: ${group.owner}") }
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