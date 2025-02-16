const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidadProductos = 0 ; 
const cantidadSpan = document.querySelector (".cantidad");
cantidadSpan.innerHTML = cantidadProductos;

const totalSpan = document.querySelector (".valor-total");

function actualizarTotal () {
    const total =  precio * cantidadProductos;
    totalSpan.innerHTML =  total ;
}

const botonMas = document.querySelector("button:nth-of-type(1)");
botonMas.addEventListener('click', function () {
    cantidadProductos++;
    cantidadSpan.innerHTML = cantidadProductos;
    actualizarTotal ();
}
)

const botonMenos = document.querySelector("button:nth-of-type(2)")
botonMenos.addEventListener('click',function() {
    if (cantidadProductos > 0) {
        cantidadProductos--;
        cantidadSpan.innerHTML = cantidadProductos;
        actualizarTotal ();    
    }
});