function compress(str: string): string {
  if (!str.length) {
    return str;
  }
  let char = str[0];
  let count = 1;
  let compressedString = "";
  for (let i = 1; i < str.length; i++) {
    if (char !== str[i]) {
      compressedString = compressedString.concat(char).concat(count.toString());
      char = str[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  compressedString = compressedString.concat(char).concat(count.toString());
  if (compressedString.length < str.length) {
    return compressedString;
  }
  return str;
}

console.log(compress("aaabcccccaa"));