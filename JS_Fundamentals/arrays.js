const names = ["Rahul", "Tanya", "Srushti", "Palak"];
const fruits = new Array("apples", 24, "pears", "oranges");

console.log(names, fruits);
console.log(names[2]);
console.log(fruits.length);

// last array element
console.log(names[names.length - 1]);

/*
adds element at the end
push method also returns length of the array
*/
names.push("Mudit");
console.log(names);

/*
adds element at the front
unshift method also returns length of the array
*/
names.unshift("Kartik");
console.log(names);

/*
removes element from the end
pop method also returns the last element
*/
names.pop();
console.log(names);

/*
removes element from the front
shift method also returns the front element
*/
names.shift();
console.log(names);

console.log(names.includes("Rahul"));
console.log(names.includes("RNM"));

names.unshift(23);
console.log(names.includes(23)); // includes method follows strict equality
console.log(names.includes('23')); // no type coercion
