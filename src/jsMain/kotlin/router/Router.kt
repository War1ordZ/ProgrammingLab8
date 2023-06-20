package router

import Languages
import androidx.compose.runtime.*
import app.softwork.routingcompose.BrowserRouter
import app.softwork.routingcompose.HashRouter
import components.header.header
import org.jetbrains.compose.web.dom.Text
import pages.mainPage

@Composable
fun router() {
    BrowserRouter(initPath = Routes.DEFAULT) {
        header()
        route(Routes.MAIN) {
            mainPage()
        }
        route(Routes.TABLE) {
            Text("Table")
        }
        route(Routes.OVERVIEW) {
            Text("Overview")
        }
    }
}

