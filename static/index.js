// dropdown menu (enable/desable)

document.addEventListener('DOMContentLoaded', function () {
    const profileToggle = document.getElementById('profile-toggle');
    const dropdownIcon = document.getElementById('dropdown-icon');
    const dropdown = document.querySelector('.dropdown');

    profileToggle.addEventListener('click', function () { // verificar
        const isExpanded = profileToggle.getAttribute('aria-expanded') === 'false';

        dropdownIcon.classList.toggle('bi-chevron-up', !isExpanded);
        dropdownIcon.classList.toggle('bi-chevron-down', isExpanded);
    });

    dropdown.addEventListener('hidden.bs.dropdown', function () {
        dropdownIcon.classList.remove('bi-chevron-up');
        dropdownIcon.classList.add('bi-chevron-down');
    });

    dropdown.addEventListener('shown.bs.dropdown', function () {
        dropdownIcon.classList.remove('bi-chevron-down');
        dropdownIcon.classList.add('bi-chevron-up');
    });
});