/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

// Load up app database
Ti.Database.install('content.sqlite','content');

Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

Ti.include('/translator/translator_controller.js');

var translatorTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Translator',
    window:translatorWindow
});

Ti.include('/dictionary/dictionary_controller.js');

var dictionaryTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Dictionary',
    window:dictionaryWindow
});

tabGroup.addTab(translatorTab);  
tabGroup.addTab(dictionaryTab);  

tabGroup.open();
