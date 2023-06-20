import androidx.compose.runtime.*
import org.jetbrains.compose.web.renderComposable
import router.router

fun main() {
    println(getCookie("lang"))
    renderComposable(rootElementId = "root") {
        val startupFlag = remember { mutableStateOf(true) }
        if (startupFlag.value) {
            restoreData()
            startupFlag.value = false
        }
        router()
    }
}



