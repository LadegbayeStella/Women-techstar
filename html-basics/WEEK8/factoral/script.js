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
  