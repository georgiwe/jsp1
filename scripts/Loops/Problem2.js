function printNumbers1toNNotDivisableBy7and3() {

    var inputNumber = parseInt($('#hw4-prob2-input').val());
    var resultField = $('#hw4-prob2-result');

    var result = '';

    for (var i = 1; i <= inputNumber; i++) {
        if (i % 35 !== 0) {
            result += i + ', ';
        }
    }

    result = result.substr(0, result.length - 2);

    resultField.css('font-size', '30px');
    resultField.html(result);
}