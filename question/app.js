// Traversing the DOM
/* const btns = document.querySelectorAll('.question-btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        //console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */

// Using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        question.classList.toggle('show-text');
    });
});