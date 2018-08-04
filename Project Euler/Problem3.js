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

getPrime(12);