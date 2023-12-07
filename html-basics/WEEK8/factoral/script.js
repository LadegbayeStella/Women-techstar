function calculateFactorial(number) {
    if (number < 0) {
      return "Please enter a non-negative integer.";
    }
  
    let factorial = 1;
  
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  console.log(calculateFactorial(5));
  

  function isEven( value){
    if(value%2 == 0){
        console.log(value + " is an even number");
    }else{
        console.log(value + " is not an even number");
    }

  }

  isEven(6);


  function power(value1, value2){
    return Math.pow(value1, value2);
  }
 console.log(power(5, 3));