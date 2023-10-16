let sessionHandler = function() {

    let session = new Map();

    session.set("userAgent", window.navigator.userAgent)
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {

        session.set("startDate", new Date().toLocaleString());

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + session.get('startDate'));
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }

    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

function filterContent(inputString) {

    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {

        let videoContainer = elements[i];
        let videoTitle = videoContainer.getElementsByTagName('h3')[0].textContent.toLowerCase();

        if (videoTitle.includes(inputString)) {
            videoContainer.setAttribute('style', 'display: inline-block');
        }
        else {
            videoContainer.setAttribute('style', 'display: none');
        }
    }
}