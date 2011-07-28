Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

Ti.include('translator.js');

var translatorTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Translator',
    window:translatorWindow
});

translatorWindow.add(ta1);

var dictionaryWindow = Titanium.UI.createWindow({  
    title:'Dictionary',
    backgroundColor:'#fff'
});
var dictionaryTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Dictionary',
    window:dictionaryWindow
});

var dictionaryLabel = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

dictionaryWindow.add(dictionaryLabel);

tabGroup.addTab(translatorTab);  
tabGroup.addTab(dictionaryTab);  

tabGroup.open();
