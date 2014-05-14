function findMaxAndMin() {

    var sequenceAsStrings = $('#hw4-prob3-input').val().replace(/\s+/, ' ').split(' ');
    var sequence = [];

    for (var i = 0; i < sequenceAsStrings.length; i++) {
        var candidate = parseFloat(sequenceAsStrings[i]);

        if (!isNaN(candidate)) {
            sequence.push(candidate);
        }
    }

    var max = sequence[0];
    var min = sequence[0];

    for (i = 1; i < sequence.length; i++) {
        if (sequence[i] > max) {
            max = sequence[i];
        }

        if (sequence[i] < min) {
            min = sequence[i];
        }
    }

    var resultField = $('#hw4-prob3-result');

    resultField.html('Min element: ' + min + '<br />Max element: ' + max + '<br />');
}