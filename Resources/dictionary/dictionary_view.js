/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

var dictionaryWindow = Ti.UI.createWindow({
	title: 'Dictionary',
	backgroundColor: 'black'
});

var search = Ti.UI.createSearchBar();

var dictionaryView = Ti.UI.createTableView({
	search: search,
	filterAttribute: 'title'	
});

dictionaryWindow.add(dictionaryView);
