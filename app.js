const sum = (a, b) => a + b;
const PI = 3.142;
class SomeTopClass {
    sayHi() {
        console.log("Hello");
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeTopClass = SomeTopClass;

module.exports = {
    sum: sum,
    PI: PI,
    SomeTopClass: SomeTopClass
}