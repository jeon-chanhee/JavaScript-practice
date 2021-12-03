
// 거듭제곱
console.log(2 ** 3);

// 나머지
console.log(7 % 3);

// 덧셈
console.log(1+4);


console.log((2 + 3) * 2);


// 문자열
console.log("He said I\'m Iron man");
console.log("Hello"+"Codeit");

// 불린
console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 === 3);
console.log(3 !== 3);
console.log("------------------");

console.log(true && true);
console.log(true && false);
console.log(true && false);
console.log("------------------");
console.log(true || false);
console.log(true || false);
console.log("------------------");
console.log(!true);
console.log(!false);
console.log(!!false);


// typeof 연산자 무슨 타입인지 알려줌
console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof 'true');


let name = "Codeit";
function sayHello() {
    console.log('Hello');
}
console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof (8 - 3));

// 형 변환
console.log(Number('10')+Number('5'));
console.log(String(10) + String(5));

// 불린 -> 숫자
let y = false;
console.log(y);    // boolean 형은 숫자로 나타날때 0 , 1로 나타남
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));

console.log('4' - true); // 자동으로 변환되서 연산

// 산술 연산
console.log(4 + '2'); // 어느 한쪽이라도 문자열이 있으면 둘다 문자열로 인식해서 계산함
console.log(4 + 2);
console.log(4 - true);
console.log(4 - true);

// 관계 연산 비교
console.log(2 < '3'); // true 문자를 숫자로 인식함
console.log(2 > true); // true를 숫자로 인식함
console.log('2' <= false); // '2'는 숫자 2 false는 0
console.log('two' >= 1); // two는 nan으로 변환 비교가 불가능해 false가 출력

// 같은 비교 연산
console.log(1 === '1'); // 일치, 불일치 의 문제라 다 false
console.log(1 === true);
console.log(1 == '1'); // 동등, 부등을 따질때는 문자를 숫자로 불린을 숫자로 인식함
console.log(1 == true);


// 템플릿 문자열 (tmeplate strings)
// template: 일정한 틀, 형식
let year = 2018;
let month = 3;
let day = 11;

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

let myNumber = 3;

function getTwice(x) {
    return x * 2;
}
console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}`);

// null과 undefined
let codeit;
console.log(codeit);  // undefined 값이 정해지지 않았다를 말함
codeit = null;
codeit.log(codeit);  // null은 의도적으로 값이 없음을 의미.

