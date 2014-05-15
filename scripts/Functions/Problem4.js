function countDivsOnPage() {

    //$('div').length; // using jQuery
    var divCount = document.getElementsByTagName('div').length; // using vanilla javascript

    $('#hw6-prob4-result').html('There are ' + divCount + ' divs in the document');
}