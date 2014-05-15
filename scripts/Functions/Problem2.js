function reverseDigits() {
    
    var inputField = $('#hw6-prob2-input');
    var outputField = $('#hw6-prob2-result');
    var input = inputField.val();
    
    outputField.html('The reversed number is: ' + reverseString(input));
}

function reverseString(string) {

    var result = '';

    for (var i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }

    return result;
}