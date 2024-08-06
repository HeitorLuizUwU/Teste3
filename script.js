document.addEventListener('DOMContentLoaded', function() {
    // Efeito de fade-in para a imagem
    var fadeInImage = document.querySelector('.fade-in');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            fadeInImage.classList.add('fade-in-visible');
        }
    });

    // Toggle do menu
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
        this.classList.toggle('open');
    });

    // Fecha a aba do menu se clicar fora dela
    document.addEventListener('click', function(event) {
        var sidebar = document.getElementById('sidebar');
        var menuToggle = document.getElementById('menu-toggle');

        if (sidebar.style.width === '250px' && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.style.width = '0';
            menuToggle.classList.remove('open');
        }
    });
});
