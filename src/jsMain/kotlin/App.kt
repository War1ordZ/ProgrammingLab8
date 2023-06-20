import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.SideEffect
import kotlinx.browser.document
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.*
import router.router

fun main() {
    println(getCookie("lang"))
    renderComposable(rootElementId = "root") {
        restoreData()
        router()
    }
}



