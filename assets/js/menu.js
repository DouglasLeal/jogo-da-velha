let languageRadio = document.querySelectorAll("input[name='language-option']");
let optionXORadio = document.querySelectorAll("input[name='style-option']");
let table = document.querySelector("table");
let menu = document.querySelector(".menu");
let btnMenu = document.querySelector(".btn-menu");

languageRadio.forEach(el => {
    el.addEventListener("click", (e)=>{
        i18n(e.target.value);
    });
});

optionXORadio.forEach(el => {
    el.addEventListener("click", (e) => {
        table.removeAttribute("class");
        table.classList.add(e.target.value);
    });
});

function toggleMenu(){
    menu.classList.toggle("menu-show");
    btnMenu.classList.toggle("menu-show");
}