import androidx.compose.runtime.mutableStateOf
import data.TokenData
import data.groups.StudyGroup

object StateManager {
    val language = mutableStateOf(Languages.RUSSIAN)
    val pageId = mutableStateOf(0)
    val isLoadReady = mutableStateOf(false)
    val user = mutableStateOf<String?>(null)
    val token = mutableStateOf<TokenData?>(null)
    val authorized = mutableStateOf(false)

    val groups = mutableStateOf<List<StudyGroup>>(listOf())
}