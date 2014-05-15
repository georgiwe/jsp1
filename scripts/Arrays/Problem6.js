function findMostFrequentElement() {
    
    var inputField,
        outputField,
        elementCounter,
        i = 0,
        j = 0,
        maxElement,
        maxElementCount = 1,
        arr;

    inputField = $('#hw5-prob6-input');

    arr = inputField.val().split(' ');

    elementCounter = [];

    for (i = 0; i < arr.length; i++) {
        if (elementCounter[arr[i]] === undefined) {
            elementCounter[arr[i]] = 1;
        } else {
            elementCounter[arr[i]]++;
        }
    }

    for (var element in elementCounter) {
        if (maxElementCount === 1 ||
                elementCounter[element] > maxElementCount) {
            maxElement = element;
            maxElementCount = elementCounter[element];
        }
    }

    outputField = $('#hw5-prob6-result');
    outputField.html('Max element: ' + maxElement + '<br />' +
        'Element occurances: ' + maxElementCount);
}