document.addEventListener('DOMContentLoaded', function () {
    if (window.Telegram && window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        webApp.ready();

        const user = webApp.initDataUnsafe.user;

        if (document.getElementById('username')) {
            document.getElementById('username').innerText = `Привет, ${user.first_name}!`;
        }

        if (document.getElementById('user-fullname')) {
            document.getElementById('user-fullname').innerText = `Профиль: ${user.first_name} ${user.last_name || ''}`;
            document.getElementById('user-id').innerText = `ID: ${user.id}`;
        }

        if (document.getElementById('payButton')) {
            document.getElementById('payButton').onclick = () => {
                // Пока просто показываем сообщение
                document.getElementById('status').innerText = 'Платёж пока не активен. Мы скоро это исправим!';
                // Для реального платежа используем webApp.openInvoice(...)
            };
        }
    } else {
        alert('Telegram WebApp API не доступен.');
    }
});
