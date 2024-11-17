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

// Función para mostrar el contenido de la pestaña seleccionada
function showContent(contentId) {
    // Ocultar todas las secciones de contenido
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach((section) => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const activeContent = document.getElementById(contentId);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // Cambiar la clase activa en los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    // Aplicar clase activa al botón que invocó la función
    const activeButton = document.querySelector(`.tab-btn[onclick="showContent('${contentId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
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

    // Mostrar el contenido por defecto (por ejemplo, Diario)
    showContent('dailyContent');
};
