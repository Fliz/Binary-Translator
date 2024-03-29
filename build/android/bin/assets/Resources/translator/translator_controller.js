/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

Ti.include('/translator/translator_view.js');
Ti.include('/translator/translator_model.js');

binaryTranslate.addEventListener('click', function() {

	var input = textToTranslate.value;

	if (input != null && input != "") {
		view.height = calculateViewHeightForBinary(input.length);
		translationLabel.text = translate(input, textDBArray, binaryDBArray);		
	}
});

hexTranslate.addEventListener('click', function() {

	var input = textToTranslate.value;

	if (input != null && input != "") {
		view.height = calculateViewHeightForHex(input.length);
		translationLabel.text = translate(input, textDBArray, hexDBArray);		
	}
});

copy.addEventListener('click', function() {
	Ti.UI.Clipboard.setText(translationLabel.text);
	
	Ti.UI.createAlertDialog({title: 'Clipboard', message: Ti.UI.Clipboard.getText()}).show();
});
