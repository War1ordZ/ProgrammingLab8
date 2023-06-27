import androidx.compose.runtime.mutableStateOf
import components.table.menu.Menu
import data.TokenData
import data.groups.StudyGroup
import org.w3c.dom.WebSocket

object StateManager {
    val language = mutableStateOf(Languages.RUSSIAN)
    val pageId = mutableStateOf(0)
    val isLoadReady = mutableStateOf(false)
    val user = mutableStateOf<String?>(null)
    val token = mutableStateOf<TokenData?>(null)
    var activeMenu = mutableStateOf<Menu?>(null)
    val authorized = mutableStateOf(false)
    val groups = mutableStateOf<List<StudyGroup>>(listOf())
    var activeGroup = mutableStateOf<StudyGroup?>(null)
}