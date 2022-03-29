// function minIndex(arr: number[], index: number): number {
//   let min = arr[index + 1];
//   let minIndex = index + 1;
//   for (let i = index + 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//   }
//   return minIndex;
// }

// function swap<T>(arr: T[], firstIndex: number, secondIndex: number): T[] {
//   let temp = arr[firstIndex];
//   arr[firstIndex] = arr[secondIndex];
//   arr[secondIndex] = temp;
//   return arr;
// }

// function selectionSort(arr: number[]): number[] {
//   for (let i = 0; i < arr.length; i++) {
//     let minI = minIndex(arr, i);
//     if (arr[i] > arr[minI]) {
//       arr = swap<number>(arr, i, minI);
//     }
//   }
//   return arr;
// }

// console.log(selectionSort([1, 2, 5, -2, 4, 0, -1, 55]));