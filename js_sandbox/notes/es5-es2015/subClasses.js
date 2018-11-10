class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello there ${firstName} ${lastName}`;
  }
}

// subClass of person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    //super() calls parent class constructor
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
    static getMembershipCost() {
      return 500;
    }
  }
}

const john = new Customer("John", "Smith", "818-818-8118", "standard");
console.log(john); // returns Customer object w proto as Person

console.log(john.greeting()); // greeting func is not in Customer but able to use anything in Person b/c extended
console.log(Customer.getMembershipCost()); // static method = use actual class name
