function clearCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}
// Función que guarda el estado de todos los checkboxes en LocalStorage
function saveCheckboxes() {
    const checkboxes = document.querySelectorAll('.plan-item input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem('checkbox_' + index, checkbox.checked); // Guardamos el estado de cada checkbox
    });
}

// Función que carga el estado de los checkboxes desde LocalStorage
function loadCheckboxes() {
    const checkboxes = document.querySelectorAll('.plan-item input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        const state = localStorage.getItem('checkbox_' + index);
        if (state !== null) {
            checkbox.checked = (state === 'true');
        }
    });
}

// Llamar a la función loadCheckboxes cuando se cargue la página
document.addEventListener('DOMContentLoaded', loadCheckboxes);

// Guardar el estado cada vez que cambie un checkbox
document.querySelectorAll('.plan-item input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', saveCheckboxes);
});
// Función que borra todas las marcas y limpia el LocalStorage
function clearCheckboxes() {
    const checkboxes = document.querySelectorAll('.plan-item input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Desmarcar todos los checkboxes
    });

    // Limpiar el LocalStorage
    for (let i = 0; i < checkboxes.length; i++) {
        localStorage.removeItem('checkbox_' + i); // Borrar el estado del checkbox en LocalStorage
    }
}

// Añadir evento al botón de borrar
document.querySelector('.clear-btn').addEventListener('click', clearCheckboxes);
