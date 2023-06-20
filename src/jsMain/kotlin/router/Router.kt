package router

import Languages
import StateManager
import androidx.compose.runtime.*
import app.softwork.routingcompose.BrowserRouter
import app.softwork.routingcompose.HashRouter
import components.header.header
import org.jetbrains.compose.web.dom.Text
import pages.authPage
import pages.mainPage

@Composable
fun router() {
    BrowserRouter(initPath = Routes.DEFAULT) {
        val authStatus by remember { StateManager.authorized }
        header()
        if (authStatus) {
            route(Routes.MAIN) {
                mainPage()
            }
            route(Routes.TABLE) {
                Text("Table")
            }
            route(Routes.OVERVIEW) {
                Text("Overview")
            }
            route(Routes.ANY) {
                Text("404")
            }
        } else {
            authPage()
        }

    }
}

