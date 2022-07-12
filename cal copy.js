// let numOne = '';
// let operator = '';
// let numTwo = '';
// const result = document.querySelector('#result');

// function onClickNumber(event) {
//     if(!operator) {
//         numOne += event.target.textContent;
//         result.value += event.target.textContent;
//         return;
//     }

//     if(!numTwo) {
//         result.value = '';
//     }

//     numTwo += event.target.textContent;
//     result.value += event.target.textContent;
// }

// document.querySelector("#number").addEventListener('click', onClickNumber);

// ///////


// const result = document.getElementById("result");
// const numbers = document.getElementsByClassName("number");
// const operators = document.getElementsByClassName("operator");
// const calculate = document.getElementById("calculate");
// const clear = document.getElementById("clear");

// let preNum = '';
// let currentNum = '';
// let OP = '';
// let calculating = true;

// function onClickCalculate() {
//     calculating = false;
// }

// const onClickClear = () => {
//     calculating = false;
//     result.value = '';
// }

// const onClickNumber = (e) => {
//     while (calculating) {
//         if (!OP) {
//             preNum = e.target.textContent;
//             result.value += e.target.textContent;
//             return;
//         }
        
//         if (!currentNum) {
//             result.value = '';
//             currentNum =preNum;
//         }
//     }
// }

// const onClickOperator = (e) => {
//     if (preNum) {
//         OP = e.target.textContent;
//         result.value += e.target.textContent;
//     }
//     else {
        
//     }
//     return;
// }

// Array.from(numbers).forEach(number => number.addEventListener("click", onClickNumber));
// Array.from(operators).forEach(operator => operator.addEventListener("click", onClickOperator));

// if(calculate){
//     calculate.addEventListener("click", onClickCalculate);
// }

// if(clear){
//     clear.addEventListener("click",onClickClear);
// }

// ///////22자리 계산기

const result = document.getElementById("result");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");

let preNum = '';
let currentNum = '';
let OP = '';

function onClickClear() {
    preNum = '';
    currentNum = '';
    OP = '';
    result.value = '';
}

function onClickNumber(event) {
    if(!OP) {
        preNum = event.target.textContent;
        result.value += preNum;
        preNum = result.value;
    }

    if(OP) {
        currentNum = event.target.textContent;
        result.value += currentNum;
        currentNum = result.value;
    }
}

function onClickOperator(event) {
    if(preNum) {
        OP = event.target.textContent;
        result.value += OP;
    }
}

function CAL(preNum, OP, currentNum) {
    if(OP === '+') {
        result = preNum + currentNum;
    }
    if(OP === '-') {
        result = preNum - currentNum;
    }
    if(OP === '*') {
        result = preNum * currentNum;
    }
    if(OP === '/') {
        result = preNum / currentNum;
    }
    return String(result);
}

if(clear){
    clear.addEventListener("click", onClickClear);
}

if(calculate){
    calculate.addEventListener("click", CAL);
}

Array.from(numbers).forEach(number => number.addEventListener("click", onClickNumber));
Array.from(operators).forEach(operator => operator.addEventListener("click", onClickOperator));
