// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Динамическая подсветка текущего раздела в меню
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar a').forEach(a => {
        a.classList.remove('active');
        if (a.href.includes(current)) {
            a.classList.add('active');
        }
    });
});

// Валидация формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвратить стандартную отправку формы
    // Пример валидации: проверяем, не пустое ли поле имени
    const name = this.querySelector('[name="name"]');
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus(); // Устанавливаем фокус на поле ввода
        return false; // Останавливаем отправку формы
    }
    alert('Thank you for your message!');
    // Здесь может быть код для отправки данных формы, например, через fetch API
});
