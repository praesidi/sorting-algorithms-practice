function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const index = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, index));
  let arr2 = mergeSort(arr.slice(index));

  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  let result = [];
  let k = 0;
  let j = 0;

  while (k < arr1.length && j < arr2.length) {
    if (arr1[k] < arr2[j]) {
      result.push(arr1[k]);
      k++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (k < arr1.length) {
    result.push(arr1[k]);
    k++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
