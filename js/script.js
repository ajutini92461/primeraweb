const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-navegacion");

console.log(menuNav);
console.log(menu);

/*evento con menú, al dar clic se desata una función de flecha que pone o quita la clase*/
menu.addEventListener("click", (e) => {
    menuNav.classList.toggle("spread");
});
/*clic en la pantalla se dispara otra funciónd de flecha. e =elemento*/
window.addEventListener("click", (e) => {
    if (menuNav.classList.contains("spread") && e.target != menuNav && e.target != menu) {
        menuNav.classList.toggle("spread");
    };
});

var nombre = document.getElementById("txtNombre");
var form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    if (nombre.value != null || nombre.value != " ") {
        alert("Información enviada correctamente");
    };
});

const filtro = document.querySelectorAll(".categoria");
const todos = document.querySelectorAll(".todos");

console.log(filtro)
console.log(todos)

for (let i = 0; i < filtro.length; i++) {
    filtro[i].addEventListener("click", filtrarAnimales.bind(this, filtro[i]));
};

function filtrarAnimales(item) {
    /*cambiar(item);*/
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].classList.contains(item.attributes.id.value)) {
            todos[i].style.display = "block";
        } else {
            todos[i].style.display = "none";
        }
    };
};





