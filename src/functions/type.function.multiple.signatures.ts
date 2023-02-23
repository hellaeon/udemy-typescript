type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// two different signatures
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never; // if we dont get all the details we throw and error, so we never return
  (
    departureDate: Date, 
    departingFrom: string, 
    destination: string
  ): Reservation | never; // if we dont get all the details we throw and error, so we never return
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
