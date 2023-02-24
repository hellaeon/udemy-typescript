namespace IntersectionType {
  type AnotherDog = {
    name: string;
    barks: boolean;
    colour: string;
    wagsTail: boolean;
  };

  type AnotherCat = {
    name: string;
    purrs: boolean;
    colour: string;
  };

  // an intersection means the resulting object will contain the common 
  // and unique properties from the intersected objects 
  type DogAndCatIntersection = AnotherDog & AnotherCat;

  // dog...
  let hybrid: DogAndCatIntersection = {
    name: 'woofa',
    barks: true,
    purrs: false,
    colour: '#000',
    wagsTail: true,
  }
}
