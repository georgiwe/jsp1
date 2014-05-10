function calcRectangleArea() {
    var widthInputField = document.getElementById('hw2-prob3-input-width');
    var heightInputField = document.getElementById('hw2-prob3-input-height');

    var height = parseFloat(heightInputField.value);
    var width = parseFloat(widthInputField.value);

    if (checkNumericValues([height, width]) === false) {
        alert('Invalid width and/or height!');
        widthInputField.value = '';
        heightInputField.value = '';
        widthInputField.focus();
        return;
    }

    if (height <= 0 ||
            width <= 0) {
        alert('Height and width must both be postitive.');
        return;
    }

    alert('Rectangle area is ' + height * width + '.');
}