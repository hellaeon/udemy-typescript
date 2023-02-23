namespace TupleType {
  // firstName, lastName, age
  let personTuple: [string, string, number, string?];

  personTuple = ["John", "Doe", 18];

  // [
  //   NumberOfStudents: Number,
  //   passing: boolean,
  //   'John', 'Stella'
  // ]


  type listOfStudentsTuple = [number, boolean, ...string[]];

  const passingStudents: listOfStudentsTuple = [3, true, 'John', 'Stella', 'Mikeala'];
  const failingStudents: listOfStudentsTuple = [1, false, 'Mike'];

  // you can have read only tuples
  type ReadOnlyPerson = readonly [string, string, number];
  const readOnlyPerson: ReadOnlyPerson = ['Matt', 'Butt', 48];
  // readOnlyPerson[0] = 'yeah!'; // Cannot assign to '0' because it is a read-only property.
}