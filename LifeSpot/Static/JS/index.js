const age = prompt('Пожалуйста, введите ваш возраст.');

if (age >= 18) {
    alert('Приветствуем на LifeSpot! ' + new Date().toLocaleString());
}
else {
    alert('Сайт содержит информацию для взрослых 18+');
    window.location.href = "http://www.google.com";
}