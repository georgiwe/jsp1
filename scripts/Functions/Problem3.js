function countOccurances() {

    var inputFieldText = $('#hw6-prob3-input-text');
    var inputFieldSearchFor = $('#hw6-prob3-input-searchFor');
    var outputField = $('#hw6-prob3-result');

    var inputText = inputFieldText.val();
    var searchFor = inputFieldSearchFor.val();

    var selectedRadioButton = $('.hw6-prob3 > input[type=radio]:checked');
    var sensitivityParam = selectedRadioButton.val();
    
    var result =
        (sensitivityParam) ?
            count(inputText, searchFor) : count(inputText, searchFor, sensitivityParam);

    outputField.html('"' + searchFor + '" occurs ' + result + ' times in the text.');

    // The unnecessary overloading
    function count(text, searchFor, isCaseInsensitive) {

        if (text === undefined ||
                searchFor === undefined) {
            throw new Error('Missing necessary parameter(s).');
        }

        if (isCaseInsensitive === undefined) {
            isCaseInsensitive = 'i';
        }

        var matches;
        var result;
        var regExp;

        regExp = new RegExp('\\b' + searchFor + '\\b', isCaseInsensitive + 'g');

        matches = inputText.match(regExp);
        result = (matches === null) ? 0 : matches.length;

        return result;
    }
}

function insertSampleText() {

    var sherlockHolmesExcerpt = 'To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.';

    $('#hw6-prob3-input-text').val(sherlockHolmesExcerpt);
    $('#hw6-prob3-input-searchFor').val('she is always the Woman');
    $('.hw6-prob3 > button:last-of-type').focus();
}