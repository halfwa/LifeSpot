
/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */
let session = new Map();

function handleSession() {

    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString());

    return session;
}

function checkAge() {

    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession() {

    for (let result of session) {
        console.log(result)
    }
}

function filterContent() {

    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {

        let videoContainer = elements[i];
        let videoTitle = videoContainer.getElementsByTagName('h3')[0].textContent.toLowerCase();

        if (videoTitle.includes(inputParseFunction())) {
            videoContainer.setAttribute('style', 'display: inline-block');
        }
        else {
            videoContainer.setAttribute('style', 'display: none');
        }
    }
}

function offerSubscribe() {

    setTimeout(() => alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @halfwa!"), 60000);
}