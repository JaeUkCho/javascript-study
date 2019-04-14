class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return this.first + this.second;
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function () {
    return "modified";
}
console.log('kim', kim.sum());

var lee = new Person('lee', 10, 30);
console.log('lee', lee.sum());