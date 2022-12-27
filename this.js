firstName = 'zhang'
lastName = 'san'
function fullName(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  console.log(firstName, lastName)
  return this.firstName + this.lastName
}

// console.log(window.firstName,window.lastName)
let obj = {
  age: 26,
  firstName: 'chen',
  lastName: 'chen',
  getFullName: () => {
    console.log(1,this)
    console.log(2,this.firstName, this.lastName)
    console.log(3,'fullName:', fullName(this.firstName, this.lastName))

    console.log(4,'firstName:', obj.getFirstName(), 'lastName:', obj.getLastName())

    var firstName = 'test'
    var lastName = 'hello'

    function testThis() {
      console.log(5,'this',this)
      console.log(6,'------', this.firstName, this.lastName)
    }
    testThis()
    setTimeout(() => {
      testThis()
      console.log(7,'--this--',this)
      console.log(8,this.firstName, this.lastName)
    }, 500)
  },
  getFirstName: function () {
    console.log(9,'getFirstName',this)
    setTimeout(() => {
      console.log(10,'-----this-----',this)
      console.log(11,'||------||',this.firstName, this.lastName)
    }, 500)
    return this.firstName
  },
  getLastName() {
    return this.lastName
  },
  getFull() {
    return this.getFirstName() + this.getLastName()
  }
}
let a = obj.getFullName
a()

let b = obj.getFull()
console.log(b)
