// // Q1. Create a hierarchy of person, employee and developers. 
function q1(){
    event.preventDefault()
    document.getElementById("output").innerHTML=`<b>Q1. Create a hierarchy of person, employee and developers.</b>
Open console for output.`
    const person = {
        name: 'Neha',
        age: 19,
        gender: 'Female',
        func : function (){
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
    }
    const employee = Object.create(person);
    employee.jobtitle = "SDE"
    employee.func = function (){
        console.log(`My name is ${this.name} and my age is ${this.age} and I am ${this.jobtitle}`);
    }

    const developer = Object.create(employee);
    developer.salary = 40000
    developer.func = function (){
        console.log(`My name is ${this.name} and my age is ${this.age}, I am ${this.jobtitle} and my salary is ${this.salary}`);
    }
    developer.func();
}


// // Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
function q2(){
    event.preventDefault()
    document.getElementById("output").innerHTML=`<b>Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.</b>
Open console for output.`
    const arr = [1, 2, 3, 4, 5];
    let count = 0;

    const intervalId = setInterval(() => {
      if (count < arr.length) {
        console.log(arr[count]); 
        count++;
      } else {
        clearInterval(intervalId); 
      }
    }, 3000);
}


// Q3. Explain difference between Bind and Call (example).
function q3(){
    event.preventDefault()
    document.getElementById("output").innerHTML=`<b>Q3. Explain difference between Bind and Call (example).</b>
By using call we can borrow a function from one obj and call it with a different this. 
<pre style="background-color:antiquewhite">Example:
const person1 = {
    name : 'Sneha',
    greet: function(){
        console.log('Hey, '+this.name);
    }
}
const person2 = {
    name : 'Neha'
}
person1.greet.call(person2); 
</pre>
bind() permanently binds this to the object provided, the return value will be a copy of the same function with a specific this value.
<pre style="background-color:antiquewhite">Example:
const person1 = {
    name : 'Sneha',
    greet: function(){
        console.log('Hey, '+this.name);
    }
}
const person2 = {
    name : 'Neha'
}
const greetPerson2 = person1.greet.bind(person2); 
greetPerson2()
</pre>
Unlike call() it doesn't immediately invoke the function`
}


// Q4. Explain 3 properties of argument object.
function q4(){
event.preventDefault()
    document.getElementById("output").innerHTML=`<b>Q4. Explain 3 properties of argument object.</b>
arguments is an array like object accessible inside functions that contains the values of the arguments passed to that function
the arguments is a local variable available to all non-arrow functions.
<p style="background-color:beige; text-align:center">PROPERTIES</p> 
1. length: It returns the number of arguments passed to the function.
2. assigning to indices: Each argument index can be set or reassigned
3. converting to array: arguments is array like object, but it doesn't have Array's built in methods. However, it can be converted to array.
<span style="background-color:antiquewhite">function func(...args){}</span>
`
}

// Q5. Create a function which returns number of invocations and number of instances of a function.
function q5(){
    event.preventDefault()
    document.getElementById("output").innerHTML=`<b>Q5. Create a function which returns number of invocations and number of instances of a function.</b>
Open console for output.
Code part:
<pre style="background-color:antiquewhite">
var invocationCount = 0;
    var instanceCount = 0;
    function mobile(name, year){
        this.name = name;
        this.year = year;
        invocationCount++;
        if(this != globalThis || new.target){
            instanceCount++;
        }
    }
    nokia = new mobile('nokia', 1990)
    mobile();
    nokia = new mobile('nokia', 1990)
    mobile();
    mobile();
    console.log(invocationCount);
    console.log(instanceCount);
</pre>`
    var invocationCount = 0;
    var instanceCount = 0;
    function mobile(name, year){
        this.name = name;
        this.year = year;
        invocationCount++;
        if(this != globalThis || new.target){
            instanceCount++;
        }
    }
    nokia = new mobile('nokia', 1990)
    mobile();
    nokia = new mobile('nokia', 1990)
    mobile();
    mobile();
    console.log(invocationCount);
    console.log(instanceCount);
}

// Q6. Create a counter using closures
function timer(){
    let count = 0;
    let timeInterval = null;
    function play(){
        if(timeInterval) return;
        timeInterval = setInterval(()=>{
            count++
            document.getElementById('stopwatch').innerText = count
        },1000)
    }
    function pause(){
        clearInterval(timeInterval)
        timeInterval = null;
    }
    function reset(){
        clearInterval(timeInterval)
        timeInterval = null
        count=0
        document.getElementById('stopwatch').innerText = count
    }
    return{play, pause, reset}
}
const timer1 = timer();

// Q7. Explain 5 array methods with example.
function q7(){
    event.preventDefault()
    document.getElementById("output").innerHTML=`<b>Q7. Explain 5 array methods with example.</b><br>
Consider the array arr = [1, 5, 3, 2, 4]
1. <b>forEach()</b> - It executes a provided function once for each array element.
<div style="background-color:antiquewhite;">arr.forEach(num=> console.log(num*2))</div>
Output: <span style="background-color:beige">2 10 6 4 8</span>
<br>2. <b>map() </b>- Creates a new array with the results of calling a provided function on every element in the calling array.
<div style="background-color:antiquewhite;">const doubled = arr.map(num=>num*2)<br>console.log(doubled)</div>
Output: <span style="background-color:beige">[2, 10, 6, 4, 8]</span>
<br>3. <b>filter()</b> - Creates a new array with all elements that pass the test implemented by the provided function.
<div style="background-color:antiquewhite;">const newArray = arr.filter(num=>num<3)<br>console.log(newArray)</div>
Output: <span style="background-color:beige">[1,2]</span>
<br>4. <b>reduce()</b> - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
<div style="background-color:antiquewhite;">const sum = arr.reduce((acc, num) => acc + num, 0)<br>console.log(sum)</div>
Output: <span style="background-color:beige">15</span>
<br>5.<b> sort()</b> - Sorts the elements of an array in place and returns the array. The sort is not necessarily stable, meaning that equal elements can have their relative order changed after sorting.
<div style="background-color:antiquewhite;">arr.sort()<br>console.log(arr)</div>
Output: <span style="background-color:beige">[1, 2, 3, 4, 5]</span>
`
}
