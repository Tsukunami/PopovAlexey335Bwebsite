document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('dropdownBtn');
    const sidebar = document.querySelector('.sidebar[data-v-394c46cd]');
    
    btn.addEventListener('click', function() {
    if (sidebar.style.display === 'none' || !sidebar.style.display) {
    sidebar.style.display = 'block'; // Показываем меню
    } else {
    sidebar.style.display = 'none'; // Скрываем меню
    }
    });
    });