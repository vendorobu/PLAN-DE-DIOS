function clearCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}
