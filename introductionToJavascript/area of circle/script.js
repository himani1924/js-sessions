function calculateArea(){
    let radius = document.getElementById('radius').value;
    if(!radius){
        document.getElementById('result').innerHTML = '<p style=color:red>Please enter a radius!</p>';
        return;
    }
    if(radius <= 0){
        document.getElementById('result').innerHTML = '<p style=color:red>Radius must be greater than zero!</p>';
        return;
    }
    
    let area = Math.PI * Math.pow(radius, 2);
    document.getElementById('result').innerHTML = `Area: ${area}`;
}