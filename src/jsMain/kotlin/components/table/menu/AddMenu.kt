package components.table.menu

import StateManager
import addGroup
import androidx.compose.runtime.*
import data.groups.*
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.dom.*

@Composable
fun addMenu() {
    var name by remember { mutableStateOf("") }
    var students by remember { mutableStateOf("") }
    var coordinateX by remember { mutableStateOf("") }
    var coordinateY by remember { mutableStateOf("") }
    var semester by remember { mutableStateOf("SECOND") }
    var formOfEducation by remember { mutableStateOf("null") }
    var adminName by remember { mutableStateOf("") }
    var adminWeight by remember { mutableStateOf("") }
    var eyeColor by remember { mutableStateOf("RED") }
    var locationX by remember { mutableStateOf("") }
    var locationY by remember { mutableStateOf("") }
    var locationZ by remember { mutableStateOf("") }
    var activeMenu by remember { StateManager.activeMenu }
    var token by remember { StateManager.token }
    var user by remember { StateManager.user }

    var error by remember { mutableStateOf("") }
    Div (attrs = { classes("menu") }) {
        Div (attrs = { classes("centered-container","menu-header") }) {
            H1 { Text("Add new group") }
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
                Option("null") { Text("null") }
                Option("DISTANCE_EDUCATION") { Text("DISTANCE_EDUCATION") }
                Option("FULL_TIME_EDUCATION") {Text("FULL_TIME_EDUCATION")}
                Option("EVENING_CLASSES") { Text("EVENING_CLASSES") }
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
                Option("SECOND") { Text("SECOND") }
                Option("THIRD") {Text("THIRD")}
                Option("SIXTH") { Text("SIXTH") }
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
                Option("RED") { Text("RED") }
                Option("BLACK") {Text("BLACK")}
                Option("YELLOW") { Text("YELLOW") }
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
                addGroup(group, token!!)
                activeMenu = null
            }
        }
    }
}