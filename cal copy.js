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



const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const calculate = document.getElementById("calculate");
let result = document.getElementById("result");

let num = 0; // 변수를 ''로 받으면 string형, 0으로 받으면 int형으로 선언
let operator = '';
let Num = [];
let Cal = [];

// 숫자 입력
const onClickNumber = (e) => {

    let currentResult = result.value;

    currentResult += e.target.value;
    result.value = Number(currentResult);
    num = Number(result.value);
    console.log(num);
}

Array.from(numbers).forEach(number => number.addEventListener("click", onClickNumber));

// 연산자 입력
const onClickOperator = (e) => {
    let operIndex = Cal.length-1;

    // while (true) {
    //     if ( operIndex === -1 ) {
    //         Cal = [];
    //     }
        
    //     if ( operIndex !== -1 && operIndex%2 !== 0) {
    //         Cal.push(num);
    //         operator = e.target.value;
    //         Cal.push(operator);
    //         console.log(Cal);
    //         false;
    //     }
    // }
    // if () {
    //     result.value += operator;
    //     console.log(Cal);
    // }
    // if ( lastIndex > 0 && lastIndex%2 === 0 ) {
        //     Cal.splice(lastIndex,1,e.target.value);
        //     alert("숫자를 입력하세요.");
        //     console.log(Cal);
        // }
        // else if ( lastIndex === 0 ) {
            //     Cal = [];
            //     alert("숫자를 입력하세요.");
            //     console.log(Cal);
            // }
            // else {
                // if ( Cal.slice(-1)[0] == )
        // Cal.push(num);
        // operator = e.target.value;
        // Cal.push(operator);
        // console.log(Cal);
        // console.log(Cal.length);
        // result.value += e.target.value;

        // if( lastIndex > 0 && lastIndex%2 === 0 ) {
        //     operator = e.target.value;
        //     Cal.splice(lastIndex, 2, operator);
        //     console.log(Cal);
        //     result.value = e.target.value;
        // }
        // result.value='';
    // }
}    

Array.from(operators).forEach(operator => operator.addEventListener("click", onClickOperator));

// 계산 함수
const CAL = (e) => {
    num = Number(result.value);
    Cal.push(num);
    console.log(Cal);
}









// 초기화 버튼
function onClickClear(e) {
    num = '';
    operator = '';
    Cal = [];
    result.value = '';
}

if(clear){
    clear.addEventListener("click", onClickClear);
}

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
// const cal = ['1', '+', '3', '/', '3'];

// function operate() {
//     if (cal[i] === '+') {
//         result = parseInt(cal[i-1]) + parseInt(cal[i+1]);
//     }
//     if (cal[i] === '-') {
//         result = parseInt(cal[i-1]) - parseInt(cal[i+1]);
//     }
//     if (cal[i] === '*') {
//         result = parseInt(cal[i-1]) * parseInt(cal[i+1]);
//     }
//     if (cal[i] === '/') {
//         result = parseInt(cal[i-1]) / parseInt(cal[i+1]);
//     }
//     console.log(result);
// }

// 계산 버튼
// function onClickOperator(e) {
//     operator = e.target.textContent;
// }