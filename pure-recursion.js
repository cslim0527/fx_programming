function collectOddValues(arr) {
  const newArr = [];

  if (newArr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  return newArr.concat(collectOddValues(arr.slice(1)));
}

collectOddValues([1, 2, 3, 4, 5]);
