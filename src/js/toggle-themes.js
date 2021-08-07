const themeToggleCheckbox = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body")
const curentTheme = localStorage.getItem("theme")
const theme = JSON.parse(curentTheme)
themeToggleCheckbox.addEventListener("change", changePageTheme)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


// if(curentTheme) {
//     body.classList.add(JSON.parse(curentTheme))
//     if(JSON.parse(curentTheme) === Theme.DARK){
//         themeToggleCheckbox.setAttribute("checked", true)
//     }
// } else {
//   localStorage.setItem("theme", JSON.stringify(Theme.LIGHT))
// }


switch (theme) {
    case null:
    localStorage.setItem("theme", JSON.stringify(Theme.LIGHT))   
    break;

    case Theme.DARK:
    body.classList.add(theme)
    themeToggleCheckbox.setAttribute("checked", true) 
    break;  

    default:
    body.classList.add(theme)  
}

function changePageTheme(event) {
    if(event.target.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK)
        themeToggleCheckbox.setAttribute("checked", true)
        localStorage.setItem ("theme", JSON.stringify(Theme.DARK))
    } else {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        themeToggleCheckbox.setAttribute("checked", false)
        localStorage.setItem ("theme", JSON.stringify(Theme.LIGHT))

    }
}


