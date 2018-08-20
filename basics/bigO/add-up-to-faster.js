function addUpTo(n){
    return n*(n + 1)/2
}

var start = clock();
console.log(addUpTo(1000000000));
var duration = clock(start);
console.log("Took "+duration+"ms");


function clock(start) {
    if ( !start ) return process.hrtime();
    var end = process.hrtime(start);
    return Math.round((end[0]*1000) + (end[1]/1000000));
}
