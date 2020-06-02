class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
    }	
    
    getFullName() {
		return `${this.name} ${this.surname}`;
	}
}

class Student extends User{
    constructor(name, surname, year ) {
        super(name, surname);
        this.year = year;
      }

      getCourse(){
        var today = new Date();
        var todayYear = today.getFullYear();
        return todayYear - this.year;
      }
}

var student = new Student('Иван', 'Иванов', 2017);
console.log(student.name); 
console.log(student.getFullName()); 
console.log(student.getCourse()); 