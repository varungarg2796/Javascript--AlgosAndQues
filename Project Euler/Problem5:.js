//ISSUE- Last case not working in FCC

function smallestMult(n) {
    // Good luck!
    var largestNumber;


    for(var j=10; j<=Number.MAX_SAFE_INTEGER; j++){
        largestNumber = j;
            for(var i=1; i<=n; i++){
                if(largestNumber % i === 0){
                    if(i==n){
                        return largestNumber
                    }  
                } else{
                    break
                }
            }
    }
  }
  
console.log(smallestMult(20));


//smallestMult(5) should return 60.
//smallestMult(10) should return 2520.
//smallestMult(20) should return 232792560.