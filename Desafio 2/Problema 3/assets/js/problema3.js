const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const resultado = document.getElementById('resultado');
const ingresar = document.getElementById('ingresar');


ingresar.addEventListener('click', function() {
    const pass1 = "911";
    const pass2 = "714";

    const selected1 = select1.value;
    const selected2 = select2.value;
    const selected3 = select3.value;

    const password = selected1 + selected2 + selected3;

    if (password === pass1) {
        resultado.textContent = "Password 1 correcto";
    } else if (password === pass2) {
        resultado.textContent = "Password 2 correcto";
    } else {
        resultado.textContent = "Password incorrecto";
    }
});