var kitty = {
    cute: true,
    hungry: 0.8,
    lives: 9,
    fur: {
        fluffy: true,
        colour: "red",
    },
    threats: null,
    meow: function meow(){ // a function contained as a key value pair of an object is called a method 
        return "meow";
    }, // annonymous functiions have no name
};

console.log(kitty.meow()); // ()function invokation operator

console.log(kitty.two);
// if you ask for a variable name that is not decalred, it gives you an error
// an undeclared parameter of an object gives undefined and no error

kitty.lives++;
console.log(kitty);

kitty.two = "two"; // objects are changable and muteable. you can add to them after they are created 
console.log(kitty);

// kitty.travel(); // error bc you cannot invoke undefined as a function

console.log(typeof kitty.future++); // results in a type number with vlaue NaN (not a number)

console.log(kitty.lives / null);
// null gets coerced to 0 when changing to type number!!


// . is the accessor of an object. left of . is the key, right of . is an object
kitty.fur.fluffy; 

if(kitty.cute){ 
    console.log('true?');
}else{
    console.log('false?')
} 

for (key in kitty){
    console.log(key);
    kitty[key]; // alternate accessor for objects in javascript
    // kitty["meow" + count];
}
var x = {};
x.y = 12; // mutates objects with assignments
x.z; // returns undefined 
//x.z() // throws an error by trying to invoke undefined as a function
x.z = function(){}; // method
x.z(); // invokes the z method and returns undefined unless moified 