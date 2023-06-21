package components.table

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue

@Composable
fun table() {
    val appGroups by remember { StateManager.groups }
    println(appGroups.size)
    appGroups.map {
        group -> tableRow(group)
    }
}