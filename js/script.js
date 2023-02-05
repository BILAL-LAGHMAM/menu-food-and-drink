const menu = document.getElementById("menu")
const bar_icon = document.getElementById("bar_icon")
// const logo = document.getElementById("logo")

bar_icon.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu")
    menu.classList.toggle("index-menu")
    // logo.classList.toggle("index-logo")
    // alert('ok')
})