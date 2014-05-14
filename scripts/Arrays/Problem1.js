function initializeArrayMembers5timesTheirIndexLol() {
    var arr = [];

    for (var i = 0; i < 20; i++) {
        arr.push(i * 5);
    }

    var outputField = $('#hw5-prob1-result');
    outputField.html(arr.join(', ') + '.');
}