function calculate(){
    console.log("hello world!");
    let principal = prompt("Enter principle amount: ");
    let rate = prompt("Enter annual interest rate: ");
    let time = prompt("Enter time in years: ");

    principal = parseFloat(principal);
    rate = parseFloat(rate);
    time = parseFloat(time);

    if(isNaN(principal) || isNaN(rate) || isNaN(time)){
        document.getElementById("res").innerHTML="<h2 style=color:red>Invalid input! Please enter numeric values.</h2>";
    }
    else{
        let simpleInterest = principal*rate*time/100;
        let amount = parseFloat(simpleInterest+principal);
        document.getElementById("res").innerHTML = "Simple Interest: " + simpleInterest + "<br> Total: " + amount;
    }
    
}