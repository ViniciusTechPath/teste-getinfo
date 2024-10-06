document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('dropdownUser1');

    dropdownToggle.addEventListener('click', function () {
        dropdownToggle.classList.toggle('rotate');
    });
});
