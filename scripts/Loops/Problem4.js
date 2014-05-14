function findLexicographicallySmallestProperty() {

    var resultField = $('#hw4-prob4-result');
    resultField.css('font-size', '19px');

    var newLine = '<br />';

    var resultsForDocument = getMinAndMaxFrom(document);

    resultField.html('Document:' + newLine +
        'Min: ' + resultsForDocument.minValue + newLine +
        'Max: ' + resultsForDocument.maxValue + newLine + newLine);

    var resultsForWindow = getMinAndMaxFrom(window);

    resultField.append('Document:' + newLine +
        'Min: ' + resultsForWindow.minValue + newLine +
        'Max: ' + resultsForWindow.maxValue + newLine + newLine);

    var resultsForNavigator = getMinAndMaxFrom(navigator);

    resultField.append('Document:' + newLine +
        'Min: ' + resultsForNavigator.minValue + newLine +
        'Max: ' + resultsForNavigator.maxValue + newLine);
}

function getMinAndMaxFrom(searchInDoc) {

    var min = String.fromCharCode(127),
        max = String.fromCharCode(0);

    for (var prop in searchInDoc) {
        if (prop < min) {
            min = prop;
        }

        if (prop > max) {
            max = prop;
        }
    }

    return {
        minValue: min,
        maxValue: max,
    };
}