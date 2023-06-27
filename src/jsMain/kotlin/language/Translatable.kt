package language

import Languages
import StateManager
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import kotlin.js.Date
import kotlin.time.Duration.Companion.days

fun translatable(code: String, currentLocale: Languages): String {
    var res: String? = null
    if (currentLocale == Languages.RUSSIAN) {
        res = Russian.dictionary[code]
    } else if (currentLocale == Languages.ENGLISH) {
        res = English.dictionary[code]
    }
    return res ?: "N/A";
}

fun localizedDate(date: String, currentLocale: Languages): String {
    val year = date.subSequence(0, 4)
    val month = date.subSequence(5, 7)
    val day = date.subSequence(8, 10)
    var res: String? = null
    if (currentLocale == Languages.RUSSIAN) {
        res = "${day}-${month}-${year}"
    } else if (currentLocale == Languages.ENGLISH) {
        res = "${year}-${month}-${day}"
    }
    return res ?: "N/A";
}