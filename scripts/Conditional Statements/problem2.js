function determineSign() {
    var num1 = parseFloat(document.getElementById('hw3-prob2-input-num1').value);
    var num2 = parseFloat(document.getElementById('hw3-prob2-input-num2').value);
    var num3 = parseFloat(document.getElementById('hw3-prob2-input-num3').value);

    if (checkNumericValues([num1, num2, num3]) === false) {
        alert('Invalid value(s)!');
        return;
    }

    var negativesCount = countNegatives([num1, num2, num3]);

    var resField = document.getElementById('hw3-prob2-result');

    var result = 0;

    if (negativesCount !== -1) {
        if (negativesCount % 2 === 0) {
            result = '+';
            resField.style.color = 'green';
        } else {
            result = '-';
            resField.style.color = 'red';
        }
    } else {
        resField.style.color = '#fff';
    }

    resField.textContent = result;
}

function countNegatives(arrOfNumbers) {
    if (arrOfNumbers.length > 0) {
        var negativesCount = 0;

        for (var i = 0; i < arrOfNumbers.length; i++) {
            if (arrOfNumbers[i] === 0) {
                return -1;
            }

            if (arrOfNumbers[i] < 0) {
                negativesCount++;
            }
        }

        return negativesCount;
    }

    if (arrOfNumbers === 0) {
        return -1;
    }

    return (arrOfNumbers < 0) ? 1 : 0;
}