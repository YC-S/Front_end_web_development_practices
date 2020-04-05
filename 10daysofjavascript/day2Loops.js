/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) != -1) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) == -1) {
      console.log(s[i]);
    }
  }
}

vowelsAndConsonants("javascriptloops");
