namespace DiscriminatedUnions {
  let firstName = 'Mark';

  console.log(typeof firstName);

  type Cat = {
    type: 'cat';
    purrs: boolean;
  };

  type Dog = {
    type: 'dog';
    barks: boolean;
  };

  type Animal = Cat | Dog;

  let cat: Animal = {
    // even though we have a union Animal and only set purrs
    // typescript knows it belongs specifically to type cat.
    // type: 'dog' will throw an error
    type: 'cat',
    purrs: true,
  };

  let dog: Animal = {
    // same here - type: 'cat' will throw an error
    type: 'dog',
    barks: true,
  };

  // this allows us to do stuff such as this:
  function animalReaction(animal: Animal) {
    switch (animal.type) {
      case 'cat':
        console.log('The animal is a cat and it purrs');
        break;
      case 'dog':
        console.log('The Animal is a dog and it barks');
        break;
    }
  }

  animalReaction(dog);
  animalReaction(cat);
}