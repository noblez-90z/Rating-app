const start = document.querySelector('.start-container')
const thanks = document.querySelector('.thankyou-container')
const submit = document.querySelector('input')
const text = document.querySelector('span')
const rTbtn = document.querySelectorAll('button')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
one.addEventListener('click',function(){
    one.classList.add('active')
    if (one && submit) {
        text.innerHTML = one.innerHTML + " "
    }
})
two.addEventListener('click',function(){
    two.classList.add('active')
    if (one && submit) {
        text.innerHTML = two.innerHTML + " "
    }
})
three.addEventListener('click',function(){
    three.classList.add('active')
    if (one && submit) {
        text.innerHTML = three.innerHTML + " "
    }
})
four.addEventListener('click',function(){
    four.classList.add('active')
    if (one && submit) {
        text.innerHTML = four.innerHTML + " "
    }
})
five.addEventListener('click',function(){
    five.classList.add('active')
    if (one && submit) {
        text.innerHTML = five.innerHTML + " "
    }
})
// function work(){
//     if (one == submit) {
//         text.innerHTML = "1 "
//     }
//     // text.innerHTML = "1 "
// }

submit.addEventListener('click',function(){
    start.classList.add('active')
    thanks.classList.add('active')
    // work()
})