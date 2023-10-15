const name = prompt('Пожалуйста, введите ваше имя: ');
alert(`${name}, Добро пожаловать на тестовую страницу! (${name.length} символов имени)`);

let allElements = document.getElementsByTagName('*');   
alert(`HTML элементов на странице: ${allElements.length}`);