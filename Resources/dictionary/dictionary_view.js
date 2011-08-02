/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

var dictionaryWindow = Ti.UI.createWindow({
	title: 'Dictionary',
	backgroundColor: 'black'
});

var dictionaryView = Ti.UI.createTableView({});

dictionaryWindow.add(dictionaryView);
