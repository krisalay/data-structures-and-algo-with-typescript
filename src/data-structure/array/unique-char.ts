/**
 * Tells if the input string has unique characters
 * Time Complexity: O(n) where n is the length of string. We can argue that time complexity can be O(1) because our loop
 * will never run more than 256 iterations
 * Space Complexity: O(1) - constant space of 256 characters
 * @param str - input string
 * @returns {boolean}
 */
function isUniqueChar(str: string): boolean {
  if (str.length > 256) {
    return false;
  }
  const charArray: boolean[] = new Array(256).fill(false);
  for(let i = 0; i < str.length; i++) {
    const index: number = str.charCodeAt(i);
    if (charArray[index]) {
      return false;
    }
    charArray[index] = true;
  }
  return true;
}

console.log(isUniqueChar("abcder")); // true
console.log(isUniqueChar("")); // true
console.log(isUniqueChar("abgrtt")); // false