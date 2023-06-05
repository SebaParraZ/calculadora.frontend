function calculator(input) {
    var result = document.getElementById("result");
    
    if (input === "C") {
        result.value = "0";
    } else 
        if (input === "=") {
            result.value = eval(result.value);
    } else {
        if (result.value === "0") {
            result.value = input;
        } else {
            result.value += input;
        }
    }
    
}