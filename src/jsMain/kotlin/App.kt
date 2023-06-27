import androidx.compose.runtime.*
import kotlinx.browser.window
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.display
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Img
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.WebSocket
import router.router

var webSocket: WebSocket? = null

fun main() {
    renderComposable(rootElementId = "root") {
        var startupFlag by remember { mutableStateOf(true) }
        if (startupFlag) {
            restoreData()
            startupFlag = false
        }
        router()
        Div (attrs = {
            style {
                display(DisplayStyle.None)
            }
        }) {
            Img(src = "/images/doge.png", attrs = { id("doge")})
            Img(src = "/images/angry_doge.png", attrs = { id("angry-doge")})
            (0..123).map {
                Img(src = "/animations/mops/frame_${it}.png", attrs = { id("mops-animation-${it}")})
            }
        }
    }
}
