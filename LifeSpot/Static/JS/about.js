//alert('Здесь можно получить информацию о проекте.');
const writeComment = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += `<div class="review-text">\n` +
        `<p><i><b>${review['userName']}</b>  ${review['date']}</i></p>\n` +
        `<p>${review['comment']}</p>\n` +
        `</div >`;
}

function getReview() {

    let review = {};

    review['userName'] = prompt('Введите ваше имя');
    if (review['userName'] == null) {
        return
    }

    review['comment'] = prompt('Оставьте свой комментарий');
    if (review['comment'] == null) {
        return
    }

    review['date'] = new Date().toLocaleTimeString();

    return writeComment(review);
}

