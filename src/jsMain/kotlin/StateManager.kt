import androidx.compose.runtime.mutableStateOf
import data.TokenData

object StateManager {
    val language = mutableStateOf(Languages.RUSSIAN)
    val pageId = mutableStateOf(0)
    val user = mutableStateOf<String?>(null)
    val token = mutableStateOf<TokenData?>(null)
    val authorized = mutableStateOf(false)
}