document.getElementById('formReserva').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFin = document.getElementById('horaFin').value;
    const aula = document.getElementById('aula').value;
    const motivo = document.getElementById('motivo').value;

    // Validación simple
    if (!nombre || !fecha || !horaInicio || !horaFin || !aula || !motivo) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    // Validación de la hora (hora de fin debe ser posterior a hora de inicio)
    if (horaFin <= horaInicio) {
        alert("La hora de fin debe ser posterior a la hora de inicio.");
        return;
    }

    // Si todo es válido, mostrar un mensaje de éxito
    alert("Reserva realizada con éxito.");
});
