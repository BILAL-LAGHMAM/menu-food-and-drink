const menu = document.getElementById("menu")
const bar_icon = document.getElementById("bar_icon")

bar_icon.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu")
})
menu.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu")
})
