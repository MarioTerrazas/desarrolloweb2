$(document).ready(function() {
    var estudiantes = []; // Array para almacenar los estudiantes

    // Función para ingresar un estudiante
    function ingresarEstudiante() {
        var CI = parseInt($('#CI').val()); // Convertir a entero
        var nombre = $('#nombre').val();
        var fecha = $('#fecha').val(); // Obtener valor de campo de fecha
        var direccion = $('#direccion').val();
        var telefono = $('#telefono').val();
        
        // Agregar estudiante al array
        estudiantes.push({ CI: CI, nombre: nombre, fecha: fecha, direccion: direccion, telefono: telefono });

        // Limpiar los campos del formulario
        $('#CI').val('');
        $('#nombre').val('');
        $('#fecha').val(''); // Limpiar campo de fecha
        $('#direccion').val('');
        $('#telefono').val('');

         // Actualizar tabla de estudiantes
        actualizarTablaEstudiantes();
    }

    // Función para listar los estudiantes
    function listarEstudiantes() {
        // Limpiar contenido de la tabla
        $('#tbody_estudiantes').empty();

        // Recorrer el array de estudiantes y agregar cada uno a la tabla
        $.each(estudiantes, function(index, estudiante) {
            var row = $('<tr>').appendTo('#tbody_estudiantes');
            $('<td>').text(estudiante.CI).appendTo(row);
            $('<td>').text(estudiante.nombre).appendTo(row);
            $('<td>').text(estudiante.fecha).appendTo(row);
            $('<td>').text(estudiante.direccion).appendTo(row);
            $('<td>').text(estudiante.telefono).appendTo(row);
        });
        
    }
    // Función para actualizar la tabla de estudiantes
    function actualizarTablaEstudiantes() {
        // Limpiar contenido de la tabla
        $('#tbody_estudiantes').empty();

        // Recorrer el array de estudiantes y agregar cada uno a la tabla
        $.each(estudiantes, function(index, estudiante) {
            var row = $('<tr>').appendTo('#tbody_estudiantes');
            $('<td>').text(estudiante.CI).appendTo(row);
            $('<td>').text(estudiante.nombre).appendTo(row);
            $('<td>').text(estudiante.fecha).appendTo(row);
            $('<td>').text(estudiante.direccion).appendTo(row);
            $('<td>').text(estudiante.telefono).appendTo(row);
        });
    }

    // Evento al hacer clic en el botón "Ingresar Estudiante"
    $('#enviar').click(function() {
        ingresarEstudiante();
    });

    // Evento al hacer clic en el botón "Listar Estudiantes"
    $('#listar').click(function() {
        listarEstudiantes();
    });
});
