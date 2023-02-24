namespace ComplexType {
  type LibraryType = 'national' | 'academic' | 'public';

  type LibraryBook = {
    title: string;
    pages: number;
    isbn: string;
  }

  // using the index signature allows us to have any number of additional properties
  // added to the member.
  type LibraryMember = {
    name: string;
    phone: string;
    [key: string]: string; // index signature
  }

  type Library = {
    name: string;
    address: string;
    numberOfBooks: number;
    type: LibraryType;
    books: LibraryBook[];
    genres: string[];
    members: LibraryMember[];
  }

  const library: Library = {
    name: 'New York State Library',
    address: '24 Some Stret, New York',
    numberOfBooks: 1254,
    type: 'national',
    books: [
      {
        title: 'Harry Potter',
        pages: 756,
        isbn: '9971-5-0210-0',
      },
      {
        title: 'Davinci Code',
        pages: 384,
        isbn: '9971-5-0210-0',
      },
    ],
    genres: ['fiction', 'history', 'computers', 'poetry'],
    members: [
      {
        name: 'John Doe',
        phone: '+123456789'
      },
      {
        name: 'John Doe',
        phone: '+123456789',
        email: 'optional@email.com'  // optional
      },

    ]
  }
}