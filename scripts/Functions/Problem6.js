function checkElementAtPosition(inputArr, inputPos) {

    var onlyInputArrayIsPassed =
        (inputArr !== undefined) && (inputPos === undefined);
    var onlyInputIndexIsPassed =
        (inputPos !== undefined) && (inputArr === undefined);

    if (onlyInputArrayIsPassed ||
            onlyInputIndexIsPassed) {
        throw new Error('Must pass exactly two or zero parameters.');
        return;
    }

    var i;
    var arrayInputFild = $('#hw6-prob6-input-arr');
    var positionInputFild = $('#hw6-prob6-input-pos');
    var outputField = $('#hw6-prob6-result');

    var tryPosition;
    var arr;

    if (inputArr === undefined) {
        arr = arrayInputFild.val().split(' ');

        for (i = 0; i < arr.length; i++) {
            arr[i] = parseFloat(arr[i]);
        }

        tryPosition = parseInt(positionInputFild.val());
    } else {
        arr = inputArr;
        tryPosition = inputPos;
    }

    if (tryPosition <= 0 ||
            tryPosition >= arr.length - 1) {
        outputField.html('Element at position ' + tryPosition + 
            ' has less than two neighbours.');
        return;
    }

    result = arr[tryPosition] > arr[tryPosition - 1] &&
        arr[tryPosition] > arr[tryPosition + 1];

    if (inputArr !== undefined) {
        return result;
    } else {
        result = result ? ' is ' : ' is not ';

        outputField.html('The element at position "' + tryPosition + '"' +
            result + 'bigger than its neighbours.');
    }
}