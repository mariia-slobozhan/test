import menuCardTmp from "../templates/menu-markup.hbs"
import menu from "../menu.json"

const menuList = document.querySelector(".js-menu")

const markUp = menuCardTmp(menu)

menuList.insertAdjacentHTML("beforeend", markUp )