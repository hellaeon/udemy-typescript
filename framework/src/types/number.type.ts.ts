namespace NumberType {
  // number easy - true or false.
  let numberValue: number = 100;

  // expression
  numberValue = (75 * 3.5) + 52;
  numberValue = 0.1645236253;
  numberValue = parseInt('12');

  // wont work:
  // numberValue = {};
  // numberValue = "string wont work";

  // null and undefined are not considered numbers  by typescript
  // numberValue = null;
  // numberValue = undefined;
}