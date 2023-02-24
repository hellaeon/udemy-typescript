namespace IndexSignature {
  let a: number[] = [1, 2, 3];
  let b: Array<string> = ["a", "b", "c"];
  let c: (string | number)[] = ["a", "b", 1];

  type Aircraft = {
    flightNumber: string;
    airplaneModel: string;
    dateOfDeparture: string;
    timeOfDeparture: string;
    from: string;
    to: string;
    seats: {
      [key: string]: string;  // this is the index signature. Can only declare one.
    };
  };

  type Airplanes = Aircraft[];

  const airplanes: Airplanes = [
    {
      flightNumber: "SG102",
      airplaneModel: "A380",
      dateOfDeparture: "01/12/2022",
      timeOfDeparture: "23:30",
      from: "JFK",
      to: "DCA",
      seats: {
        "10A": "Mark Thomas", // which ensures we cannot do funny buggers here. Must be string: string
        "10B": "John Jacobs",
      },
    },
    {
      flightNumber: "SG102",
      airplaneModel: "A380",
      dateOfDeparture: "01/12/2022",
      timeOfDeparture: "23:30",
      from: "JFK",
      to: "DCA",
      seats: {
        "10A": "Mark Thomas",
        "10B": "John Jacobs",
      },
    },
  ];

}
