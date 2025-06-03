document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');

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
      const page = item.getAttribute('data-page');

      // Обновляем меню
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Показываем нужную страницу
      pages.forEach(p => p.classList.remove('active'));
      document.getElementById(`page-${page}`).classList.add('active');
    });
  });
});
