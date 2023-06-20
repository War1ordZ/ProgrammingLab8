import androidx.compose.runtime.mutableStateOf

object StateManager {
    val language = mutableStateOf(Languages.RUSSIAN)
    val user = mutableStateOf<String?>(null)
    val token = mutableStateOf<String?>(null)
    val authorized = mutableStateOf<Boolean>(false)
}