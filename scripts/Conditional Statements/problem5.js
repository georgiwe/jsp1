function nameDigit() {
    var digit = parseInt(document.getElementById('hw3-prob5-input-digit').value);

    var resultField = document.getElementById('hw3-prob5-result');
    var output;

    output = getDigitName(digit);

    if (output != -1) {
        resultField.textContent = output + '.';
    } else {
        alert('Invalid input!');
        resultField.textContent = '';
    }
}

function getDigitName(digit) {

    var output;

    switch (digit) {
        case 0: output = 'Zero'; break;
        case 1: output = 'One'; break;
        case 2: output = 'Two'; break;
        case 3: output = 'Three'; break;
        case 4: output = 'Four'; break;
        case 5: output = 'Five'; break;
        case 6: output = 'Six'; break;
        case 7: output = 'Seven'; break;
        case 8: output = 'Eight'; break;
        case 9: output = 'Nine'; break;

        default: return -1;
    }

    return output;
}