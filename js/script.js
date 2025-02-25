document.getElementById("myButton").addEventListener("click", function() {
    alert("Кнопка нажата!");
})
// Получаем объект Telegram Web App
const tg = window.Telegram.WebApp;

//  Отправляем сообщение в лог (для отладки)
tg.showAlert(`Mini App запущен. ID пользователя: ${tg.initDataUnsafe.user.id}`);

// Функция, которая будет вызываться при нажатии на кнопку
function sendMessageToTelegram() {
    // Отправляем данные в Telegram
    tg.sendData("Hello from Mini App!");
}

// Находим кнопку по ID и добавляем обработчик события click
document.getElementById("myButton").addEventListener("click", sendMessageToTelegram); 