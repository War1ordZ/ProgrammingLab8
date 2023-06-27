package pages

import StateManager
import androidx.compose.runtime.*
import language.translatable
import org.jetbrains.compose.web.dom.*

@Composable
fun mainPage() {
    val user by remember { StateManager.user }
    val currentLocale by remember { StateManager.language }
    Div (attrs = {classes("full-screen", "main-page")}) {
        Div (attrs = {classes("loading-header")}) {
            H1 {
                Text(translatable("welcome", currentLocale))
                Span {
                    Text(user!!)
                }
            }
        }
        Div (attrs = {classes("gif-container")}) {
            Img(src = "/images/deadge.gif")
            Img(src = "/images/deadge.gif")
            Img(src = "/images/deadge.gif")
        }
    }
}



