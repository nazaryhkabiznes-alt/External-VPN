let isConnected = false;

function toggleVPN() {
    const circle = document.getElementById('vpnCircle');
    const text = document.getElementById('circleText');

    if (!isConnected) {
        // Анимация вращения
        circle.classList.add('spinning');
        text.innerText = "ПОДКЛЮЧЕНИЕ...";
        
        // Вызов Android интерфейса
        if (window.AndroidInterface) {
            window.AndroidInterface.connectVPN();
        }

        // Имитация успешного подключения
        setTimeout(() => {
            isConnected = true;
            circle.classList.remove('spinning');
            text.innerText = "ВКЛЮЧЕНО";
            circle.style.background = "#28a745";
        }, 3000);
    } else {
        // Отключение
        isConnected = false;
        text.innerText = "СТАРТ";
        circle.style.background = "#007bff";
        circle.classList.remove('spinning');
    }
}