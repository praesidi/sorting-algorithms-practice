// 1st implementation where first element is a pivot

function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
