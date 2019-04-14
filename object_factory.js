function Person (name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second + this.third;
    }
}

// constructor(앞에 new가 붙으면 생성자 함수가 됨.) 생성자의 필요성 : 초기화
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// constructor example
var d1 = new Date('2019-4-14');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());


console.log('Date', Date);
