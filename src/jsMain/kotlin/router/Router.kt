package router

import Languages
import StateManager
import androidx.compose.runtime.*
import app.softwork.routingcompose.BrowserRouter
import app.softwork.routingcompose.HashRouter
import components.header.header
import org.jetbrains.compose.web.dom.Text
import org.w3c.dom.WebSocket
import pages.*

@Composable
fun router() {
    BrowserRouter(initPath = Routes.DEFAULT) {
        val authStatus by remember { StateManager.authorized }
        val readyStatus by remember { StateManager.isLoadReady }
        header()
        if (authStatus) {
            route(Routes.MAIN) {
                mainPage()
            }
            route(Routes.TABLE) {
                tablePage()
            }
            route(Routes.OVERVIEW) {
                overviewPage()
            }
            route(Routes.ANY) {
                Text("404")
            }
        } else if (readyStatus) {
            authPage()
        } else {
            loadingPage()
        }

    }
}

