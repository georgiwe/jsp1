// This function adds or removes a class "current" 
// from the supplied element (usually a button of sorts).
// Then elements, associated with it, are styled with CSS and made visible/invisible.
function selectOrDeselect(element) {
    if (element.className.indexOf(' current') > -1) {
        element.className = element.className.replace(' current', '');
        return;
    }

    var elementIsHWli = element.className.indexOf('hw-li' > -1);
    var allButtonsToBeHidden;

    if (elementIsHWli === true) {
        allButtonsToBeHidden = document.getElementsByClassName('hw-li');
    } else {
        allButtonsToBeHidden = document.getElementsByClassName('sel-butt');
    }

    for (var i = 0; i < allButtonsToBeHidden.length; i++) {
        allButtonsToBeHidden[i].className =
            allButtonsToBeHidden[i].className.replace(' current', '');
    }

    element.className += ' current';
}

// I use this function to check if all the numbers are actual numbers
function checkNumericValues(num) {
    // if there are more than one numbers to be checked (an array of numbers)
    if (num.length > 0) {
        for (var i = 0; i < num.length; i++) {
            if (isNaN(num[i]) ||
                    num[i] === null ||
                    num[i] === undefined) {
                return false;
            }
        }
    } else { // if the input is not an array
        if (isNaN(num) ||
                num === null ||
                num === undefined) {
            return false;
        }
    }

    return true;
}

var defaultErrorMessage = 'Invalid input!';