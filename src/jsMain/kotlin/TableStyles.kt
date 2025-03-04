package styles

import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Style

object TableStyles : StyleSheet() {

    // Секция загрузки файла
    val uploadSection by style {
        property("margin", "16px auto")
        property("width", "320px")
        property("padding", "16px")
        property("border", "1px solid #ccc")
        property("border-radius", "8px")
    }

    // Обёртка для кнопки «Обновить историю»
    val historyRefresh by style {
        property("margin", "16px 0")
    }

    // Общая обёртка, которую используем для «таблицы»
    val historyTable by style {
        property("margin-top", "24px")
        property("max-width", "600px")
        property("margin-left", "auto")
        property("margin-right", "auto")
        property("font-family", "sans-serif")
    }

    // Шапка «таблицы» (заголовки)
    val tableHeader by style {
        property("display", "grid")
        property("grid-template-columns", "1fr 1fr 1fr 1fr 1fr")
        property("background-color", "#f0f0f0")
        property("font-weight", "bold")
        property("padding", "8px")
        property("border-bottom", "1px solid #ccc")
    }

    // Строки «таблицы»
    val tableRow by style {
        property("display", "grid")
        property("grid-template-columns", "1fr 1fr 1fr 1fr 1fr")
        property("padding", "8px")
        property("border-bottom", "1px solid #eee")
    }

    // Сообщение/ошибка
    val message by style {
        property("margin-top", "16px")
        property("font-size", "14px")
        property("color", "rgb(180, 0, 0)")
    }
}
