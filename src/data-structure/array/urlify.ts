function urilify(str: string): string {
  let numSpace = 0;
  for (let i = 0 ; i < str.length; i++) {
    if (str[i] === " ") {
      numSpace++;
    }
  }
  if (numSpace === 0) {
    return str;
  }

  let newLength = str.length + numSpace * 2;
  const result = new Array<string>(newLength).fill("");
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      result[newLength - 1] = "0";
      result[newLength - 2] = "2";
      result[newLength - 3] = "%";
      newLength = newLength - 3;
    } else {
      result[newLength - 1] = str[i];
      newLength--;
    }
  }
  return result.join("");
}

console.log(urilify("Hello, how are you?")); // Hello,%20how%20are%20you?