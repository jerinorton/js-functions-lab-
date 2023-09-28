
console.log('this works!')

// defining a function
// declaring a function
// creating the reusable block of code
// to be used at a later time in the program
function sayHello(peronsName){
    // write the code to say hello here
    console.log(`Hello ${peronsName}`)
}

// execute the function
// invoke the function
// call the function

// write the function name ()
sayHello('Shavon'); // runs the block code defined by the sayHello func
sayHello('Mel');
sayHello('Ed');
sayHello('Augusta');


function sayGoodbye(phrase, personsName){
console.log(`${phrase}, ${personsName}`)
}

sayGoodbye('Adios', 'Laura')
sayGoodbye('Chao', 'Becky')
sayGoodbye('Goodbye','Chad')
sayGoodbye('Peace', 'Frankie')



// define and call the function
// sayGoodbye should accept two parameters, one phrase, and one person
// add it logs a message
// adios, Laura
// chao, Becky
// goodbye, Chad
// peace, Frankie


function add(x, y){
    const sum = x + y
    console.log(sum)
    return sum
    //return x + y // return produces a value for the function when its called
}
console.log(add(2, 2), "<_ _________ LOOK AT THIS")

function getPlayerUserName(username){
    return username.toUpperCase();
}
// before the game we dont know the players name
let playerOne;
let playerTwo;
let playerThree; 
let playerFour;

//after they join the game we want to set the players name

playerOne = getPlayerUserName('Luke') // == > 'Luke'
playerTwo = getPlayerUserName('Laura') // == > 'Laura'
playerThree = getPlayerUserName('Kate') // == > 'Kate'
playerFour = getPlayerUserName('Kevin') // == > 'Kevin'