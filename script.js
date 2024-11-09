document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.vertical-nav ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active-section');
                } else {
                    section.classList.remove('active-section');
                }
            });
        });
    });
});
