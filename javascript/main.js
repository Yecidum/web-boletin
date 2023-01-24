
/*
console.log("Hola JAVASCRIPT");

//DOM comentario

let container = document.querySelector(".container");

console.log(container);
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log("Click");

    })
});
*/

//obtener elementos de la clase .close

let links = document.querySelectorAll(".close");

//recorrerlos

links.forEach(function(link){

//agreagar un evento click a cada uno de ellos
link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    //quitar las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //agregar clases para animar su salida fadeoutup

    content.classList.remove("fadeOutUp");
    content.classList.remove("animated");

    return false;

});
});



