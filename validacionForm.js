function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;

    // Validar nombre completo (no puede estar vacío)
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre completo.");
      return false;
    }

    // Validar edad (debe ser un número mayor que cero)
    if (isNaN(edad) || edad <= 0) {
      alert("Por favor, ingresa una edad válida.");
      return false;
    }

    // Validar teléfono (debe contener solo dígitos y tener al menos 7 dígitos)
    var telefonoRegex = /^\d{7,}$/;
    if (!telefono.match(telefonoRegex)) {
      alert("Por favor, ingresa un número de teléfono válido (al menos 7 dígitos).");
      return false;
    }

    // Validar correo electrónico
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.match(correoRegex)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
    }

    // Validar asunto (no puede estar vacío)
    if (asunto === "") {
      alert("Por favor, ingresa un asunto.");
      return false;
    }

    // Si todos los campos son válidos, el formulario se puede enviar
    return true;
  }