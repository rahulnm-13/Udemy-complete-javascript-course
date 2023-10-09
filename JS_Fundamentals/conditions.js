const age = 14;
const ageLimit = 18;
const isOldEnough = age >= ageLimit;

if (isOldEnough) {
    console.log("You're old enough to vote!");
}
else {
    console.log("You can't vote right now!");
    console.log(`But you can vote after ${ageLimit - age} years.`);
}