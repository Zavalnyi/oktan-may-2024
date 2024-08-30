//#67kfznmiMl
let anything = [1, 2, 3, 4, 'qwer', 'ewq', 'qaz', true, false, []];

console.log(anything [0]);
console.log(anything [1]);
console.log(anything [2]);
console.log(anything [3]);
console.log(anything [4]);
console.log(anything [5]);
console.log(anything [6]);
console.log(anything [7]);
console.log(anything [8]);
console.log(anything [9]);

// #LARqoUj5I
let books;
books = [
    {
        title: 'a',
        pageCount: 100,
        genre: 'qwert'
    },
    {
        title: 'b',
        pageCount: 150,
        genre: 'qwert1'
    },
    {
        title: 'c',
        pageCount: 200,
        genre: 'qwert2'
    }
    ];

console.log(books);

// #sA3Gg1sCp
let books;
books = [
    {
        title: 'a',
        pageCount: 100,
        genre: 'qwert',
        authors: [
            name = 'qwe',
            age = 12,
        ]
    },
    {
        title: 'b',
        pageCount: 150,
        genre: 'qwert1',
        authors: [
            name = 'qwer',
            age = 13
        ]
    },
    {
        title: 'c',
        pageCount: 200,
        genre: 'qwert2',
        authors: [
            name = 'qwert',
            age = 14,
        ]
    }
    ];

console.log(books[1].authors.name);

// #jCHFnEbdmFd
let account
account = [
    {
        name: 'a1',
        username: 'b1',
        password: 'qwerty'
    },
    {
        name: 'a2',
        username: 'b3',
        password: 'qwerty1'
    },
    {
        name: 'a3',
        username: 'b3',
        password: 'qwerty2'
    },
    {
        name: 'a4',
        username: 'b5',
        password: 'qwerty3'
    },
    {
        name: 'a5',
        username: 'b5',
        password: 'qwerty4'
    },
    {
        name: 'a6',
        username: 'b6',
        password: 'qwerty5'
    },
    {
        name: 'a7',
        username: 'b7',
        password: 'qwerty6'
    },
    {
        name: 'a8',
        username: 'b8',
        password: 'qwerty7'
    },
    {
        name: 'a9',
        username: 'b9',
        password: 'qwerty8'
    },
    {
        name: 'a10',
        username: 'b10',
        password: 'qwerty9'
    }
];

console.log(account[0].password);
console.log(account[1].password);
console.log(account[2].password);
console.log(account[3].password);
console.log(account[4].password);
console.log(account[5].password);
console.log(account[6].password);
console.log(account[7].password);
console.log(account[8].password);
console.log(account[9].password);

// #coYydZuaeEB
let x
x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// #3ckURgvs
let time = +prompt("Введіть час:");

if (time >= 1 && time <= 15) {
    console.log('перша половина');
} else if (time >= 16 && time <= 30) {
    console.log('друга половина');
} else if (time >= 31 && time <= 45) {
    console.log('третя половина');
} else if (time >= 46 && time <= 59) {
    console.log('четверта половина');
} else {
    console.log('Невірний час');
}

// #UMoNq4biWGe
let x = +prompt('enter day');
if (x <= 10 && x > 0) {
    console.log('1');
} else if (x > 11 && x <= 20) {
    console.log('2');
} else if (x >= 21 && x <= 31) {
    console.log('3');
} else {
    console.log('error');
}

// #KzrtqyQ
let dayOfweek = +prompt('enter day of the week');
switch (dayOfweek){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('enter day of the week from 1 to 7')
        break
}

//#uwsz1RnTQJ1
let firstNum = +prompt('enter first number');
let secondNum = +prompt('enter second number');

if (firstNum > secondNum){
    console.log('firstNum more');
}else if (firstNum < secondNum){
    console.log('secondNum more')
}else if (firstNum === secondNum) {
    console.log('=');
} else {
    console.log('error');
}

//#iBvqtjEm
let x = x
if (x) {
    console.log('true');
} else {
    console.log('false');
}

//#awLXL6TBzg
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('good');
} else {
    console.log('bad')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('good');
} else {
    console.log('bad')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('good');
} else {
    console.log('bad')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('good');
} else {
    console.log('bad')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('good');
} else {
    console.log('bad')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('good');
} else {
    console.log('bad')
}
