// #67kfznmiMl
let main = [
    '1', '2', '3', 'a', 'b', 'c', 'true', 'false', 'Bard', 'King'
];

console.log(main);

// #LARqoUj5I
let ReversoContext1 =
    {
        title: 'Learn how to learn',
        pageCount: 250,
        genre: 'Psychology'
    }
let ReversoContext2 =
    {
        title: 'The Call of Cthulhu',
        pageCount: 350,
        genre: 'Horror'
    }
let ReversoContext3 =
    {
        title: 'Principle',
        pageCount: 450,
        genre: 'Psychology, Business',
    }

console.log(ReversoContext1, ReversoContext2, ReversoContext3);

// #sA3Gg1sCp
let FullContext1 =
    {
        title: 'Learn how to learn',
        pageCount: 250,
        genre: 'Psychology',
        author:
            [name = 'Barbara Okli', age = 45]
    }
let FullContext2 =
    {
        title: 'The Call of Cthulhu',
        pageCount: 350,
        genre: 'Horror',
        author:
            [name = 'H. P. Lovecraft', age = 'Dead']
    }
let FullContext3 =
    {
        title: 'Principle 80/20',
        pageCount: 450,
        genre: 'Psychology, Business',
        author:
            [name = 'Richard Koch', age = 74]
    }

console.log(FullContext1, FullContext2, FullContext3);

// #jCHFnEbdmFd
let users = [
    {
        name: 'abc',
        username: 'cba',
        password:'qwerty'
    },
    {
        name: 'abc1',
        username: 'cba1',
        password:'qwerty1'
    },
    {
        name: 'abc2',
        username: 'cba2',
        password:'qwerty2'
    },
    {
        name: 'abc3',
        username: 'cba3',
        password:'qwerty3'
    },
    {
        name: 'abc4',
        username: 'cba4',
        password:'qwerty4'
    },
    {
        name: 'abc5',
        username: 'cba5',
        password:'qwerty5'
    },
    {
        name: 'abc6',
        username: 'cba6',
        password:'qwerty6'
    },
    {
        name: 'abc7',
        username: 'cba7',
        password:'qwerty7'
    },
    {
        name: 'abc8',
        username: 'cba8',
        password:'qwerty8'
    },
    {
        name: 'abc9',
        username: 'cba9',
        password:'qwerty9'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
let week = [
    [10, 15, 10],
    [10, 15, 10],
    [10, 15, 10],
    [10, 15, 10],
    [10, 15, 10],
    [10, 15, 10],
    [10, 15, 10]
]
console.log(week[2][1])                        //середа-обід-15градусів

// #bAUsaq6LI
let x = 0
if (x !== 0) {
    console.log('pass')
}
else {
    console.log('fail')
}

x = 1
if (x !== 0) {
    console.log('pass')
}
else {
    console.log('fail')
}

x = -3
if (x !== 0) {
    console.log('pass')
}
else {
    console.log('fail')
}

// #3ckURgvs
let y = +prompt('enter time in minutes')
if (y <= 15 && y >= 1){
    console.log(1)
} else if (y >= 16 && y <= 30){
    console.log(2)
} else if (y >= 31 && y <= 45) {
    console.log(3)
} else if (y >= 46 && y <= 59) {
    console.log(4)
} else {
    console.log('error')
}

// #UMoNq4biWGe
let z = +prompt('enter a day')
if (z <= 10){
    console.log(1)
} else if (z >= 11 && z <= 20) {
    console.log(2)
} else if (z >= 21 && z <= 31) {
    console.log(3)
} else {
    console.log('error')
}

// #KzrtqyQ
let q = +prompt('choose a day, from 0 to 6');
switch (q) {
    case 0:
        console.log('Monday: work, learn, coding');
    break
    case 1:
        console.log('Tuesday: work, learn, coding');
    break
    case 2:
        console.log('Tuesday: work, learn, coding');
    break
    case 3:
        console.log('Thursday: work, learn, coding');
    break
    case 4:
        console.log('Friday: work, learn, coding');
    break
    case 5:
        console.log('Saturday: chill, learn, practice of english');
    break
    case 6:
        console.log('Sunday: rehabilitation from a week');
    break
    default:
        console.log('Invalid input. Please choose a number from 0 to 6.');
}

// #uwsz1RnTQJ1

let x1 = +prompt('enter first');
let x2 = +prompt('enter second');
if (x1 === x2){
    console.log('even numbers');
} else if (x1 > x2) {
    console.log('the first is more');
} else if (x1 < x2) {
    console.log('the second is more');
} else {
    console.log('error');
}

//#iBvqtjEm

let y1 = prompt('enter number');
if (typeof y1 === true) {
    console.log(y1);
} else if (typeof y1 !== true) {
    y1 = undefined
    console.log(y1);
} else {
    console.log('error')
}