var hour = 0 ;

if (hour<18) {
  greeting = "Good Day"// code
} else if (hour>18) {
  greeting = "Good Night"// code
} else {
  // code
}

console.log(greeting)

hour < 18 ? greeting = "Yes" : greeting = "No" ;


console.log(greeting)

if ((1 <= hour ) && (hour <= 18)) {
  greeting = "Good Day"// code
} else  {
  greeting = "Good Night"// code
}

console.log(greeting);


function process(x, y){
  if(x > y){
    return true;
  } else {
    return false;
  }
}


console.log(process(4, 8))


function myFunction() {
    return Math.floor(Math.random() * 10);
}

console.log(myFunction())
