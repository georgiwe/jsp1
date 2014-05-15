function sortAndPerformBinarySearch() {

    var elementInputField,
        arrayToSearchInputField,
        outputField,
        arrToSearch,
        elementToSearchFor,
        i = 0,
        resultIndex;

    elementInputField = $('#hw5-prob7-input-element');
    arrayToSearchInputField = $('#hw5-prob7-input-array');

    elementToSearchFor = parseInt(elementInputField.val());
    arrToSearch = arrayToSearchInputField.val().split(' ');

    for (i = 0; i < arrToSearch.length; i++) {
        arrToSearch[i] = parseInt(arrToSearch[i]);
    }

    arrToSearch = performSelectionSort(arrToSearch);
    resultIndex = binarySearch(arrToSearch, elementToSearchFor);

    outputField = $('#hw5-prob7-result');
    outputField.html('The sorted array is:' + '<br />' + arrToSearch.join(', ') + '.<br />');

    if (resultIndex != -1) {
        outputField.append('Element found at index "' + resultIndex + '".' + 
            '<br />' + 'There may also be other occurances.');
    } else {
        outputField.append('Element was not found in the array.');
    }
}

function binarySearch(arr, searchFor) {
    
    var leftIndex = 0;
    var rightIndex = arr.length - 1;
    var indexToCheck;

    if (searchFor < arr[leftIndex] ||
            searchFor > arr[rightIndex]) {
        return -1;
    }

    while (leftIndex <= rightIndex) {

        indexToCheck = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[indexToCheck] < searchFor) {
            leftIndex = indexToCheck + 1;
        } else if (arr[indexToCheck] > searchFor) {
            rightIndex = indexToCheck - 1;
        } else {
            return indexToCheck;
        }
    }

    return -1;
}