// (function () {


//     const form = document.querySelector("message-form")

//     form.addEventListener('submit', function (e) {
//         e.preventDefault()

//         const message = document.querySelector('#message')
//         const feedback = document.querySelector('.feedback')
//         const messageContent = document.querySelector('.message-content')

//         if (message.value === ``) {
//             feedback.classList.add('show')
//             setTimeout(function () {
//                 feedback.classList.remove('show')
//             }, 4000)
//         } else {
//             messageContent.textContent = message.value
//             message.value = ''
//         }
//     })
// })


let messageEl = document.getElementById("message");
let feedbackEl = document.getElementById("feedback");
let msgContentEl = document.getElementById("messageContent");
let showEl = document.getElementById("show");

function Submit(){
    let msgValue = messageEl.value;
    if (msgValue === ''){
        feedbackEl.classList.add('show');
        msgContentEl.textContent = '';
    }
    else{
        msgContentEl.textContent = msgValue;
        // feedbackEl.classList.add('feedback');
        feedbackEl.style.display = 'none';
        messageEl.value = '';
    }
    
}