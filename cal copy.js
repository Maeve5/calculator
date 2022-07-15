const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result"); // result 변수값 자체를 쓰는 게 아님 => 변경될 일 없음 => const 사용

let num = 0; // 변수를 ''로 받으면 string형, 0으로 받으면 int형으로 선언
let operator = '';
let Num = [];
let Cal = [];
let currentResult = result.value;
let lastOperator = '';
let currentValue = '';

// 숫자 입력
const onClickNumber = (e) => {
    if ( !operator ) {
        currentResult += e.target.value;
        result.value = Number(currentResult);
        num = Number(result.value);
        console.log(Cal);
    }
    else {

        currentResult += e.target.value;
        result.value += Number(currentResult);
        num = Number(currentResult);
    }
}

Array.from(numbers).forEach(number => number.addEventListener("click", onClickNumber));

// 연산자 입력
const onClickOperator = (e) => {
    
    if ( !num ) {
        lastOperator = '';
    }
    else {
        lastOperator = e.target.value;
        operator = lastOperator;
        if ( typeof Cal[Cal.length-1] === 'number' || Cal.length === 0 ) {
            Cal.push(num, operator);
            result.value += operator;
        }
        else {
            Cal.splice(-1,1,operator);
            currentValue = Cal.toString();
            result.value = currentValue.replace(/,/g,""); // 문자열 내 콤마 제거 ( g : global, 모든 패턴 체크)
            currentResult = result.value;
            num = 0;
        }
    }
    console.log(lastOperator);
    console.log(Cal);
}

Array.from(operators).forEach(operator => operator.addEventListener("click", onClickOperator));

// 계산 함수
const CAL = () => {
    Cal.push(num);
    console.log(Cal);

    // 연산자 위치 선언
    let addIndex = Cal.indexOf ('+');
    let subIndex = Cal.indexOf ('-');
    let mulIndex = Cal.indexOf ('*');
    let divIndex = Cal.indexOf ('/');
                
    // *, / 계산 함수
    const mulDiv = () => {

        let end1 = false;
        
        // *, / 순서대로 진행
        while ( mulIndex !== -1 || divIndex !== -1 ) {
            
            // *, / 모두 있는 경우
            if ( mulIndex !== -1 && divIndex !== -1 ) {
                if ( mulIndex < divIndex ) {
                    Cal.splice( mulIndex-1, 3, String( Cal[mulIndex-1] * Cal[mulIndex+1] ));
                } // * 먼저
                if ( mulIndex > divIndex ) {
                    Cal.splice( divIndex-1, 3, String( Cal[divIndex-1] / Cal[divIndex+1] ));
                } // / 먼저
                mulIndex = Cal.indexOf ('*');
                divIndex = Cal.indexOf ('/');
            }
            
            // * 또는 /만 남은 경우
            if ( mulIndex === -1 || divIndex === -1 ) {
                // * 반복
                while ( mulIndex !== -1 ) {
                    Cal.splice( mulIndex-1, 3, String( Cal[mulIndex-1] * Cal[mulIndex+1] ));
                    mulIndex = Cal.indexOf ('*');
                }
                // / 반복
                while ( divIndex !== -1 ) {
                    Cal.splice( divIndex-1, 3, String( Cal[divIndex-1] / Cal[divIndex+1] ));
                    divIndex = Cal.indexOf ('/');
                }
            }
            // *, /이 더 이상 없는 경우

            if ( mulIndex === -1 && divIndex === -1 ) {
                end1 = true; // while문 여기서 종료되면 end1=true값
            }
        }
        // end1 값 리턴
        return end1;
    }
    
    // +, - 계산 함수
    const addSub = () => {
        
        let end2 = false;
        
        // +, - 순서대로 진행
        while ( addIndex !== -1 || subIndex !== -1 ) {
            
            // +, - 모두 있는 경우
            if ( addIndex !== -1 && subIndex !== -1 ) {
                if ( addIndex < subIndex ) {
                    Cal.splice( addIndex-1, 3, String( Number(Cal[addIndex-1]) + Number(Cal[addIndex+1]) ));
                } // + 먼저
                if ( addIndex > subIndex ) {
                    Cal.splice( subIndex-1, 3, String( Cal[subIndex-1] - Cal[subIndex+1] ));
                } // - 먼저
                addIndex = Cal.indexOf ('+');
                subIndex = Cal.indexOf ('-');
            }
        
            // + 또는 -만 남은 경우
            if ( addIndex === -1 || subIndex === -1 ) {
                // + 반복
                while ( addIndex !== -1 ){
                    Cal.splice( addIndex-1, 3, String( Number(Cal[addIndex-1]) + Number(Cal[addIndex+1]) ));
                    addIndex = Cal.indexOf ('+');
                }
                // - 반복
                while ( subIndex !== -1 ) {
                    Cal.splice( subIndex-1, 3, String( Cal[subIndex-1] - Cal[subIndex+1] ));
                    subIndex = Cal.indexOf ('-');
                }
            }
            
            // +, -이 더 이상 없는 경우
            if ( addIndex === -1 && subIndex === -1 ) {
                end2 = true; // while문 여기서 종료되면 end2=true값
            }
        }
        // end2 값 리턴
        return end2;
    }

    // 함수 잘 작동되면 Cal index값 도출, 작동되지 않았으면 false 도출
    let addSubEnd = false;
    const mulDivEnd = mulDiv();

    if ( mulDivEnd ) {
        addSubEnd = addSub();
    }

    if ( mulDivEnd && addSubEnd ) {
        document.querySelector("input").value = String(Cal);
    } else {
        console.log("mulDivEnd", mulDivEnd);
        console.log("addSubEnd", addSubEnd);
    }
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