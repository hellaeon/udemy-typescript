namespace GenericMapFunction {
  const map = <T, U>(array: T[], func: (item: T) => U) => {

    // empty array?
    if (array.length === 0) {
      return array;
    }

    let result = [];

    // call the function on each item 
    for (let i = 0; i < array.length; i++) {
      result[i] = func(array[i]);
    }

    // return the final result
    return result;
  };

  let numbers = [...Array(10).keys()];

  const converted = map(numbers, (num) => num.toString());

  console.log(converted);
}