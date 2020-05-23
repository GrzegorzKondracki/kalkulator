const digits = document.getElementsByClassName('digit');
let result = document.getElementsByClassName('result');

// let showResult = '';
let takenDigits = [];
let action = '';

let score = `${takenDigits[0]} ${action} ${takenDigits[1]}`;



function showResult(e) {
    let takenMark = e.target.textContent;
    if (takenMark.classList.contains(digit)) {
        takenDigits.push(takenMark);
    }
}

document.addEventListener('click', showResult);
// document.addEventListener('click', selectDigit);

console.log(takenDigits);
// function selectDigit(e) {
//     let takenDigit = e.target.textContent;
//     takenDogits.push("takenDigit");
//     showResult += takenDigit;

//     console.log(showResult);
//     console.log(takenDigit);
// }

// let operation = function (e) {
//     action = e.target.textContent

// }












// let index = '8';
// let value = '';

// value = digits[index].textContent;

// result.appendChild(value);

// result.textContent = 2;