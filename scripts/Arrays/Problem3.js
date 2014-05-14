function findLongestSequenceOfEqualelements() {
    var maxLengthElement,
        outputField,
        currLength,
        maxLength,
        input,
        arr,
        i;

    input = $('#hw5-prob3-input').val();
    arr = input.split(' ');

    maxLengthElement = arr[0];
    maxLength = 1;

    for (i = 0; i < arr.length; i++) {
        currLength = 1;

        while (arr[i] === arr[i + 1]) {
            currLength++;
            i++;
        }

        if (currLength > maxLength) {
            maxLength = currLength;
            maxLengthElement = arr[i];
        }
    }

    outputField = $('#hw5-prob3-result');
    outputField.html('Longest streak: ' + maxLength + '<br />' +
        'Symbol: ' + maxLengthElement);
}