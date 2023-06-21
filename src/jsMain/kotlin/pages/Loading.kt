package pages

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Text

@Composable
fun loadingPage() {
    Div (attrs = {classes("full-screen", "centered-container", "loading-screen")}) {
        Text("Loading...")
    }
}