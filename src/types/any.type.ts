namespace AnyType {
  // default JS behaviour. 
  // You can keep reassigning any types. Use as a last resort.
  let firstName: any = "Mark";
  firstName = [];

  // this method would normally thow a TS error, in the TS config we can ignore this using the
  // 'noImplicitAny' to true. But do not do this, it will encourage lazy dev.
  // function multiByTwo(number) {
  //   return number * 2;
  // }
}