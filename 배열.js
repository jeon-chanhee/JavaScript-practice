// 배열

let courseRanking = [
    '자바스크립트 프로그래밍 기초',
    'Git으로 배우는 버전 관리',
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초'
];

// indexing (0 ~ ...)
console.log(courseRanking[0]);


// 배열의 메소드
let members = ['쿤갈레', '헤헤', '우리생각해써', '흙토끼', 'End Miracle'];

// splice(startIndex, deleteCount, item)
members.splice(1, 2, 'nicecodeit','hicodeit');
console.log(members);
console.log(members.length, 0); // 맨 마지막 값 추가


// 배열의 첫 요소를 삭제 : shitf()
members.shift();
console.log(members);

// 배열의 마지막 요소를 삭제: pop()
members.pop();
console.log(members);

// 배열의 첫 요소로 값 추가: unshift(value) 추가할 값 추가
members.unshift('Nicecodeit!')
console.log(members);

// 배열의 마지막 요소로 값 추가: push(value)
members.push('hicodeit');
console.log(members);

// for..of
let influencer = ['suwonlog','small.tiger', 'minam_ludens','convenience24'];

for (let element of influencer) {
    console.log(element);
}

for (let index in influencer) {
    console.log(influencer[index]);  // for in 문은 객체에 적합하게 설계된 반복문이라 배열에 쓸 경우 효율 떨어짐
}

// 다차원 배열
let twoDimensional = [[1,2], [3,4]];

console.log(twoDimensional[0][1]);