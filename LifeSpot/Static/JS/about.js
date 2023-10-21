/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getComment() {
    // Создадим объект
    let comment = {}
    
    // Сохраним свойство имени
    comment.userName = prompt("Как вас зовут ?")
    if (comment.userName == null){
        return
    }
    
    // Сохраним текст отзыва
    comment.text = prompt("Напишите свой отзыв")
    if (comment.text == null){
        return
    }
    
    comment.date = new Date().toLocaleString()

    const result = confirm('Хотите что бы другие пользователи могли оценить ваш комментарий?');
    if (result) {

        let review = Object.create(comment);
        review.rate = 0;
        writeComment(review);
    }
    else {
        writeComment(comment);
    }
}

/*
* Запишем отзыв на страницу 
* `
* */
const writeComment = review => {

    let likeCounter = '';
    if (review.hasOwnProperty('rate')) {
        likeCounter = '<b>Рейтинг: </b>' + review.rate;
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}   ${likeCounter}</b> </i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}

        