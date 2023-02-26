namespace MappedTypes {
  let numbers = [1, 5, 6, 8, 10];

  let stringNumbers = numbers.map((each) => each.toString());

  console.log(stringNumbers);

  type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekdays | 'Sat' | 'Sunday';

  // this tells typescript we want a new type that has a map of the keys from Weekdays.
  type NextDay = {
    [W in Weekdays]: Day;
  };

  // which forces this to have those Weekdays literals as properties in the NextDay Object.
  // if you remove one, you will get an error saying it is missing.
  let nextDay: NextDay = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
  };
}

namespace MappedTypesExample {
  type Artist = {
    id: number;
    name: string;
    bio: string;
  };

  // [Property in keyof Artist]? - map through the keyof Artist type. We are then saying they are all optional.
  // Artist[Property]; - there type is the correlating property type in Artist
  //  & { id: number }; - However of the property types, we want id to be set as required
  type MappedArtistForEdit = {
    [Property in keyof Artist]?: Artist[Property];
  } & { id: number };

  /* 
    This translates to
  
    MappedArtistForEdit = {
      id: number;
      name?: string;
      bio?: string;
    };

    But the mappedTypes are better as they are dynamic and we dont have to maintain two different types.  
  */

  const artist: Artist = {
    id: 1,
    name: 'Justin',
    bio: 'Hey, I am Justin',
  };

  const editedArtist: MappedArtistForEdit = {
    id: 1,
    bio: 'Hello, I am Justin',
  };
}