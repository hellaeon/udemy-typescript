namespace ConditionalTypes {
  interface Animal {
    live: () => void;
  }
  
  interface Dog extends Animal {
    woof: () => void;
  }
  
  // conditional types just check to see if one type extends another.
  type Example = Dog extends Animal ? string : number;
  
  // SomeType extends OtherType ? TrueType : FalseType;
  type isString<T> = T extends string ? true : false;
  
  type A = isString<string>;
  type B = isString<number>;
}