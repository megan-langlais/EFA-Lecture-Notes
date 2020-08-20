//If Else
let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
}   else {
    console.log('No jacket necessary!');
}

//you can blend complex conditionals and if-else statements based on your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
}   else{
    console.log('Either the temperature is cool, the variable is not a number, or both');
}

//Else if

//if-elseif statements can be chained

let age = 30; //change this variable and watch how output changes

if (age >= 25){
    console.log('Yay! You can rent a car');
}   else if (age >= 21){
    console.log('Yay! You can drink');
}   else if (age >= 18){
    console.log('Yay! You can vote');
}   else {
    console.log('Sorry, you are too young to do anything fun');
}