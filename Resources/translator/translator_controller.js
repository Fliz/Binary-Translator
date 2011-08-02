/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

Ti.include('translator/translator_view.js');
Ti.include('translator/translator_model.js');

binaryTranslate.addEventListener('click', function() {

    var input = textToTranslate.value;

	view.height = calculateViewHeightForBinary(input.length);
	translationLabel.text = translate(input, textDBArray, binaryDBArray);
	// translationLabel.value = translate(input, textDBArray, binaryDBArray);
});

hexTranslate.addEventListener('click', function() {

	var input = textToTranslate.value;

    if (input !== undefined) {
    	view.height = calculateViewHeightForHex(input.length);
    	translationLabel.text = translate(input, textDBArray, hexDBArray);
    	// translationLabel.value = translate(input, textDBArray, hexDBArray);
    }
});