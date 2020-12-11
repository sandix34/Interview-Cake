// My solution
function reverse(arrayOfChars) {

  console.log(arrayOfChars); // [], [ 'A' ], [ 'A', 'B', 'C', 'D', 'E' ] 

  // Reverse the input array of characters in place
  if (arrayOfChars.length <= 1) return
  arrayOfChars.reverse();

  console.log(arrayOfChars); // [ 'E', 'D', 'C', 'B', 'A' ] 

}


/* -------
* Solution
* We swap the first and last characters, then the second and second-to-last characters, and so on until we reach the middle.
* --------
*
* function reverse(arrayOfChars) {
* 
*   let leftIndex = 0;
*   let rightIndex = arrayOfChars.length - 1;
* 
*   while (leftIndex < rightIndex) {
* 
*     // Swap characters
*     const temp = arrayOfChars[leftIndex];
*     arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
*     arrayOfChars[rightIndex] = temp;
* 
*     // Move towards middle
*     leftIndex++;
*     rightIndex--;
*   }
* }
* 
*/












// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}