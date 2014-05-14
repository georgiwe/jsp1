function findLongestIncreasingSequence() {

    var outputField,
        inputField,
        currLength,
        maxLength,
        currSeq,
        maxSeq,
        i = 0,
        j = 0,
        arr;

    inputField = $('#hw5-prob4-input');
    arr = inputField.val().split(' ');

    for (; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
    }

    currLength = 1;
    maxLength = 1;
    currSeq = '' + arr[i];

    for (i = 0; i < arr.length; i++) {
        currLength = 1;
        currSeq = arr[i] + ', ';

        for (j = i; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                currSeq += arr[j + 1] + ', ';
                currLength++;
            }
            else {
                break;
            }
        }

        if (currLength > maxLength) {
            maxLength = currLength;
            maxSeq = currSeq;
        }
    }

    outputField = $('#hw5-prob4-result');

    outputField.html(maxSeq.replace(/, $/, ''));
}