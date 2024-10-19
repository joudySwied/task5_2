function convertUnits() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (inputValue < 0 ) {
        result = "Error ";
    }
else {
    if (fromUnit === toUnit) {
        result = inputValue;
    } 
    else if (fromUnit === "mm" && toUnit === "cm") {
        result = inputValue / 10;
    } 
    else if (fromUnit === "mm" && toUnit === "meters") {
        result = inputValue / 1000;
    } 
    else if (fromUnit === "mm" && toUnit === "kilometers") {
        result = inputValue / 1000000;
    } 
    else if (fromUnit === "cm" && toUnit === "mm") {
        result = inputValue * 10 ;
    } 
    else if (fromUnit === "cm" && toUnit === "meters") {
        result = inputValue / 100 ;
    } 
    else if (fromUnit === "cm" && toUnit === "kilometers") {
        result = inputValue / 100000 ;
    } 
    else if (fromUnit === "meters" && toUnit === "kilometers") {
        result = inputValue / 1000;
    } 
    else if (fromUnit === "meters" && toUnit === "cm") {
        result = inputValue * 100;
    } 
    else if (fromUnit === "meters" && toUnit === "mm") {
        result = inputValue * 1000;
    } 
    else if (fromUnit === "kilometers" && toUnit === "meters") {
        result = inputValue * 1000;
    } 
    else if (fromUnit === "kilometers" && toUnit === "cm") {
        result = inputValue * 100000;
    } 
    else if (fromUnit === "kilometers" && toUnit === "mm") {
        result = inputValue * 1000000;
    } 
    else if (fromUnit === "grams" && toUnit === "kilograms") {
        result = inputValue / 1000;
    } 
    else if (fromUnit === "kilograms" && toUnit === "grams") {
        result = inputValue * 1000;
    } 
    else if (fromUnit === "h" && toUnit === "min") {
        result = inputValue * 60;
    } 
    else if (fromUnit === "h" && toUnit === "second") {
        result = inputValue * 3600;
    } 
    else if (fromUnit === "min" && toUnit === "second") {
        result = inputValue * 60;
    } 
    else if (fromUnit === "min" && toUnit === "h") {
        result = inputValue / 60;
    } 
    else if (fromUnit === "second" && toUnit === "min") {
        result = inputValue / 60;
    } 
    else if (fromUnit === "second" && toUnit === "h") {
        result = inputValue / 3600;
    } 
    else if (fromUnit === "km/h" && toUnit === "m/s") {
        result = inputValue * 1000;
        result = result / 3600;
    } 
    else if (fromUnit === "m/s" && toUnit === "km/h") {
        result = inputValue / 1000;
        result = result * 3600;
    } 
    else if (fromUnit === "watt" && toUnit === "hp") {
        result = inputValue / 735;
    
    } 
    else if (fromUnit === "hp" && toUnit === "watt") {
        result = inputValue * 735;
    } 

    else {
        result = "Error ";
    }
}
    
    document.getElementById("resultDisplay").textContent = `result is: ${result}`;
}