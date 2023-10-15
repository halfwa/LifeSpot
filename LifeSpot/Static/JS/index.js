const age = prompt('Пожалуйста, введите ваш возраст.');

if (age >= 18) {
    alert('Приветствуем на LifeSpot! ' + new Date().toLocaleString());
}
else {
    alert('Сайт содержит информацию для взрослых 18+');
    window.location.href = "http://www.google.com";
}

//let elements = document.getElementsByClassName('video-container');
//let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();

//for (let i = 0; i < elements.length; i++) {

//    let videoContainer = elements[i];
//    let videoTitle = videoContainer.getElementsByTagName('h3')[0].textContent.toLowerCase();

//    if (videoTitle.includes(inputString)) {
//        videoContainer.setAttribute('style', 'display: inline-block');
//    }
//    else {
//        videoContainer.setAttribute('style', 'display: none');
//    }
//}
