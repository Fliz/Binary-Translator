/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

Ti.include('/dictionary/dictionary_view.js');
Ti.include('/dictionary/dictionary_model.js');

dictionaryView.data = getTextElements();

dictionaryView.addEventListener('click', function(e) {
	
	var character = e.row.title;
	
	Titanium.UI.createAlertDialog({title: character, message: getTranslation(character)}).show();
});
