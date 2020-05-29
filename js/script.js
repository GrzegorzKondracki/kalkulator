function insert(num) {
    document.textView.value = document.textView.value + num;
}



























// const digits = document.getElementsByClassName('digit');
// const action = document.getElementsByClassName('action');
// const c = document.getElementById("clear");
// const equal = document.getElementById("equal");

// let history = document.querySelector('.history span');
// let takenDigits = [];

// let score;
// let mark = '+';

// function showResult(e) {
//     let takenMark = e.target;
//     console.log("takenMark", takenMark);

//     // if (takenMark.classList.contains("digit")) {
//     //     takenDigits.push(takenMark.textContent);
//     //     console.log('takenDigits', takenDigits);
//     // }

//     if (takenMark.classList.contains("digit") || takenMark.classList.contains("action")) {
//         takenDigits.push(takenMark.textContent);
//         console.log('takenDigits', takenDigits);
//     }

//     function foo() {
//         history.textContent += takenMark.textContent;
//     }

//     foo();

//     if (history.textContent.includes('+')) {
//         add();
//     } else if (history.textContent.includes('x')) {
//         multiply();
//     }
// }

// function clear() {
//     history.textContent = '0';
// }

// function add() {
//     let x = Number(takenDigits[0]);
//     let y = Number(takenDigits[2]);
//     let result = x + y;
//     history.textContent = result;
// }

// function multiply() {
//     let x = Number(takenDigits[0]);
//     let y = Number(takenDigits[2]);
//     let result = x * y;
//     history.textContent = result;
//     return x * y;
// }

// for (i = 0; i < 10; i++) {
//     digits[i].addEventListener('click', showResult);
// }
// for (i = 0; i < 3; i++) {
//     action[i].addEventListener('click', showResult);
// }

// c.addEventListener('click', clear);

// function check() {
//     if (takenDigits[1] == '+') {
//         equal.addEventListener('click', add)
//     }
//     else if (takenDigits[1] == 'x') {
//         equal.addEventListener('click', multiply)
//     }
// }

// equal.addEventListener('click', check);

// console.log("takenDigits", takenDigits);
// console.log("action", action);
