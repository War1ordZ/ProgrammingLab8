import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import data.TokenData
import kotlinx.browser.document
import org.w3c.dom.events.Event
import org.w3c.xhr.XMLHttpRequest

object Cookies {
    const val LANG = "lang"
    const val TOKEN = "token"
    const val TOKEN_TYPE = "token_type"
}

@Composable
fun restoreData() {
    var locale by remember { StateManager.language }
    var token by remember { StateManager.token }
    var user by remember { StateManager.user }
    var auth by remember { StateManager.authorized }

    val lang = getCookie(Cookies.LANG)
    if (lang != null) {
        try {
            val savedLocale = Languages.valueOf(lang)
            locale = savedLocale
        } catch (ex: IllegalArgumentException) {
            error("'lang' cookie value is not valid");
        }
    }

    val accessToken = getCookie(Cookies.TOKEN)
    val tokenType = getCookie(Cookies.TOKEN_TYPE)
    if (accessToken != null && tokenType != null) {
        token = TokenData(accessToken, tokenType)
        val onSuccess: (XMLHttpRequest) -> ((Event) -> dynamic)= { xhr -> {
                if (xhr.status == 200.toShort()) {
                    auth = true
                    user = xhr.responseText
                } else {
                    auth = false
                }
            }
        }
        console.log("Restoring username...")
        restoreUsername(token!!, onSuccess)
    } else {
        auth = false
    }
}

fun setCookie(name: String, value: String) {
    document.cookie = "${name}=${value}; path=/;"
}

fun getCookie(name: String): String? {
    val cookies = document.cookie;
    val regex = "(?<=${name}=).+?(?=;|\$|\\s)".toRegex()
    return regex.find(cookies)?.value
}

fun removeCookie(name: String) {
    document.cookie = "${name}=null; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
}