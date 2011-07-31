/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

Ti.include('translator/translator_view.js');
Ti.include('translator/translator_model.js');

binaryTranslate.addEventListener('click', function() {
	
	// 4 per rowtranslateToBinary() 
	
	view.height = calculateViewHeight(textToTranslate.value.length);
	translationLabel.text = translateToBinary(textToTranslate.value);		
});

hexTranslate.addEventListener('click', function() {
	
	// 14 per row
});
