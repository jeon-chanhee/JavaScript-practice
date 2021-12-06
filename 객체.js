// 객체
let codeit = {
    name: '코드잇',
    'born Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

// 점 표기법
console.log(codeit.name);

// 대괄호 표기법
console.log(codeit['born ' + 'Year']);

let propertyName = 'name';
console.log(codeit[propertyName]);

// 객체 안에 객체는 어떻게?
console.log(codeit.bestCourse.language);
console.log(codeit.bestCourse['language']);

// 새로운 property 할당
codeit.ceo = '강영훈';
console.log(codeit.ceo);

// property 삭제
delete codeit.ceo;

console.log('name' in codeit); // 객체안에 있는지 확인해서 boolean 값으로 출력

// 메소드
let greetings = {
    sayHello: function () {
        console.log('Hello!');
    },
    sayHi: function () {
        console.log('Hi!');
    },
    sayBye: function () {
        console.log('Bye!');
    }
};

greetings.sayHi();

// for..in
for (let key in codeit) {
    console.log(key);
    console.log(codeit[key]);
}