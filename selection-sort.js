function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let currentIndex = i;

    for (let j = i + 1; j < arr.length - 1; j++) {
      currentIndex = j;
      if (arr[currentIndex] < arr[minIndex]) {
        minIndex = currentIndex;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
