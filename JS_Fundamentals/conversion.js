const numString = "2023";
const num = Number(numString);

// Type conversion
console.log(numString, num);
console.log(String(22), 22);

// Type coercion
console.log("I'm " + 24 + " years old");
console.log('10' + '5' - 3);
console.log('10' - '5' - 3);

let number = '1' + 1;
console.log(number);
number -= 1;
console.log(number);

console.log('5' - 5 + '2');

// 5 falsy values: 0, "", undefines, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Rahul'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let a = '2';
console.log(a === 2);
console.log(a == 2);