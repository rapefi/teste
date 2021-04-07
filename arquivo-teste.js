class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  
  console.log(myCar.age())

  const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(json.count)
console.log(obj.count)

var json2 = JSON.stringify(obj)
console.clear();
console.log(json2)