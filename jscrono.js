let intervaloCrono;
let cronoFuncionando = false;
let segundos = 0;
let minutos = 0;
let horas = 0;

function actualizarCrono() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }
  document.getElementById('temporizador').textContent = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
}

function iniciarCrono() {
  if (!cronoFuncionando) {
    intervaloCrono = setInterval(actualizarCrono, 1000);
    document.getElementById('iniciar').textContent = 'Detener';
    cronoFuncionando = true;
  }
}

function resetCrono() {
  clearInterval(intervaloCrono);
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById('temporizador').textContent = '00:00:00';
  document.getElementById('iniciar').textContent = 'Iniciar';
  cronoFuncionando = false;
}

function agregarCeros(numero) {
  return numero < 10 ? '0' + numero : numero;
}

function toggleCrono() {
  if (!cronoFuncionando) {
    iniciarCrono();
  } else {
    clearInterval(intervaloCrono);
    document.getElementById('iniciar').textContent = 'Iniciar';
    cronoFuncionando = false;
  }
}

