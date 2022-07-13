// addEventListener는 이벤트라서 함수 인자로 무조건 e/event를 받음
// 이미 선언된 변수를 바로 함수 내에서 호출해도 기능함

// let result = document.getElementById("result");
// const numbers = document.getElementsByClassName("number");
// const operators = document.getElementsByClassName("operator");
// const calculate = document.getElementById("calculate");
// const clear = document.getElementById("clear");

// let preNum = '';
// let currentNum = '';
// let operator = '';

// function onClickNumber(event) {
//     if(!operator) {
//         if(!preNum) {
//             result.value = '';
//         }
//         preNum += event.target.textContent;
//         result.value += event.target.textContent;
//     }
//     else {
//         if(!currentNum) {
//             result.value = '';
//         }
//         currentNum += event.target.textContent;
//         result.value += event.target.textContent;
//     }
// }

// function onClickOperator(event) {
//     if(preNum) {
//         operator = event.target.textContent;
//     }
// }

// function CAL(event) {
//     if(operator === '+') {
//         result.value = parseInt(preNum) + parseInt(currentNum);
//     }
//     else if(operator === '-') {
//         result.value = parseInt(preNum) - parseInt(currentNum);
//     }
//     else if(operator === '*') {
//         result.value = parseInt(preNum) * parseInt(currentNum);
//     }
//     else if(operator === '/') {
//         result.value = parseInt(preNum) / parseInt(currentNum);
//     }
// }

// function onClickClear() {
//     preNum = '';
//     currentNum = '';
//     operator = '';
//     result.value = '0';
// }


// Array.from(numbers).forEach(number => number.addEventListener("click", onClickNumber));
// Array.from(operators).forEach(operator => operator.addEventListener("click", onClickOperator));

// if(calculate){
//     calculate.addEventListener("click", CAL);
// }



// /////////

// const result = document.getElementById("result");
// const numbers = document.getElementsByClassName("number");
// const operators = document.getElementsByClassName("operator");
// const calculate = document.getElementById("calculate");
// const clear = document.getElementById("clear");

// let cal = [];

// Array.from(numbers).forEach(number => number.addEventListener("click", print));
// Array.from(operators).forEach(operator => operator.addEventListener("click", print));

// function print(e) {
//     if (operators)
// }
























// let Num = [];
// let Opr = [];
// let operator = '';

// Array.from(numbers).forEach(number => number.addEventListener("click", onClickNumber));

// Array.from(operators).forEach(operator => operator.addEventListener("click", onClickOperator));

// function onClickNumber(e) {
//     result.value += e.target.textContent;
//     Num.splice(0, 1, result.value);
// }

// function onClickOperator(e) {
//     operator = e.target.textContent;
//     Opr.splice(0, 1, operator);
// }

// let num = '';

// function onClickNumber(e) {
    //     result.value += e.target.textContent;
    //     num = result.value;
    // }
    
// let cal = [];
// cal = cal ? cal : [];

    








// 계산
// cal[even] = number
// cal[odd] = operator
const cal = ['1', '+', '3', '/', '2'];

for(let i = 1; i < cal.length; i += 2) {
    if (cal[i] === '+') {
        result = parseInt(cal[i-1]) + parseInt(cal[i+1]);
    }
    if (cal[i] === '-') {
        result = parseInt(cal[i-1]) - parseInt(cal[i+1]);
    }
    if (cal[i] === '*') {
        result = parseInt(cal[i-1]) * parseInt(cal[i+1]);
    }
    if (cal[i] === '/') {
        result = parseInt(cal[i-1]) / parseInt(cal[i+1]);
    }
    console.log(result);
}

// 계산 버트
// function onClickOperator(e) {
//     operator = e.target.textContent;
// }

// 초기화 버튼
// function onClickClear() {
//     cal = [];
//     operator = [];
//     result.value = '';
// }

// if(clear){
//     clear.addEventListener("click", onClickClear);
// }