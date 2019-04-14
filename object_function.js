var kim = {
    name:'kim',
    first:10,
    second:20
}

var lee = {
    name:'lee',
    first:10,
    second:10
}

function sum (prefix) {
    return prefix + (this.first + this.second);
}

console.log("sum.call(kim)", sum.call(kim, 10));
console.log("sum.call(lee)", sum.call(lee, 20));

var kimSum = sum.bind(kim, 30);
console.log('kimSum()', kimSum());