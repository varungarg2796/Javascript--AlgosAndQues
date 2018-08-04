function largestPalindromeProduct(digit) {
    // get all the possible 2 or 3 digit product
    var check1,check2;
    var product,largestPalindrome=0;
    if(digit === 2){
        for(var i=1; i<100; i++){
            for(var j=1; j<100; j++){
                product = i*j;
                var s = ''+product;
                if(s === s.split("").reverse().join("") && product>largestPalindrome){
                    largestPalindrome = product
                }
            }
        }
        return largestPalindrome
    }

    if(digit === 3){
        for(var i=999; i>99; i--){
            for(var j=999; j>99; j--){
                product = i*j;
                var s = ''+product;
                if(s === s.split("").reverse().join("") && product>largestPalindrome){
                    largestPalindrome = product
                }
            }
        }
        return largestPalindrome
    }


  }
  
  console.log(largestPalindromeProduct(3));