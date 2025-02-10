const temperatureConverter = {
    temperatureInCelsius : 0,
    read : function() { 
        this.temperatureInCelsius = parseFloat(prompt("Enter Temperature in Celsius"));
        if(isNaN(this.temperatureInCelsius)){
            alert("Please enter a valid Temperature!")
        }
    } ,
    toFahrenheit : function() { 
        return ((this.temperatureInCelsius * 9/5) + 32);
    } ,
    toKelvin : function() { 
        return this.temperatureInCelsius + 273.15;
    } ,
    display : function() { 
        if(!isNaN(this.temperatureInCelsius)){
            console.log(`Temperature entered in Celsius is ${this.temperatureInCelsius} C`);;
            console.log(`Temperature in Fahrenheit is ${this.toFahrenheit()} F`);
            console.log(`Temperature in Kelvin is ${this.toKelvin()} K`);
        }
        
    } ,
};
function handleTemperature(){
    temperatureConverter.read();
    temperatureConverter.display();        
}