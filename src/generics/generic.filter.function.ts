namespace GenericsNoTypeSafety
{
  // No type safety, but basic JS implementation
  function filter(array: any[], predicate: Function) {
    let result = [];

    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      if(predicate(item))
        result.push(item);
    }

    return result;
  }

  // try with numbers
  let numbers = [1,2,3,4,5,6,7,8,9,10,15,20];

  function greaterThanSeven(item: number) { 
    return item > 7; 
  }

  console.log(filter(numbers, greaterThanSeven));

  // try with strings
  let animals = ["cat", "dog", "rat", "bird", "lizard"];

  function filterCats(item: string) {
    return item === "cat";
  }

  console.log(filter(animals, filterCats));

  // seems good right?
  // but then I can simply do this:
  function filterCatsAgain(item: string) {
    return "cat";
  }

  // not the desired result
  // (5) ['cat', 'dog', 'rat', 'bird', 'lizard']
  console.log(filter(animals, filterCatsAgain));

  // Typescript wont complain because we are saying we can pass any value into
  // our filter function.
}

namespace GenericsTypescriptStyle
{
  // function overloading?
  // will get ugly and bloated quickly
  // type Filter = {
  //   (array: number[], predicate: (item: number) => boolean): number[];
  //   (array: string[], predicate: (item: string) => boolean): string[];
  //   (array: object[], predicate: (item: object) => boolean): object[];
  // }

  // There is a better solution, how about some generics?
  // You dont have to use T, but the standard is to start from T
  type Filter = {
    <T>(array: T[], predicate: (item: T) => boolean): T[];
  }

  const filter: Filter = (array, predicate)  => {
    let result = [];

    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      if(predicate(item))
        result.push(item);
    }

    return result;
  }

  // try with numbers
  let numbers = [1,2,3,4,5,6,7,8,9,10,15,20];

  function greaterThanSeven(item: number) { 
    return item > 7; 
  }

  console.log(filter(numbers, greaterThanSeven));

  // try with strings
  let animals = ["cat", "dog", "rat", "bird", "lizard"];

  function filterCats(item: string) {
    return item === "cat";
  }

  console.log(filter(animals, filterCats));

  // you can write this method, but now our filter function wont accept it
  function filterCatsAgain(item: string) {
    return "cat";
  }

  // Argument of type '(item: string) => string' is not assignable to parameter of type '(item: string) => boolean'.
  // Type 'string' is not assignable to type 'boolean'.ts(2345)
  // console.log(filter(animals, filterCatsAgain));
}