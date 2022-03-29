function swap(arr: number[], firstIndex: number, secondIndex: number): number[] {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
  return arr;
}

function bubbleSort(arr: number[]): number[] {
  let isSorted = true;
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 2; j++) {
      if (arr[j] > arr[j+1]) {
        isSorted = false;
        arr = swap(arr, j, j+1);
      }
    }
    console.log("Test Step");
    if (isSorted) {
      return arr;
    }
  }
  return arr;
}