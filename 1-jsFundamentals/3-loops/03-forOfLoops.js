/*
For of Loops
*/

//of requires that your 'thing' you're looping through be iterable.
//that means that it needs to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item);
}

let catArray = ['tabby', 'british', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}

//for of grabs the value of the thing