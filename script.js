document.addEventListener('DOMContentLoaded', function () {
    const mode = document.getElementById('mode_icon');
    const body = document.body;

    mode.addEventListener('click', function () {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            mode.classList.remove('fa-sun');
            mode.classList.add('fa-moon'); // Adicionar a classe 'fa-moon' quando o modo claro for ativado
        } else {
            body.classList.add('dark');
            mode.classList.remove('fa-moon');
            mode.classList.add('fa-sun'); // Adicionar a classe 'fa-sun' quando o modo escuro for ativado
        }
    });
});
