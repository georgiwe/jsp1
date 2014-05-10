function translateNumberIntoText() {

    var num = parseInt(document.getElementById('hw3-prob8-input').value);

    if (checkNumericValues(num) === false ||
        num >= 1000 ||
        num <= -1000) {

        alert(defaultErrorMessage);
        return;
    }

    var isNegative = num < 0;

    if (isNegative) {
        num = -num;
    }

    var singles = num % 10;
    var tens = Math.floor((num % 100) / 10);
    var hunds = Math.floor(num / 100);
    var lastTwoDigits = num % 100;

    var result = '';

    if (hunds != 0) {
        result += translateSingleDigit(hunds) + ' hundred';
    }

    if (lastTwoDigits > 9 && lastTwoDigits < 20) {
        result += ' and ' + translateTens(lastTwoDigits);
    } else if (tens === 0 && singles != 0) {
        result += ' and ' + translateSingleDigit(singles);
    }

    if (lastTwoDigits > 19) {
        if (hunds != 0) {
            result += ' ';
        }

        result += translateTwentyAndAbove(tens) + ' ' + translateSingleDigit(singles);
    }

    if (hunds === 0 && tens === 0) {
        result = translateSingleDigit(singles);
    } else if (hunds === 0 &&
        lastTwoDigits > 0 &&
        lastTwoDigits < 20) {

        result = translateTens(lastTwoDigits);
    }

    var resField = document.getElementById('hw3-prob8-result');

    if (isNegative) {
        result = 'Minus ' + result;
    } else {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    resField.textContent = result;
}

function translateSingleDigit(number) {

    switch (number) {
        case 0: return 'zero'; break;
        case 1: return 'one'; break;
        case 2: return 'two'; break;
        case 3: return 'three'; break;
        case 4: return 'four'; break;
        case 5: return 'five'; break;
        case 6: return 'six'; break;
        case 7: return 'seven'; break;
        case 8: return 'eight'; break;
        case 9: return 'nine'; break;

        default: throw new RangeException('ex in singles');
    }
}

function translateTens(number) {

    switch (number) {
        case 10: return 'ten'; break;
        case 11: return 'eleven'; break;
        case 12: return 'twelve'; break;
        case 13: return 'thirteen'; break;
        case 14: return 'fourteen'; break;
        case 15: return 'fifteen'; break;
        case 16: return 'sixteen'; break;
        case 17: return 'seventeen'; break;
        case 18: return 'eighteen'; break;
        case 19: return 'nineteen'; break;

        default: throw new RangeException('ex in tens!');
    }
}

function translateTwentyAndAbove(number) {

    switch (number) {
        case 2: return 'twenty'; break;
        case 3: return 'thirty'; break;
        case 4: return 'forty'; break;
        case 5: return 'fifty'; break;
        case 6: return 'sixty'; break;
        case 7: return 'seventy'; break;
        case 8: return 'eighty'; break;
        case 9: return 'ninety'; break;

        default: throw new RangeException('ex in twenty >');
    }
}