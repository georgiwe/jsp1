function getTrapezoidArea() {
    var aSideField = document.getElementById('hw2-prob8-input-a');
    var bSideField = document.getElementById('hw2-prob8-input-b');
    var heightField = document.getElementById('hw2-prob8-input-height');

    var aSide = parseFloat(aSideField.value);
    var bSide = parseFloat(bSideField.value);
    var height = parseFloat(heightField.value);

    if (checkNumericValues([aSide, bSide, height]) === false) {
        alert(defaultErrorMessage);
        aSideField.value = '';
        bSideField.value = '';
        heightField.value = '';
        aSideField.focus();
        return;
    }

    if (aSide <= 0 ||
            bSide <= 0 ||
            height <= 0) {
        alert('All values must be positive.');
        return;
    }

    alert('The area of the trapezoid is ' + 
        (aSide + bSide) * height / 2);
}