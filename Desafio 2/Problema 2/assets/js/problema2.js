const sticker1 = document.getElementById ('sticker1');
const sticker2 = document.getElementById ('sticker2');
const sticker3 = document.getElementById ('sticker3');
const mensaje= document.getElementById('mensaje');

function cacularTotal () {
    const total = parseInt(sticker1.value || 0) + parseInt(sticker2.value || 0) + parseInt(sticker3.value || 0);

    if  (total > 10) {
        mensaje.textContent = 'Llevas demasiados sticker';
    } else {
        mensaje.textContent = 'Llevas'+ ' ' + total + ' ' + 'stickers';
    }
}

sticker1.addEventListener('input', cacularTotal);
sticker2.addEventListener('input', cacularTotal);
sticker3.addEventListener('input', cacularTotal);