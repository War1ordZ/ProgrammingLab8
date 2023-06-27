package components.table.menu

import StateManager
import addGroup
import androidx.compose.runtime.*
import data.groups.*
import language.translatable
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.attributes.selected
import org.jetbrains.compose.web.dom.*
import updateGroup

@Composable
fun updateMenu() {
    var activeGroup by remember { StateManager.activeGroup }
    var name by remember { mutableStateOf<String>(activeGroup!!.name!!) }
    var students by remember { mutableStateOf(activeGroup!!.studentsCount.toString()) }
    var coordinateX by remember { mutableStateOf(activeGroup!!.coordinates!!.x.toString()) }
    var coordinateY by remember { mutableStateOf(activeGroup!!.coordinates!!.y.toString()) }
    var semester by remember { mutableStateOf(activeGroup!!.semesterEnum!!.name) }
    var formOfEducation by remember { mutableStateOf(if (activeGroup!!.formOfEducation == null) "null" else activeGroup!!.formOfEducation!!.name) }
    var adminName by remember { mutableStateOf(activeGroup!!.groupAdmin!!.name!!) }
    var adminWeight by remember { mutableStateOf(activeGroup!!.groupAdmin!!.weight!!.toString()) }
    var eyeColor by remember { mutableStateOf(activeGroup!!.groupAdmin!!.eyeColor!!.name) }
    var locationX by remember { mutableStateOf(activeGroup!!.groupAdmin!!.location!!.x.toString()) }
    var locationY by remember { mutableStateOf(activeGroup!!.groupAdmin!!.location!!.y.toString()) }
    var locationZ by remember { mutableStateOf(activeGroup!!.groupAdmin!!.location!!.z.toString()) }
    var activeMenu by remember { StateManager.activeMenu }
    val token by remember { StateManager.token }
    val user by remember { StateManager.user }
    var error by remember { mutableStateOf("") }
    val currentLocale by remember { StateManager.language }

    if (activeGroup == null) {
        activeMenu = null
    }
    Div (attrs = { classes("menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text("${translatable("update-group", currentLocale)} (id: ${activeGroup!!.id!!})") }
        }
        H2 { Text(translatable("add-group-info", currentLocale)) }
        Div {
            Span {
                Text(translatable("group-name", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    name = ev.value
                    if (name.isEmpty()) {
                        error = translatable("error-empty-group-name", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                }
                defaultValue(activeGroup!!.name!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-coordinate-x", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    coordinateX = ev.value
                    if (coordinateX.isEmpty()) {
                        error = translatable("error-coordinate-x-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        if (coordinateX.toFloat() > -156f) {
                            ""
                        } else {
                            translatable("error-coordinate-x-invalid", currentLocale)
                        }
                    } catch (ex: NumberFormatException) {
                        translatable("error-coordinate-x-format", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.coordinates!!.x!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-coordinate-y", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    coordinateY = ev.value
                    if (coordinateY.isEmpty()) {
                        error = translatable("error-coordinate-y-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        coordinateY.toLong()
                        ""
                    } catch (ex: NumberFormatException) {
                        translatable("error-coordinate-y-format", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.coordinates!!.y!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-students", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    students = ev.value
                    if (students.isEmpty()) {
                        error = translatable("error-students-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        if (students.toInt() > 0) {
                            ""
                        } else {
                            translatable("error-students-invalid", currentLocale)
                        }
                    } catch (ex: NumberFormatException) {
                        translatable("error-students-format", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.studentsCount!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-education-form", currentLocale))
            }
            Select (attrs = {
                onChange { ev ->
                    formOfEducation = ev.value!!
                }
            }) {
                Option("null", attrs = {
                    if (activeGroup!!.formOfEducation == null) {
                        selected()
                    }
                }) { Text("null") }
                Option("DISTANCE_EDUCATION", attrs = {
                    if (activeGroup!!.formOfEducation == FormOfEducation.DISTANCE_EDUCATION) {
                        selected()
                    }
                }) { Text("DISTANCE_EDUCATION") }
                Option("FULL_TIME_EDUCATION", attrs = {
                    if (activeGroup!!.formOfEducation == FormOfEducation.FULL_TIME_EDUCATION) {
                        selected()
                    }
                }) {Text("FULL_TIME_EDUCATION")}
                Option("EVENING_CLASSES", attrs = {
                    if (activeGroup!!.formOfEducation == FormOfEducation.EVENING_CLASSES) {
                        selected()
                    }
                }) { Text("EVENING_CLASSES") }
            }
        }
        Div {
            Span {
                Text(translatable("group-semester", currentLocale))
            }
            Select (attrs = {
                onChange { ev ->
                    semester = ev.value!!
                }
            }) {
                Option("SECOND", attrs = {
                    if (activeGroup!!.semesterEnum == Semester.SECOND) {
                        selected()
                    }
                }) { Text("SECOND") }
                Option("THIRD", attrs = {
                    if (activeGroup!!.semesterEnum == Semester.THIRD) {
                        selected()
                    }
                }) {Text("THIRD")}
                Option("SIXTH", attrs = {
                    if (activeGroup!!.semesterEnum == Semester.SIXTH) {
                        selected()
                    }
                }) { Text("SIXTH") }
            }
        }
        H2 { Text(translatable("group-admin-info", currentLocale)) }
        Div {
            Span {
                Text(translatable("group-admin-name", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    adminName = ev.value
                    if (adminName.isEmpty()) {
                        error = translatable("error-admin-name-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.name!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-admin-weight", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    adminWeight = ev.value
                    if (adminWeight.isEmpty()) {
                        error = translatable("error-admin-weight-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        if (adminWeight.toLong() > 0) {
                            ""
                        } else {
                            translatable("error-admin-weight-invalid", currentLocale)
                        }
                    } catch (ex: NumberFormatException) {
                        translatable("error-admin-weight-incorrect", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.weight!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-admin-eye-color", currentLocale))
            }
            Select (attrs = {
                onChange { ev ->
                    eyeColor = ev.value!!
                }
            }) {
                Option("RED", attrs = {
                    if (activeGroup!!.groupAdmin!!.eyeColor == Color.RED) {
                        selected()
                    }
                }) { Text("RED") }
                Option("BLACK", attrs = {
                    if (activeGroup!!.groupAdmin!!.eyeColor == Color.BLACK) {
                        selected()
                    }
                }) {Text("BLACK")}
                Option("YELLOW", attrs = {
                    if (activeGroup!!.groupAdmin!!.eyeColor == Color.YELLOW) {
                        selected()
                    }
                }) { Text("YELLOW") }
            }
        }
        Div {
            Span {
                Text(translatable("group-admin-location-x", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    locationX = ev.value
                    if (locationX.isEmpty()) {
                        error = translatable("error-admin-location-x-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        locationX.toFloat()
                        ""
                    } catch (ex: NumberFormatException) {
                        translatable("error-admin-location-x-incorrect", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.location!!.x)
            })
        }
        Div {
            Span {
                Text(translatable("group-admin-location-y", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    locationY = ev.value
                    if (locationY.isEmpty()) {
                        error = translatable("error-admin-location-y-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        locationY.toInt()
                        ""
                    } catch (ex: NumberFormatException) {
                        translatable("error-admin-location-y-incorrect", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.location!!.y!!)
            })
        }
        Div {
            Span {
                Text(translatable("group-admin-location-z", currentLocale))
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    locationZ = ev.value
                    if (locationZ.isEmpty()) {
                        error = translatable("error-admin-location-z-empty", currentLocale)
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        locationZ.toInt()
                        ""
                    } catch (ex: NumberFormatException) {
                        translatable("error-admin-location-z-incorrect", currentLocale)
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.location!!.z)
            })
        }
        Div (attrs = {classes("menu-error-message")}) {
            Text(error)
        }
        Div {
            menuButton(translatable("button-cancel", currentLocale)) {
                activeMenu = null
                activeGroup = null
            }
            menuButton(translatable("button-proceed", currentLocale)) {
                if (error.isNotBlank()
                    || name.isBlank()
                    || coordinateX.isBlank()
                    || students.isBlank()
                    || adminName.isBlank()
                    || adminWeight.isBlank()
                    || locationX.isBlank()
                    || locationY.isBlank()
                    || locationZ.isBlank()) {
                    return@menuButton
                }
                val group = StudyGroup(
                    id = 0,
                    name = name,
                    coordinates = Coordinates(
                        x = coordinateX.toFloat(),
                        y = coordinateY.toLong()
                    ),
                    creationDate = "default",
                    formOfEducation = FormOfEducation.valueOfOrNull(formOfEducation),
                    semesterEnum = Semester.valueOf(semester),
                    studentsCount = students.toInt(),
                    groupAdmin = Person(
                        name = adminName,
                        weight = adminWeight.toLong(),
                        eyeColor = Color.valueOf(eyeColor),
                        location = Location(
                            x = locationX.toFloat(),
                            y = locationY.toInt(),
                            z = locationZ.toInt()
                        )
                    ),
                    owner = user!!
                )
                updateGroup(activeGroup!!.id!!, group, token!!)
                activeMenu = null
                activeGroup = null
            }
        }
    }
}