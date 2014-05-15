// The function can accept two parameters and return an answer,
// or if no parameters are passed, it just prints the result.
// I use the first option to test the function.

function countNumberOccurancesInAnArray(testArray, testNumber) {

    var onlyTestArrayIsPassed = 
        (testArray !== undefined) && (testNumber === undefined);
    var onlyTestNumberIsPassed = 
        (testNumber !== undefined) && (testArray === undefined);

    if (onlyTestArrayIsPassed ||
            onlyTestNumberIsPassed) {
        throw new Error('Must pass exactly two or zero parameters.');
        return;
    }

    var numberInputField = $('#hw6-prob5-input-number');
    var arrayInputField = $('#hw6-prob5-input-array');
    var outputField = $('#hw6-prob5-result');
    var number,
        count,
        arr, 
        i;

    if (testArray !== undefined) {
        arr = testArray;
        number = testNumber;
    } else {
        arr = arrayInputField.val().split(' ');
        number = parseFloat(numberInputField.val());
    }

    count = 0;

    for (i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);

        if (arr[i] === number) {
            count++;
        }
    }

    if (testArray === undefined) {
        outputField.html('The number "' + number + '" occurs ' + count + ' times in the array.');
    } else {
        return count;
    }
}

function testCount() {
    // This function performs a test on the function above,
    // by comparing expected results to the results of executing the function above.

    var testArray = [8, 9, 1, 4, -3, 2.55, 11, 2.55, 4, 1, 8];
    var tests = [8, 1, 2.55, 11, -3, 0, -43, 101, 7];
    var expectedResultsPerTest = [2, 2, 2, 1, 1, 0, 0, 0, 0];

    var resultOutputField = $('#hw6-prob5-result-test');

    var result;
    var currResult;
    var expectedResult;

    resultOutputField.html('');

    for (var i = 0; i < tests.length; i++) {

        resultOutputField.append('Test ' + (i + 1) + ': ');

        currResult = countNumberOccurancesInAnArray(testArray, tests[i]);
        expectedResult = expectedResultsPerTest[i];

        if (currResult === expectedResult) {
            resultOutputField.append('PASSED!');
        } else {
            resultOutputField.append('FAILED!');
        }

        resultOutputField.append('<br />');
    }
}