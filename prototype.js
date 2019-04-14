function Person (name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;    
}

// memory save
Person.prototype.sum = function () {
    return "prototype : " + (this.first + this.second + this.third);
}

// constructor(앞에 new가 붙으면 생성자 함수가 됨.) 생성자의 필요성 : 초기화
var kim = new Person('kim', 10, 20, 30);
kim.sum = function () {
    return "modified";
}
var lee = new Person('lee', 10, 10, 10);
//lee.sum = function () {
//    return "modified";
//}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
