namespace KeyOfOperator {
  type Events = {
    id: number;
    date: Date;
    type: 'indoor' | 'outdoor';
  };
  
  // -> "id" | "date" | "type"
  
  type unionOfKeysOfEvents = keyof Events;
  
  type Numeric = {
    [key: number]: string;
  };
  
  type NumericKeyOf = keyof Numeric;
  
  type NumberAndString = {
    [key: string]: string;
  };
  
  type NumberAndStringKeyoff = keyof NumberAndString;
}