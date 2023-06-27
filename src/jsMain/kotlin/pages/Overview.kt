package pages

import StateManager
import androidx.compose.runtime.*
import components.table.menu.Menu
import components.table.menu.menu
import data.groups.StudyGroup
import kotlinx.browser.document
import kotlinx.browser.window
import language.translatable
import org.jetbrains.compose.web.attributes.height
import org.jetbrains.compose.web.attributes.width
import org.jetbrains.compose.web.dom.*
import org.w3c.dom.CanvasImageSource
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLImageElement
import removeGroup

@Composable
fun overviewPage() {
    val offsetX = remember { mutableStateOf(window.innerWidth.toDouble() / 2) }
    val offsetY = remember { mutableStateOf(window.innerHeight.toDouble() / 2) }
    var mouseDown by remember { mutableStateOf(false) }
    val groups = remember { StateManager.groups }
    var activeGroup by remember { StateManager.activeGroup }
    val activeGroupState = remember { StateManager.activeGroup }
    val token by remember { StateManager.token }
    val currentLocale by remember { StateManager.language }
    val animationFrame = remember { mutableStateOf(0) }
    var startupFlag by remember { mutableStateOf(true) }
    var activeMenu by remember { StateManager.activeMenu }
    var username by remember { StateManager.user }
    menu()
    Canvas (attrs = {
        classes("full-screen")
        id("canvas")
        width(window.innerWidth)
        height(window.innerHeight - 60)
        onClick { ev ->
            console.log(ev.offsetX, ev.offsetY)
            groups.value.filter {  group ->
                -500 <= group.coordinates!!.x!! + offsetX.value
                        && group.coordinates!!.x!! + offsetX.value <= window.innerWidth + 500
                        && -500 <= group.coordinates!!.y!! + offsetY.value
                        && group.coordinates!!.y!! + offsetY.value <= window.innerHeight + 500
            }.forEach { group ->
                if (ev.offsetX in (group.coordinates!!.x!! + offsetX.value - 50)..(group.coordinates!!.x!! + offsetX.value + 50)
                    && ev.offsetY in (group.coordinates!!.y!! + offsetY.value - 50)..(group.coordinates!!.y!! + offsetY.value + 50)) {
                    activeGroup = if (activeGroup != group) {
                        group
                    } else {
                        null
                    }
                    if (ev.ctrlKey && group.owner == username) {
                        removeGroup(group.id!!, token!!)
                        return@onClick
                    }
                    if (ev.shiftKey && group.owner == username) {
                        activeGroup = group
                        activeMenu = Menu.UPDATE
                        return@onClick
                    }
                }
            }
            if (ev.shiftKey) {
                activeMenu = Menu.ADD
                return@onClick
            }
            renderCanvas(offsetX, offsetY, groups, activeGroupState, animationFrame)
        }
        onMouseMove { ev ->
            if (mouseDown) {
                offsetX.value += ev.movementX
                offsetY.value += ev.movementY
            }
            window.requestAnimationFrame {
                renderCanvas(offsetX, offsetY, groups, activeGroupState, animationFrame)
            }
        }
        onMouseDown {
            mouseDown = true
        }
        onMouseUp {
            mouseDown = false
        }
        onMouseLeave {
            mouseDown = false
        }
    }) {
        if (startupFlag) {
            renderCanvas(offsetX, offsetY, groups, activeGroupState, animationFrame, true)
            startupFlag = false
        }
    }
    Div (attrs = { classes("info-panel", if (activeGroup != null && StateManager.activeMenu.value == null) "active" else "inactive") }) {
        H1 { Text("${translatable("add-group-info", currentLocale)} №${activeGroup?.id}") }
        Div {
            Span { Text(translatable("group-name", currentLocale)) }
            Span { Text("${activeGroup?.name}") }
        }
        Div {
            Span { Text(translatable("group-coordinate-x", currentLocale)) }
            Span { Text("${activeGroup?.coordinates?.x}") }
        }
        Div {
            Span { Text(translatable("group-coordinate-y", currentLocale)) }
            Span { Text("${activeGroup?.coordinates?.y}") }
        }
        Div {
            Span { Text(translatable("group-students", currentLocale)) }
            Span { Text("${activeGroup?.studentsCount}") }
        }
        Div {
            Span { Text(translatable("group-education-form", currentLocale)) }
            Span { Text("${activeGroup?.formOfEducation}") }
        }
        Div {
            Span { Text(translatable("group-semester", currentLocale)) }
            Span { Text("${activeGroup?.semesterEnum}") }
        }
        H2 { Text(translatable("group-admin-info", currentLocale)) }
        Div {
            Span { Text(translatable("group-admin-name", currentLocale)) }
            Span { Text("${activeGroup?.groupAdmin?.name}") }
        }
        Div {
            Span { Text(translatable("group-admin-weight", currentLocale)) }
            Span { Text("${activeGroup?.groupAdmin?.weight}") }
        }
        Div {
            Span { Text(translatable("group-admin-eye-color", currentLocale)) }
            Span { Text("${activeGroup?.groupAdmin?.eyeColor}") }
        }
        Div {
            Span { Text(translatable("group-admin-location-x", currentLocale)) }
            Span { Text("${activeGroup?.groupAdmin?.location?.x}") }
        }
        Div {
            Span { Text(translatable("group-admin-location-y", currentLocale)) }
            Span { Text("${activeGroup?.groupAdmin?.location?.y}") }
        }
        Div {
            Span {Text(translatable("group-admin-location-z", currentLocale))  }
            Span { Text("${activeGroup?.groupAdmin?.location?.z}") }
        }
    }
}

fun renderCanvas(
    offsetX: MutableState<Double>,
    offsetY: MutableState<Double>,
    groups: MutableState<List<StudyGroup>>,
    activeGroupState: MutableState<StudyGroup?>,
    animationFrame: MutableState<Int>,
    doAnimation: Boolean = false
) {
    val canvas = document.getElementById("canvas") as HTMLCanvasElement?
    val ctx = canvas?.getContext("2d") as CanvasRenderingContext2D?
    val doge = document.getElementById("doge") as HTMLImageElement?
    val angryDoge = document.getElementById("mops-animation-${animationFrame.value}") as HTMLImageElement?

    if (doAnimation && StateManager.pageId.value == 2) {
        window.setTimeout({
            animationFrame.value = (animationFrame.value + 1) % 124
            renderCanvas(offsetX, offsetY, groups, activeGroupState, animationFrame, doAnimation)
        }, 70)
    }

    ctx?.clearRect(0.0, 0.0, window.innerWidth.toDouble(), window.innerHeight.toDouble())
    ctx?.fillStyle = "black"
    var it = offsetX.value % 200 - 200
    while (it < window.innerWidth) {
        ctx?.fillRect(it, 0.0, 2.0, window.innerHeight.toDouble())
        it += 200
        ctx?.fillText("${-(offsetX.value - it)}", it + 5, 15.0);
    }
    var jt = offsetY.value % 200 - 200
    while (jt < window.innerHeight) {
        ctx?.fillRect(0.0, jt, window.innerWidth.toDouble(), 2.0)
        jt += 200
        ctx?.fillText("${-(offsetY.value - jt)}", 15.0, jt - 5)
    }
    groups.value.filter {  group ->
        -500 <= group.coordinates!!.x!! + offsetX.value
                && group.coordinates!!.x!! + offsetX.value <= window.innerWidth + 500
                && -500 <= group.coordinates!!.y!! + offsetY.value
                && group.coordinates!!.y!! + offsetY.value <= window.innerHeight + 500
    }.forEach { group ->
        if (group == activeGroupState.value) {
            ctx?.drawImage(angryDoge!!, group.coordinates!!.x!! + offsetX.value - 50, group.coordinates!!.y!! + offsetY.value - 50, 100.0, 100.0)
        } else {
            ctx?.drawImage(doge!!, group.coordinates!!.x!! + offsetX.value - 50, group.coordinates!!.y!! + offsetY.value - 50, 100.0, 100.0)
        }
        ctx?.fillStyle = "black"
        ctx?.fillText(group.name!!, group.coordinates!!.x!! + offsetX.value - 25, group.coordinates!!.y!! + offsetY.value + 60)
    }
}