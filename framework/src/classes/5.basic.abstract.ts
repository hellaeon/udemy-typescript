namespace BasicAbstract {
  type Holidays = {
    date: Date;
    reason: string;
  }[];

  abstract class Department {
    protected abstract holidays: Holidays;

    // only accessible via the child classes, not via instantiation
    protected constructor(protected name: string) { }

    public addHolidays(holidays: Holidays) {
      if (Array.isArray(holidays)) {
        for (const holiday of holidays) {
          this.holidays.push(holiday)
        }
      }
    }

    public printHolidays() {
      if (this.holidays.length === 0) {
        return console.log("No holidays available");
      }
      console.log(
        `Here is the list of holidays`
      );
  
      this.holidays.forEach((holiday, index) => {
        console.log(
          `${index + 1}. ${holiday.reason}, ${holiday.date}`
        );
      });
    }
  }

  // the child classes must implement the holidays property
  class ItDepartment extends Department {
    protected holidays: Holidays = [];
    constructor() {
      super("IT Department");
    }
  }

  class AdminDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
      super("Admin Department");
    }
  }

  const itHolidays: Holidays = [
    {
      date: new Date(2022, 11, 1),
      reason: "IT Department Day",
    },
    {
      date: new Date(2022, 12, 25),
      reason: "Chistmas",
    },
  ];
  
  const adminHolidays: Holidays = [
    {
      date: new Date(2022, 10, 1),
      reason: "Admin Department Day",
    },
    {
      date: new Date(2022, 12, 25),
      reason: "Chistmas",
    },
  ];


  const itDepartment: ItDepartment = new ItDepartment();
  const adminDepartment: AdminDepartment = new AdminDepartment();
    
  itDepartment.addHolidays(itHolidays);
  adminDepartment.addHolidays(adminHolidays);
  
  itDepartment.printHolidays();
  adminDepartment.printHolidays();
  
  console.log(itDepartment);   
  /* 
    ItDepartment {name: 'IT Department', holidays: Array(2)}
    holidays: 
    {date: Thu Dec 01 2022 00:00:00 GMT+1100 (Australian Eastern Daylight Time), reason: 'IT Department Day'}
    {date: Wed Jan 25 2023 00:00:00 GMT+1100 (Australian Eastern Daylight Time), reason: 'Chistmas'}
    name: "IT Department"
  */
  console.log(adminDepartment);
  /* 
    AdminDepartment {name: 'Admin Department', holidays: Array(0)}
    holidays: 
    {date: Tue Nov 01 2022 00:00:00 GMT+1100 (Australian Eastern Daylight Time), reason: 'Admin Department Day'}
    {date: Wed Jan 25 2023 00:00:00 GMT+1100 (Australian Eastern Daylight Time), reason: 'Chistmas'}
    name: "Admin Department"
  */
}