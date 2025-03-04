package components

import androidx.compose.runtime.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.attributes.*
import data.TokenData
import importFile
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.files.File  // <-- org.w3c.files!
import org.jetbrains.compose.web.css.Style
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.margin
import FileUploadStyles // импортируем созданный выше объект со стилями

@Composable
fun FileUploadComponent(token: TokenData) {
    var selectedFile by remember { mutableStateOf<File?>(null) }
    var uploadMessage by remember { mutableStateOf("") }

    // Подключаем стили (можно подключать в корне приложения один раз)
    Style(FileUploadStyles)

    // Контейнер
    Div(attrs = {
        classes(FileUploadStyles.container)
    }) {
        // Поле для выбора файла
        Input(type = InputType.File, attrs = {
            classes(FileUploadStyles.fileInput)
            onChange { event ->
                val input = (event.target as? HTMLInputElement)
                val files = input?.files
                if (files != null && files.length > 0) {
                    selectedFile = files.item(0)
                }
            }
        })

        // Кнопка "Загрузить"
        Button(attrs = {
            classes(FileUploadStyles.button)
            onClick {
                val fileToSend = selectedFile
                if (fileToSend != null) {
                    importFile(
                        file = fileToSend,
                        token = token,
                        successCallback = { xhr ->
                            { _ ->
                                uploadMessage = "Файл успешно импортирован: ${xhr.responseText}"
                            }
                        },
                        errorCallback = { xhr ->
                            { _ ->
                                uploadMessage = "Ошибка при импорте: ${xhr.responseText}"
                            }
                        }
                    )
                } else {
                    uploadMessage = "Выберите файл перед отправкой"
                }
            }
        }) {
            Text("Загрузить файл")
        }

        // Выводим результат/статус
        if (uploadMessage.isNotEmpty()) {
            Div(attrs = {
                classes(FileUploadStyles.message)
            }) {
                Text(uploadMessage)
            }
        }
    }
}
