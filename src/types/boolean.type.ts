namespace BooleanType {

  // boolean easy - true or false.
  let booleanValue: boolean = true;

  // literal
  booleanValue = false;

  // expression
  booleanValue = typeof "abc" === "string";
  booleanValue = 1 > 0;

  // wont work:
  // booleanValue = {};
  // booleanValue = "string wont work";

  // null and undefined are not considered booleans by typescript
  // booleanValue = null;
  // booleanValue = undefined;
}