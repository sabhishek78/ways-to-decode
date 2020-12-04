// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

function decode(text){
    var n=text.length;
    return countDecoding(text,n);
}
function countDecoding(text,n){ 
  if (n == 0 || n == 1) 
        return 1; 
     let count = 0;  // Initialize count 
    if (text[n-1] > '0') //check last digit
        count +=  countDecoding(text, n-1); 
  if (text[n-2] == '1' || (text[n-2] == '2' && text[n-1] < '7')) 
        count +=  countDecoding(text, n-2); 
        return count; 
 } 
console.log(decode('1'));//1
console.log(decode('10'));//1
console.log(decode('11'));//2
console.log(decode('100'));//0
console.log(decode('110'));//1
console.log(decode('111'));//3
console.log(decode('10101'));//1
console.log(decode('11111'));//8
console.log(decode('1223'));
// Input the digit sequence.
// Initialize count = 0.
// If the last digit is non-zero, recur for the next remaining (n-1) digits and then add the result to the total count.
// If the last two digits form a valid character (or smaller than 27), recur for the remaining (n-2) digits and add the result to total count.


