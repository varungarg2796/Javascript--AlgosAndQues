// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


function fiboEvenSum(number) {
  
    var num1=0,num2 = 1, evenSum=0;
    var num3;
    for(var i=0; i<= number; i++){
        num3 = num1+num2;
        num1 = num2;
        num2 = num3;
        console.log("num3:", num3)
        if(num3 % 2 === 0){
            evenSum = evenSum + num3;
            console.log(evenSum)
        }
    }
    return evenSum;
  }
  
  fiboEvenSum(10); //Should return 188