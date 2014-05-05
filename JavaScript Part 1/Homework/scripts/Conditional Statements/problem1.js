function checkAndExchangeValues() {
    var inputFieldV1 = document.getElementById('hw3-prob1-input-v1');
    var inputFieldV2 = document.getElementById('hw3-prob1-input-v2');

    var value1 = parseInt(inputFieldV1.value);
    var value2 = parseInt(inputFieldV2.value);

    if (checkNumericValues([value1, value2]) === false) {
        alert('Invalid value(s)!');
    }

    if (value1 > value2) {
        var placeholder = value2;
        value2 = value1;
        value1 = placeholder;

        inputFieldV1.value = value1;
        inputFieldV2.value = value2;

        updateValueDisplay();

        inputFieldV1.value = '';
        inputFieldV2.value = '';

        alert('The values have been switched!');
    }
}

function updateValueDisplay() {
    var displayForV1 = document.getElementById('disp-v1');
    var displayForV2 = document.getElementById('disp-v2');

    var value1 = document.getElementById('hw3-prob1-input-v1').value;
    var value2 = document.getElementById('hw3-prob1-input-v2').value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    if (isNaN(value1)) {
        displayForV1.textContent = '';
    } else {
        displayForV1.textContent = value1;
    }

    if (isNaN(value2)) {
        displayForV2.textContent = '';
    } else {
        displayForV2.textContent = value2;
    }
}