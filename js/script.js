const digits = document.getElementsByClassName('digit');

let result = document.getElementsByClassName('result');

let showResult = '';

var takenDigit = '';

function selectDigit(e) {
    takenDigit = e.target.textContent;
    showResult += takenDigit;

    console.log(showResult);
    console.log(takenDigit);
}




document.addEventListener('click', selectDigit);









// let index = '8';
// let value = '';

// value = digits[index].textContent;

// result.appendChild(value);

// result.textContent = 2;