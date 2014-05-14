function printNumbers1toN() {

    var inputNumber = parseInt($('#hw4-prob1-input').val());
    var resultField = $('#hw4-prob1-result');

    var result = '';

    for (var i = 1; i <= inputNumber; i++) {
        result += i + ', ';
    }

    result = result.substr(0, result.length - 2);

    resultField.css('font-size', '30px');
    resultField.html(result);
}