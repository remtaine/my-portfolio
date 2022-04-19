let menuList = document.querySelector("nav ul");
let button = document.getElementById("menu-button");
function Menu() {
    if (button.style.display === "none") return true;
    if (button.name === "menu") {
        button.name = "close";
        button.classList.add("rotate-90")
        menuList.classList.add("left-0")
        menuList.classList.add("opacity-100")
    }
    else {
        button.name = "menu";
        button.classList.remove("rotate-90")
        menuList.classList.remove("left-[400px]")
        menuList.classList.remove("opacity-100")
    }
}