/**
 * Checks if two strings are permutation of each other
 * Time Complexity: O(n log(n)) - for sorting
 * Space Complexity: O(1)
 * @param str1 - first input string
 * @param str2 - seconds input string
 * @returns {boolean}
 */
function checkPermutation1(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split("").sort();
  const sortedStr2 = str2.split("").sort();

  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation1("abc", "bac"));  // true
console.log(checkPermutation1("abc", "bacd"));  // false
console.log(checkPermutation1("abc", "bad"));  // false


/**
 * Checks if two strings are permutation of each other
 * Time Complexity: O(n)
 * Space Complexity: O(1) - constant space of 256 characters
 * @param str1 - first input string
 * @param str2 - seconds input string
 * @returns {boolean}
 */
function checkPermutation2(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }
  const charArray: number[] = new Array(256).fill(0);

  for(let i = 0; i < str1.length; i++) {
    const value: number = str1.charCodeAt(i);
    charArray[value] = charArray[value] + 1;
  }

  for(let i = 0; i < str2.length; i++) {
    const value: number = str2.charCodeAt(i);
    if(charArray[value] <= 0) {
      return false;
    }
    charArray[value] = charArray[value] - 1;
  }
  return true;
}

console.log(checkPermutation2("abc", "bac"));  // true
console.log(checkPermutation2("abc", "bacd"));  // false
console.log(checkPermutation2("abc", "bad"));  // false