const digits = document.getElementsByClassName('digit');
const c = document.getElementById("clear");
const equal = document.getElementById("equal");

let history = document.querySelector('.history span');
let takenDigits = [];
let action = '';
let score;

function showResult(e) {
    let takenMark = e.target;
    console.log("takenMark", takenMark);

    if (takenMark.classList.contains("digit")) {
        takenDigits.push(takenMark.textContent);
        console.log('takenDigits', takenDigits);
    }

    function foo() {
        history.textContent += takenMark.textContent;
    }

    foo();

    function calc() {
        score = Number(takenDigits[0]) + Number(takenDigits[1]);
        history.textContent = score;
    }

    equal.addEventListener('click', calc);
}

function clear() {
    history.textContent = '0';
}

// const score = `${ takenDigits[0] } ${ takenDigits[1] } ${ takenDigits[2] } ${ takenDigits[3] } ${ takenDigits[4] } ${ takenDigits[5] } ${ takenDigits[6] } ${ takenDigits[7] } ${ takenDigits[8] } ${ takenDigits[9] } `

// function calc() {
//     let score = Number(takenDigits[0]);
// }


for (i = 0; i < 10; i++) {
    digits[i].addEventListener('click', showResult);
}

c.addEventListener('click', clear);


console.log("takenDigits", takenDigits);
console.log("action", action);
