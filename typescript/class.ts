class Person {
  //fields/properties
  public firstName: string;
  lastName: string;
  isGraduted: boolean;
  contactNumber: number;

  //Default Constructor Method
  constructor(fn: string, ln: string, isGraduted: boolean, contact: number) {
    this.firstName = fn;
    this.lastName = ln;
    this.isGraduted = isGraduted;
    this.contactNumber = contact;
  }

  //User Defined Method
  getdata() {
    return `${this.firstName}  ${this.lastName}`;
  }
}

let personObject = new Person('mahesh', 'bodhgire', true, 9875675654);

let perosnContact = personObject.contactNumber;
console.log(perosnContact);

let fullname = personObject.getdata();
console.log(fullname);
