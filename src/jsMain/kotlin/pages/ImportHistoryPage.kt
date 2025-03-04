package pages

import androidx.compose.runtime.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.css.Style
import styles.TableStyles

// Зависимости, которые вы используете в своём проекте
import components.FileUploadComponent
import ImportHistoryData
import requestImportHistory
import data.TokenData
import StateManager
import org.w3c.dom.events.Event

@Composable
fun ImportHistoryPage() {
    val token = StateManager.token.value
    var message by remember { mutableStateOf("") }
    var historyList by remember { mutableStateOf<List<ImportHistoryData>>(emptyList()) }

    // Подключаем стили из TableStyles
    Style(TableStyles)

    fun loadHistory() {
        if (token == null) {
            message = "Пользователь не авторизован"
            return
        }
        requestImportHistory(
            token,
            successCallback = { xhr ->
                { _: Event ->
                    if (xhr.status.toInt() == 200) {
                        try {
                            // Парсим полученный JSON-массив в список объектов ImportHistoryData
                            val data: Array<ImportHistoryData> = JSON.parse(xhr.responseText)
                            historyList = data.toList()
                        } catch (e: Throwable) {
                            message = "Ошибка при разборе данных истории импорта"
                        }
                    } else {
                        message = "Ошибка получения истории: ${xhr.responseText}"
                    }
                }
            },
            errorCallback = { xhr ->
                { _: Event ->
                    message = "Ошибка запроса истории импортов"
                }
            }
        )
    }

    // При смене или появлении token (авторизации), загружаем историю заново
    LaunchedEffect(token) {
        loadHistory()
    }

    // Разметка страницы
    Div {
        // Вместо classes("upload-section") — используем classes(TableStyles.uploadSection)
        Div(attrs = { classes(TableStyles.uploadSection) }) {
            FileUploadComponent(token!!)
        }

        Div(attrs = { classes(TableStyles.historyRefresh) }) {
            Button(attrs = {
                onClick { loadHistory() }
            }) {
                Text("Обновить историю импортов")
            }
        }

        Div(attrs = { classes(TableStyles.historyTable) }) {
            if (historyList.isEmpty()) {
                Text("История импортов пуста")
            } else {
                // Шапка «таблицы»
                Div(attrs = { classes(TableStyles.tableHeader) }) {
                    Div { Text("ID") }
                    Div { Text("Статус") }
                    Div { Text("Пользователь") }
                    Div { Text("Кол-во объектов") }
                    Div { Text("Время") }
                }

                // Строки «таблицы»
                historyList.forEach { item ->
                    Div(attrs = { classes(TableStyles.tableRow) }) {
                        Div { Text(item.id.toString()) }
                        Div { Text(item.status) }
                        Div { Text(item.username) }
                        Div { Text(item.importedCount.toString()) }
                        Div { Text(item.timestamp) }
                    }
                }
            }
        }

        // Сообщение/ошибка
        if (message.isNotEmpty()) {
            Div(attrs = { classes(TableStyles.message) }) {
                Text(message)
            }
        }
    }
    
}
