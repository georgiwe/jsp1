function divisableBy7and5() {
    var inputField = document.getElementById('hw2-prob2-input');
    var inputNum = parseFloat(inputField.value);

    if (isNaN(inputNum) ||
            inputNum === null) {
        alert(defaultErrorMessage);
        inputField.value = '';
        inputField.focus();
        return;
    }

    var isDivisable = inputNum % 35 === 0;

    alert('The number ' +
        inputNum +
        ' is ' +
        ((isDivisable) ? '' : 'not ') +
        'divisable by 7 and 5 at the same time.');
}