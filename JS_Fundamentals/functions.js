// function declaration
function logger() {
    console.log("My name is Rahul");
}

for (let index = 0; index < 10; index++) {
    logger();
}

function mathsCalculation(num1, num2, operator) {
    console.log(`Sum is ${num1 + num2}`);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

let result = mathsCalculation(1, 25, '/');
console.log(result);

// function expression (Anonymous function)
const printName = function (name) {
    console.log(`Name is ${name}`);
};

printName("Rahul Narayan");

// arrow function
const printAge = (age) => console.log(`Age is ${age}`);

printAge(24);
