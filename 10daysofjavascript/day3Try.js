/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString("1234");
reverseString("");
reverseString(123);
reverseString("a");

