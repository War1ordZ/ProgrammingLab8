package pages

import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import language.translatable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Text

@Composable
fun loadingPage() {
    val currentLocale by remember { StateManager.language }
    Div (attrs = {classes("full-screen", "centered-container", "loading-screen")}) {
        org.w3c.dom.Text(translatable("loading-progress", currentLocale))
    }
}