document.addEventListener("DOMContentLoaded", () => {
    const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

    const agregarForm = document.getElementById("agregarForm");
    const eliminarForm = document.getElementById("eliminarForm");
    const modificarForm = document.getElementById("modificarForm");
    const verResumenButton = document.getElementById("verResumen");
    const resumenDiv = document.getElementById("resumen");

    agregarForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("idAgregar").value;
        const nombre = document.getElementById("nombreAgregar").value;
        if (id && nombre) {
            estudiantes.push({ id, nombre });
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            alert(`Estudiante ${nombre} agregado con éxito.`);
            agregarForm.reset();
        } else {
            alert("No se ha proporcionado ID o nombre válido.");
        }
    });

    eliminarForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("idEliminar").value;
        const index = estudiantes.findIndex(est => est.id === id);
        if (index !== -1) {
            alert(`Estudiante ${estudiantes[index].nombre} eliminado.`);
            estudiantes.splice(index, 1);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            eliminarForm.reset();
        } else {
            alert("Estudiante no encontrado.");
        }
    });

    modificarForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("idModificar").value;
        const estudiante = estudiantes.find(est => est.id === id);
        if (estudiante) {
            const nuevoNombre = document.getElementById("nombreModificar").value;
            estudiante.nombre = nuevoNombre;
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            alert(`Nombre actualizado a ${nuevoNombre}.`);
            modificarForm.reset();
        } else {
            alert("Estudiante no encontrado.");
        }
    });

    verResumenButton.addEventListener("click", () => {
        let mensaje = "Resumen del Curso:\n";
        estudiantes.forEach(est => {
            mensaje += `ID: ${est.id}, Nombre: ${est.nombre}\n`;
        });
        resumenDiv.textContent = mensaje;
    });
});
