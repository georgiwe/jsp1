function checkFourthBit() {
    var inputField = document.getElementById('hw2-prob5-input');
    var inputAsInt = parseInt(inputField.value);

    if (checkNumericValues(inputAsInt) === false) {
        alert(defaultErrorMessage);
        inputField.value = '';
        inputField.focus();
        return;
    }

    // This depends on 0 evaluating as false and anything else - as true
    alert('The bit at position three is ' +
        ((inputAsInt & (1 << 3)) ? 'one.' : 'zero.'));
}