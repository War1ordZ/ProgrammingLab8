package components.table.menu

import StateManager
import addGroup
import androidx.compose.runtime.*
import data.groups.*
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
    var token by remember { StateManager.token }
    var user by remember { StateManager.user }
    var error by remember { mutableStateOf("") }

    if (activeGroup == null) {
        activeMenu = null
    }
    Div (attrs = { classes("menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text("Update group (id: ${activeGroup!!.id!!})") }
        }
        H2 { Text("Group info") }
        Div {
            Span {
                Text("Name:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    name = ev.value
                    if (name.isEmpty()) {
                        error = "Name is empty"
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
                Text("Coordinates.X:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    coordinateX = ev.value
                    if (coordinateX.isEmpty()) {
                        error = "X coordinate value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        if (coordinateX.toFloat() > -156f) {
                            ""
                        } else {
                            "Students must be > 0"
                        }
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for X coordinate"
                    }
                }
                defaultValue(activeGroup!!.coordinates!!.x!!)
            })
        }
        Div {
            Span {
                Text("Coordinates.Y:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    coordinateY = ev.value
                    if (coordinateY.isEmpty()) {
                        error = "Y coordinate value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        coordinateY.toLong()
                        ""
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for Y coordinate"
                    }
                }
                defaultValue(activeGroup!!.coordinates!!.y!!)
            })
        }
        Div {
            Span {
                Text("Students:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    students = ev.value
                    if (students.isEmpty()) {
                        error = "Students value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        if (students.toInt() > 0) {
                            ""
                        } else {
                            "Students must be > 0"
                        }
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for students"
                    }
                }
                defaultValue(activeGroup!!.studentsCount!!)
            })
        }
        Div {
            Span {
                Text("Form of education:")
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
                Text("Semester:")
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
        H2 { Text("Group admin") }
        Div {
            Span {
                Text("Name:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    adminName = ev.value
                    if (adminName.isEmpty()) {
                        error = "Admin name is empty"
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
                Text("Weight:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    adminWeight = ev.value
                    if (adminWeight.isEmpty()) {
                        error = "Admin weight value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        if (adminWeight.toLong() > 0) {
                            ""
                        } else {
                            "Weight must be > 0"
                        }
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for weight"
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.weight!!)
            })
        }
        Div {
            Span {
                Text("Eye color:")
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
                Text("Location.X:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    locationX = ev.value
                    if (locationX.isEmpty()) {
                        error = "X location value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        locationX.toFloat()
                        ""
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for location X"
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.location!!.x)
            })
        }
        Div {
            Span {
                Text("Location.Y:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    locationY = ev.value
                    if (locationY.isEmpty()) {
                        error = "Y location value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        locationY.toInt()
                        ""
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for location Y"
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.location!!.y!!)
            })
        }
        Div {
            Span {
                Text("Location.Z:")
            }
            Input(type = InputType.Text, attrs = {
                onInput { ev ->
                    locationZ = ev.value
                    if (locationZ.isEmpty()) {
                        error = "Z location value is empty"
                        return@onInput
                    } else {
                        error = ""
                    }
                    error = try {
                        locationZ.toInt()
                        ""
                    } catch (ex: NumberFormatException) {
                        "Incorrect value for location Z"
                    }
                }
                defaultValue(activeGroup!!.groupAdmin!!.location!!.z)
            })
        }
        Div (attrs = {classes("menu-error-message")}) {
            Text(error)
        }
        Div {
            menuButton("Cancel") {
                activeMenu = null
            }
            menuButton("Proceed") {
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
            }
        }
    }
}