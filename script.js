// Crear los boletos y agregarlos al contenedor
const boletosContainer = document.getElementById('boletos-container');
const mensaje = document.getElementById('mensaje');
const totalBoletos = 200;
let boletosSeleccionados = [];

for (let i = 1; i <= totalBoletos; i++) {
    const boleto = document.createElement('div');
    boleto.classList.add('boleto');
    boleto.textContent = i;

    boleto.addEventListener('click', () => seleccionarBoleto(i, boleto));

    boletosContainer.appendChild(boleto);
}

function seleccionarBoleto(numero, elemento) {
    // Si el boleto ya está seleccionado, lo deseleccionamos
    if (boletosSeleccionados.includes(numero)) {
        boletosSeleccionados = boletosSeleccionados.filter(boleto => boleto !== numero);
        elemento.classList.remove('seleccionado');
        mensaje.textContent = '';
    } else {
        // Si no está seleccionado, lo seleccionamos
        if (boletosSeleccionados.length < 1) { // Limitar a un solo boleto
            boletosSeleccionados.push(numero);
            elemento.classList.add('seleccionado');
            mensaje.textContent = `Has seleccionado el boleto número ${numero}.`;
        } else {
            mensaje.textContent = "¡Solo puedes seleccionar un boleto!";
        }
    }
}
