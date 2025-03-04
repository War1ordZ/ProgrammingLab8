import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Style

object FileUploadStyles : StyleSheet() {
    val container by style {
        padding(16.px)
        borderRadius(8.px)
        border {
            style(LineStyle.Solid)
            width(1.px)
            color(Color.gray)
        }
        property("max-width", "400px")
        // Вместо margin(16.px, Auto.auto) сделаем так:
        property("margin", "16px auto")
        property("margin-left", "auto")
        property("margin-right", "auto")

        fontFamily("sans-serif")  // общий шрифт
    }

    val fileInput by style {
        display(DisplayStyle.Block)
        marginBottom(8.px)
        fontSize(14.px)
    }

    val button by style {
        display(DisplayStyle.Block)
        padding(8.px, 16.px)
        backgroundColor(Color("#007BFF"))
        color(Color.white)
        borderRadius(4.px)
        property("cursor", "pointer")
        fontSize(14.px)

        // Пример ховера
        self style {
            hover {
                backgroundColor(Color("#0056b3"))
            }
        }
    }

    val message by style {
        marginTop(12.px)
        fontSize(14.px)
        color(Color("#333"))
    }
}
