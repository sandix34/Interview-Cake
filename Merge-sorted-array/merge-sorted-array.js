function mergeArrays(myArray, alicesArray) {
  const mergedArray = myArray.concat(alicesArray);

  console.log(mergedArray); // [], [ 1, 2, 3 ], [ 5, 6, 7 ], [ 2, 4, 6, 1, 3, 7 ],  [ 2, 4, 6, 8, 1, 7 ]
  return mergedArray.sort((a, b) => a - b);
}

/* 
We can do better. With this algorithm 👆 , we're not really taking advantage of the fact that the input arrays are themselves already sorted. 

Solution:

  function mergeArrays(myArray, alicesArray) {

  // Set up our mergedArray
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}
*/








// Tests

let desc = "both arrays are empty";
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = "first array is empty";
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = "second array is empty";
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "both arrays have some numbers";
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "arrays are different lengths";
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
