function findFirstBiggerThanNeighbours() {

    var i;
    var inputField = $('#hw6-prob7-input');
    var outputField = $('#hw6-prob7-result');
    var arr = inputField.val().split(' ');

    for (i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
    }

    for (i = 0; i < arr.length; i++) {
        if (checkElementAtPosition(arr, i) === true) {
            outputField.html('Such an element was found at index "' + i + '".');
            return i;
        }
    }

    outputField.html('Such an element was not found.');
    return -1;
}