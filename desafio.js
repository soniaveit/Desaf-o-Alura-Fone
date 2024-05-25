function ponerNumero(num) {
    let numTelefono = document.getElementById('numero');
    numTelefono.value += num;
}

function borrarNumero() {
    let numTelefono = document.getElementById('numero');
    numTelefono.value = '';
}