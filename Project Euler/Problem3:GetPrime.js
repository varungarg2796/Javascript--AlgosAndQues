//The prime factors of 13195 are 5, 7, 13 and 29. getPrime(13195) should return 29

function getPrime(number)
{
    var factor = 2;
    while(number != factor)
    {
        if(number % factor === 0)
        {
            number = number / factor;
            console.log("n1",number)
        }
        else
        {
            factor++;
            console.log("f2",factor)
        }
    }
    return factor;
}

console.log(getPrime(43));