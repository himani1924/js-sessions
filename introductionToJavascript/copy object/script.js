obj = {
    name: 'Neha',
    age: 19,
    address: {
        city: 'Sonipat',
        state: 'Haryana',
        country: 'India'
    }
}
console.log("original object");
console.log(obj);

// using spread operator
obj1 = {...obj}
console.log("object 1");
console.log(obj1);

// by using assign
obj2 = Object.assign({}, obj);
console.log("object 2");
console.log(obj2);

// deep copy
obj3 = JSON.parse(JSON.stringify(obj));
console.log("object 3");
console.log(obj3);