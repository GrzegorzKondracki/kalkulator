const digits = document.getElementsByClassName('digit');
const c = document.getElementById("clear");

let result = document.getElementsByClassName('result');
let history = document.querySelector('.history span');

let takenDigits = ["test"];
console.log("takenDigits", takenDigits);

let action = '';
console.log("action", action);

function showResult(e) {
    let takenMark = e.target;
    console.log("takenMark", takenMark);

    if (takenMark.classList.contains("digit")) {
        takenDigits.push(takenMark.textContent);
        console.log(takenDigits);
    }

    function foo() {
        history.textContent += takenMark.textContent;
    }

    foo();
}


function clear() {
    history.textContent = '0';
}

// let score = `${takenDigits[0]} ${takenDigits[1]}`;
// let score = `${takenDigits[0]} ${action} ${takenDigits[1]}`;
// console.log("score", score);

for (i = 0; i < 10; i++) {
    digits[i].addEventListener('click', showResult);
}

c.addEventListener('click', clear);
