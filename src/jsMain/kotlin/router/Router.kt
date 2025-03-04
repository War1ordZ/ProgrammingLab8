package router

import androidx.compose.runtime.*
import app.softwork.routingcompose.BrowserRouter
import components.header.header
import org.jetbrains.compose.web.dom.Text
import pages.ImportHistoryPage  // убедитесь, что путь корректный
import pages.authPage
import pages.loadingPage
import pages.mainPage
import pages.overviewPage
import pages.tablePage

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
            route(Routes.IMPORT) { // Новый маршрут
                ImportHistoryPage()
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
