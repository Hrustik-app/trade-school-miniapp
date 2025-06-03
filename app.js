document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const mainContent = document.querySelector('main');

  // Telegram WebApp init
  if (window.Telegram && window.Telegram.WebApp) {
    const webApp = window.Telegram.WebApp;
    webApp.ready();

    const user = webApp.initDataUnsafe.user;

    if (document.getElementById('username')) {
      document.getElementById('username').innerText = `Привет, ${user.first_name}!`;
    }
  }

  // Переключение страниц
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const page = item.getAttribute('data-page');

      switch(page) {
        case 'home':
          mainContent.innerHTML = `
            <h1>Главная</h1>
            <p>Добро пожаловать в TradeSchool. Выберите курс ниже.</p>
          `;
          break;

        case 'courses':
          mainContent.innerHTML = `
            <h1>Курсы</h1>
            <ul>
              <li><a href="#">Основы трейдинга</a></li>
              <li><a href="#">Технический анализ</a></li>
              <li><a href="#">Работа с графиками</a></li>
            </ul>
          `;
          break;

        case 'support':
          mainContent.innerHTML = `
            <h1>Поддержка</h1>
            <p>Если у вас есть вопросы — напишите нам @TradeSchoolSupport</p>
          `;
          break;
      }
    });
  });
});
