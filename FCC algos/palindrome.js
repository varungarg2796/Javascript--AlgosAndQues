// function palindrome(str) {
//   return str.replace(/[\W_]/g, '').toLowerCase() ===
//          str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
// }


function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for (var i = 0; i < (str.length - 1) / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
        return true;
    }

}



palindrome("eye");
