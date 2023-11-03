
function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}

function addComment() {
    // Создадим объект
    let comment = new Comment();

    if (comment.empty) {
        return;
    }
    const enableLikes = confirm('Хотите что бы другие пользователи могли оценить ваш комментарий?');

    if (enableLikes) {

        let review = Object.create(comment);
        review.rate = 0;
        writeComment(review);
    }
    else {
        writeComment(comment);
    }
}

const writeComment = review => {

    let likeCounter = '';
    if (review.hasOwnProperty('rate')) {
        let commentId = Math.random();
        likeCounter = `<b>Рейтинг: </b> <button id ="${commentId}" onclick=addLike(this.id)>❤️ ${review.rate}</button>`;
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}   ${likeCounter}</b> </i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}

function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ');

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum++;

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`;

    // Обновим текст элемента
    element.innerText = array.join(' ');
}      

// Слайдер
let slideIndex = 0;
showIndex(slideIndex);

function plusSlides(n) {
    showIndex(slideIndex += n);
}

function currentSlide(n) {
    showIndex(slideIndex = n);
}

function showIndex(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < slides.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");   
}