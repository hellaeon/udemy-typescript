namespace ArrayType {
  // syntax differences has no performance benefit. Use either.

  let numArray: number[] = [1, 2, 3];

  let stringArray: Array<string> = ['one', 'two', 'three'];

  // union array, but you dont need to explicitly declare the union type
  let unionArray: (string | number)[] = ['a', 'b', 1, 2];

  // you can use readonly to ensure the array values wont change
  let numReadOnlyArray: readonly number[] = [1, 2, 3];
  // numReadOnlyArray.push(4); // Property 'push' does not exist on type 'readonly number[]'
}
