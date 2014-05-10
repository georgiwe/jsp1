function isPointWithinCircle() {
    var fieldX = document.getElementById('hw2-prob6-input-x');
    var fieldY = document.getElementById('hw2-prob6-input-y');

    var xValue = parseFloat(fieldX.value);
    var yValue = parseFloat(fieldY.value);

    if (checkNumericValues([xValue, yValue]) === false) {
        alert(defaultErrorMessage);
        fieldX.value = '';
        fieldY.value = '';
        fieldX.focus();
    }

    // Connecting the point to the Ox axis and the beginning
    // of the coordinate system forms a triangle with a right angle.
    // This means that the point's X coordinate is one of the sides of the
    // triangle and the point's Y coordinate is the other. Then,
    // according to the theorem of Pythagoras, the distance between the
    // point and the beginning of the coordinate system is the hypotenuse
    // of that triangle, which is equal to a^2 + b^2. If that is less than 5
    // the point is inside. If it's equal to 5, it means its on the circle.

    var result = 5 > Math.sqrt(xValue * xValue + yValue * yValue);

    alert('The point is ' +
        ((result) ? 'inside' : 'outside, or on') +
        ' the circle.');
}