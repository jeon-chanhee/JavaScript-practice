// 숫자 표기법
let millionaire = 1000000000;
let myNumber_one = 1e9; // 지수 표기법

console.log()

// Number
let myNumber = 0.3591;

// toFixed(0 ~ 100)
console.log(myNumber.toFixed(3));
console.log(Number (myNumber.toFixed(3)));
console.log(+myNumber.toFixed(3));

// 2진수, 8진수 , 16진수
let yourNumber = 255;
console.log(yourNumber.toString(2));
console.log(yourNumber.toString(8));
console.log(yourNumber.toString(16));

// String
let myString = "Hi codeit!";

// 문자열 길이
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메소드

// 요소 탐색
console.log(myString.indexOf('a')); // 앞부터
console.log(myString.lastIndexOf('i')); // 뒤부터

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 대문자

// 양 끝 공백 제거
console.log(myString.trim()); //

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0,2));
console.log(myString.slice(3));


