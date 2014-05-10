function answerTheQuestion() {
    var xField = document.getElementById('hw2-prob9-input-x');
    var yField = document.getElementById('hw2-prob9-input-y');

    var x = parseFloat(xField.value);
    var y = parseFloat(yField.value);

    if (checkNumericValues([x, y]) === false) {
        alert(defaultErrorMessage);
        xField.value = '';
        yField.value = '';
        xField.focus();
        return;
    }

    var isInsideCircle =
        (1 + x) * (1 + x) + (1 + y) * (1 + y) < 3;

    var isInsideRectangle =
        (y > -1 && y < 1) &&
        (x > -1 && x < 5);

    if (isInsideCircle === true &&
            isInsideRectangle === false) {
        alert('The condition is met.');
    } else {
        alert('The condition is not met.');
    }
}