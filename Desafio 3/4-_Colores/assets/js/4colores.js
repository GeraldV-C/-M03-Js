const divAzul = document.getElementById ("blue");
const divRojo = document.getElementById ("red");
const divVerde = document.getElementById ("green");
const divAmarillo = document.getElementById ("yellow");

function cambiarnegro(event) {
    event.target.style.backgroundColor ='black'
}

divAzul.addEventListener ('click', cambiarnegro);
divRojo.addEventListener ('click', cambiarnegro);
divVerde.addEventListener ('click', cambiarnegro);
divAmarillo.addEventListener ('click', cambiarnegro);

let color = '';

document.addEventListener('keydown', function(event) {
    const key = event.key; 

    if (key === 'a'){
        color = 'pink';
    } else if (key === 's' ){
        color = 'orange';
    } else if (key === 'd'){
        color = 'lightblue';        
    } else if (key === 'q'){
        createNewDiv ('purple');
    } else if (key=== 'w'){
        createNewDiv ('gray');
    } else if (key ==='e'){
        createNewDiv ('brown');
    }

    if (key ==='a'  || key === 's' || key === 'd' ) {
        const keyDiv = document.getElementById("key");
        keyDiv.style.backgroundColor = color;
    }

});

function createNewDiv (color) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.marginTop = "10px";
    document.body.appendChild(newDiv);
}