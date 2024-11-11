// Función que guarda el estado de los checkboxes en LocalStorage
function saveCheckboxes() {
    const checkboxes = document.querySelectorAll('.plan-item input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem('checkbox_' + index, checkbox.checked);
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

// Función que borra todas las marcas y limpia el LocalStorage
function clearCheckboxes() {
    const checkboxes = document.querySelectorAll('.plan-item input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    checkboxes.forEach((_, index) => {
        localStorage.removeItem('checkbox_' + index);
    });
}

// Ejecutar cuando la página esté completamente cargada
window.onload = function() {
    loadCheckboxes();

    // Añadir evento para guardar el estado cada vez que cambie un checkbox
    document.querySelectorAll('.plan-item input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', saveCheckboxes);
    });

    // Añadir evento al botón de borrar
    const clearButton = document.querySelector('.clear-btn');
    if (clearButton) {
        clearButton.addEventListener('click', clearCheckboxes);
    }
};
