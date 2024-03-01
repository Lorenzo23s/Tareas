document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('form').addEventListener('submit', function(event) {
        // Prevenir la recarga de la página
        event.preventDefault();

        // Recoger los datos del formulario
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var correo = document.querySelector('#correo').value;
        var departamento = document.querySelector('#departamento').value;

        // Crear un objeto con los datos del trabajador
        var trabajador = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            departamento: departamento
        };

        // Añadir el trabajador a la lista de trabajadores
        var listaTrabajadores = document.querySelector('#lista-trabajadores');
        var nuevoTrabajador = document.createElement('li');
        nuevoTrabajador.textContent = trabajador.nombre + ' ' + trabajador.apellido + ', ' + trabajador.correo + ', ' + trabajador.departamento;
        nuevoTrabajador.classList.add('list-group-item');
        listaTrabajadores.appendChild(nuevoTrabajador);

        // Actualizar el resumen de trabajadores
        var resumenTrabajadores = document.querySelector('#resumen-trabajadores');
        resumenTrabajadores.textContent = 'Hay ' + listaTrabajadores.children.length + ' trabajador(es) en la lista.';
});
})