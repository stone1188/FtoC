// Program to convert Celsius to Farhenheit

let f = promt('Enter a temperature in farhenheit to convert to celsius')

// convert C to F function  
function convertToCelsius(f) {
    const celsius =(f - 32) * (5/9);
    return celsius;
}

let c = convertToCelsius();

function createMessage(f,c){
    console.log(`you entered ${f} farhenheit and it was converted to ${c} celsius`)
}

function rand(limit) {
    let num = Math.random() * limit ;
    num = Math.ceil(num);
    return num;
}

console.log("heres a random number between 0-10" + rand(10));