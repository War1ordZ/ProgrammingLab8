package pages

import androidx.compose.runtime.*
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.attributes.name
import org.jetbrains.compose.web.dom.*
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Console

@Composable
fun mainPage() {
    val usernameState = mutableStateOf("")
    val passwordState = mutableStateOf("")
    var username by remember { usernameState }
    var password by remember { passwordState }

}



