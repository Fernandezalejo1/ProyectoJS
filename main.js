const estudiantes = [];

function agregarEstudiante() {
    const id = prompt("Ingrese el ID del estudiante:");
    const nombre = prompt("Ingrese el nombre del estudiante:");
    if (id && nombre) {
        estudiantes.push({ id, nombre });
        alert(`Estudiante ${nombre} agregado con éxito.`);
    } else {
        alert("No se ha proporcionado ID o nombre válido.");
    }
}

function eliminarEstudiante() {
    const id = prompt("Ingrese el ID del estudiante a eliminar:");
    const index = estudiantes.findIndex(est => est.id === id);
    if (index !== -1) {
        alert(`Estudiante ${estudiantes[index].nombre} eliminado.`);
        estudiantes.splice(index, 1);
    } else {
        alert("Estudiante no encontrado.");
    }
}

function modificarEstudiante() {
    const id = prompt("Ingrese el ID del estudiante a modificar:");
    const estudiante = estudiantes.find(est => est.id === id);
    if (estudiante) {
        const nuevoNombre = prompt(`Ingrese el nuevo nombre para ${estudiante.nombre}:`);
        estudiante.nombre = nuevoNombre;
        alert(`Nombre actualizado a ${nuevoNombre}.`);
    } else {
        alert("Estudiante no encontrado.");
    }
}

function verResumenCurso() {
    let mensaje = "Resumen del Curso:\n";
    estudiantes.forEach(est => {
        mensaje += `ID: ${est.id}, Nombre: ${est.nombre}\n`;
    });
    alert(mensaje);
}

function main() {
    let seguir = true;
    do {
        const accion = prompt("Ingrese la acción a realizar (agregar, eliminar, modificar, ver, salir):");
        switch (accion.toLowerCase()) {
            case "agregar":
                agregarEstudiante();
                break;
            case "eliminar":
                eliminarEstudiante();
                break;
            case "modificar":
                modificarEstudiante();
                break;
            case "ver":
                verResumenCurso();
                break;
            case "salir":
                seguir = false;
                break;
            default:
                alert("Acción no válida. Intente nuevamente.");
                break;
        }
    } while (seguir);
}

main();

