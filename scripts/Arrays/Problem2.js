function compareCharArrays() {
    var firstArrInput = $('#hw5-prob2-input-firstArr').val(),
        secondArrInput = $('#hw5-prob2-input-secondArr').val(),
        firstArray = firstArrInput.split(''),
        secondArray = secondArrInput.split(''),
        firstIsFirstLol = true,
        result = '',
        maxLength;

    maxLength = (firstArray.length > secondArray.length) ?
            firstArray.length : secondArray.length;

    for (var i = 0; i < maxLength; i++) {
        if (firstArray[i] > secondArray[i]) {
            firstIsFirstLol = false;
            break;
        }
    }


    if (firstArrInput === secondArrInput) {
        result = 'The arrays are the same.';
    } else {
        result = 'Array ' + ((firstIsFirstLol) ? 'one' : 'two') + ' is first.';
    }

    $('#hw5-prob2-result').html(result);
}