import androidx.compose.runtime.*
import kotlinx.browser.document

@Composable
fun restoreData() {
    var locale by remember { StateManager.language }
    var token by remember { StateManager.token }

    val lang = getCookie("lang")
    if (lang != null) {
        try {
            val savedLocale = Languages.valueOf(lang)
            locale = savedLocale
        } catch (ex: IllegalArgumentException) {
            error("'lang' cookie value is not valid");
        }
    }

    val savedToken = getCookie("token")
}

fun setCookie(name: String, value: String) {
    document.cookie = "${name}=${value}; path=/;"
}

fun getCookie(name: String): String? {
    val cookies = document.cookie;
    val regex = "(?<=${name}=).+?(?=;|\$|\\s)".toRegex()
    return regex.find(cookies)?.value
}