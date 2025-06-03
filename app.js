document.addEventListener('DOMContentLoaded', function () {
    if (window.Telegram && window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        webApp.ready();

        const user = webApp.initDataUnsafe.user;

        if (document.getElementById('username')) {
            document.getElementById('username').innerText = `Привет, ${user.first_name}!`;
        }

        if (document.getElementById('payButton')) {
            document.getElementById('payButton').onclick = () => {
                alert('Платёж пока не активен');
            };
        }

    } else {
        console.warn("Mini App запущен не в Telegram");
        // Можно показать альтернативное сообщение
        if (document.getElementById('username')) {
            document.getElementById('username').innerText = "Это TradeSchool";
        }
    }
});
