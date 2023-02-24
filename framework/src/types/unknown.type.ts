namespace UnknownType {
  // unknown is better than any. This is for values where you genuinely do not know the incoming type.
  // This might be for an incoming message or payload from an api. Use this if you dont know what the value
  // will be when you compile it, and you are going to check it during execution of the code.
  // typescript will still show this as an error (on the return statement)
  // function multiByTwo(number: unknown) {
  //   return number * 2;
  // }

  // It expects you to do the checking, so this will be fine:
  function multiByTwo(number: unknown) {
    if (typeof number === "number")
      return number * 2;

    return "Please provide a valid number";
  }

  console.log(multiByTwo(4));
  console.log(multiByTwo("matty"));
}