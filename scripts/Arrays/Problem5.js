function performSelectionSort(customArray) {
    var inputField,
        outputField,
        inputArr,
        sortedArr,
        i = 0,
        minElement,
        minElementIndex;

    inputField = $('#hw5-prob5-input');

    inputArr = inputField.val().split(' ');

    if (customArray !== undefined) {
        inputArr = customArray;
    }

    sortedArr = [];

    while (inputArr.length > 0) {
        minElement = inputArr[0];
        minElementIndex = 0;
        for (i = 0; i < inputArr.length; i++) {
            if (inputArr[i] < minElement) {
                minElement = inputArr[i];
                minElementIndex = i;
            }
        }

        sortedArr.push(inputArr.splice(minElementIndex, 1)[0]);
    }

    outputField = $('#hw5-prob5-result');
    outputField.html(sortedArr.join(', '));

    if (customArray !== undefined) {
        return sortedArr;
    }
}