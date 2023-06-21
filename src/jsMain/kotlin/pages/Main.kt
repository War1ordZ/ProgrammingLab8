package pages

import StateManager
import androidx.compose.runtime.*
import org.jetbrains.compose.web.dom.*

@Composable
fun mainPage() {
    val user by remember { StateManager.user }
    Div (attrs = {classes("full-screen", "main-page")}) {
        Div (attrs = {classes("loading-header")}) {
            H1 {
                Text("Welcome back, ")
                Span {
                    Text(user!!)
                }
            }
        }
        Div (attrs = {classes("gif-container")}) {
            Img(src = "https://psv4.userapi.com/c848024/u226172436/docs/d6/ea6b33b0f051/Arbuzy_plyvut_po_kanalu.gif?extra=eMwNpi8ZSCinSOSR6X5gbeoGN3TKfZPck_R_1ayxI_F3nT65avMKqHCrP70yJdlin5MgxVCkUDWuInPqodT7rIt0UWRADe0A2-gMZeV8TNfOg-7-4Gm9FzlJmRsHc3TySkBDL1IrBYiGdKu0W73SWr8o")
            Img(src = "https://psv4.userapi.com/c909618/u399927901/docs/d34/e0d3d692bcbe/deadge.gif?extra=wLckWITEY3JoGUUh67Zn__7aJZAMlQ4QPLIdaYp6NMkX3PtqOTkE_cA406oH02f6cc_XBjPg9FvO1OIrx7JoFu_nlgkao7eVyo_zWud_a8Gf-C8aiKW2rcVFnRJ0pE7JajAdT4hraIqfH3I-Kz2WAio8")
            Img(src = "https://psv4.userapi.com/c848024/u226172436/docs/d6/ea6b33b0f051/Arbuzy_plyvut_po_kanalu.gif?extra=eMwNpi8ZSCinSOSR6X5gbeoGN3TKfZPck_R_1ayxI_F3nT65avMKqHCrP70yJdlin5MgxVCkUDWuInPqodT7rIt0UWRADe0A2-gMZeV8TNfOg-7-4Gm9FzlJmRsHc3TySkBDL1IrBYiGdKu0W73SWr8o")
        }
    }
}



