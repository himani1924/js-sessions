let calculator = {
    number1 : null,
    number2 : null,
    result : null,
    read : function(){
        
        console.log(document.getElementById("input"))
        document.getElementById("input").innerHTML = "Enter data"
        this.result = null
        // this.number1 = parseFloat(prompt("Enter 1st number: "));
        // this.number2 = parseFloat(prompt("Enter 2nd number: "));

        this.number1 = 10
        this.number2 = 20
        
        console.log(this);
        
        if(isNaN(this.number1) || isNaN(this.number2)){
            document.getElementById("input").innerHTML = "<p style=color:red;font-size:1.5em;>Invalid input! Please enter numeric values.</p>";
            return;
        }
        setTimeout(function(){
            document.getElementById("input").innerHTML = `You entered : ${this.number1} and ${this.number2}`;
            console.log("inside setTimeout"+this);
        }, 3000);
        // setTimeout(()=>{
        //     document.getElementById("input").innerHTML = `You entered : ${this.number1} and ${this.number2}`;
        //     console.log("inside setTimeout"+this);
        // }, 3000);
        // setTimeout(function(){
        //     document.getElementById("input").innerHTML = `You entered : ${this.number1} and ${this.number2}`;
        //     console.log("inside setTimeout"+this);
        // }.bind(this), 3000);
    },
    add : function(){
        this.result = this.number1 + this.number2;
        display(this.result);
    },
    subtract : function(){
        this.result = this.number1 - this.number2;
        display(this.result);
    },
    multiply : function(){
        this.result = this.number1 * this.number2;
        display(this.result);
    }
}
function display(res){
    if (res != null) {
        document.getElementById("output").innerHTML = `The output is : ${res}`;
}
}



