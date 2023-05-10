const form = document.getElementById('contact-form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const sexo = document.getElementsByName('sexo');
const telefono = document.getElementById('telefono');
const sitioInteres = document.getElementsByName('sitio-interes[]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let valido = true;

  if (nombre.value.trim() === '') {
    document.getElementById('error-nombre').textContent = 'El nombre es requerido';
    nombre.classList.add('is-invalid');
    valido = false;
  } else if (nombre.value.trim().length < 2) {
    document.getElementById('error-nombre').textContent = 'El nombre debe tener al menos 2 caracteres';
    nombre.classList.add('is-invalid');
    valido = false;
  } else {
    document.getElementById('error-nombre').textContent = '';
    nombre.classList.remove('is-invalid');
  }

  if (apellido.value.trim() === '') {
    document.getElementById('error-apellido').textContent = 'El apellido es requerido';
    apellido.classList.add('is-invalid');
    valido = false;
  } else if (apellido.value.trim().length < 2) {
    document.getElementById('error-apellido').textContent = 'El apellido debe tener al menos 2 caracteres';
    apellido.classList.add('is-invalid');
    valido = false;
  } else {
    document.getElementById('error-apellido').textContent = '';
    apellido.classList.remove('is-invalid');
  }

  let selectedSexo = false;
  for (let i = 0; i < sexo.length; i++) {
    if (sexo[i].checked) {
      selectedSexo = true;
      break;
    }
  }
  if (!selectedSexo) {
    document.getElementById('error-sexo').textContent = 'Selecciona tu sexo';
    for (let i = 0; i < sexo.length; i++) {
      sexo[i].classList.add('is-invalid');
    }
    valido = false;
  } else {
    document.getElementById('error-sexo').textContent = '';
    for (let i = 0; i < sexo.length; i++) {
      sexo[i].classList.remove('is-invalid');
    }
  }

  const regexTelefono = /^\d{7,14}$/;
  if (!regexTelefono.test(telefono.value)) {
    document.getElementById('error-telefono').textContent = 'Ingresa un número de teléfono válido';
    telefono.classList.add('is-invalid');
    valido = false;
  } else {
    document.getElementById('error-telefono').textContent = '';
    telefono.classList.remove('is-invalid');
  }

  let selectedSitioInteres = false;
  for (let i = 0; i < sitioInteres.length; i++) {
    if (sitioInteres[i].checked) {
      selectedSitioInteres = true;
      break;
    }
  }
  if (!selectedSitioInteres) {
    document.getElementById('error-sitio-interes').textContent = 'Por favor elige al menos un sitio de interés';
    for (let i = 0; i < sitioInteres.length; i++) {
      sitioInteres[i].classList.add('is-invalid');
    }
    valido = false;
  } else {
    document.getElementById('error-sitio-interes').textContent = '';
    for (let i = 0; i < sitioInteres.length; i++) {
      sitioInteres[i].classList.remove('is-invalid');
    }
  }

  if (valido) {
    form.submit();
  }
});