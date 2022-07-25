function addtion(num1, num2) {
    var result = num1 + num2;
    return result;
}

function subtraction(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiplication(num1, num2) {
    var result = num1 * num2;
    return result;
}

function division(num1, num2) {
    var result = num1 / num2;
    return result;
}

function modulus(num1, num2) {
    var result = num1 % num2;
    return result;
}


document.write("Addtion: " + addtion(5, 5) + "<br/>");
document.write("Subtraction: " + subtraction(10, 5) + "<br/>");
document.write("Multiplication: " + multiplication(5, 5) + "<br/>");
document.write("Division: " + division(50, 5) + "<br/>");
document.write("Modulus: " + modulus(5, 3));