function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}


















// Tests

let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'not using first movie';
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = 'multiple movies shorter than flight';
actual = canTwoMoviesFillFlight([5, 6, 7, 8], 9);
expected = false;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}