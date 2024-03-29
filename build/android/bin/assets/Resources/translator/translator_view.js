/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

var translatorWindow = Ti.UI.createWindow({
    title: 'Translator',
	backgroundColor: 'black'
});

// Top positions
var labelTop = 2;
var textToTranslateTop = 30;
var translateTop = 140;
var scrollViewTop = 185;
var bottomButtonsTop = 340;

// Left positions
var binaryTranslateLeft = 5;
var hexTranslateLeft = 160;
var scrollViewLeft = 20;
var copyLeft = 25;
var shareLeft = 175;

// Heights
var textToTranslateHeight = 105;
var scrollViewHeight = 140;
var viewHeight = 5000;

// Widths
var textToTranslateWidth = 300;
var translateWidth = 155;
var bottomButtonsWidth = 125;
var viewWidth = 280;

// Font sizes
var buttonFontSize = 10;

if (Ti.Platform.displayCaps.density == "high") {
	
	// High density top positions
	bottomButtonsTop = 380;
	
	// High density heights
	scrollViewHeight = 185;
}

var textToTranslateLabel = Ti.UI.createLabel({
	text: 'Enter value to be translated:',
	font: {
		fontSize:15,
		fontFamily:'Marker Felt',
		fontWeight:'bold'
	},
	top: labelTop
});

var textToTranslate = Titanium.UI.createTextArea({
	height: textToTranslateHeight,
	width: textToTranslateWidth,
	top: textToTranslateTop,
	font: {
		fontSize:18,
		fontFamily:'Marker Felt',
		fontWeight:'bold'
	},
	textAlign:'left',
	borderWidth:2,
	borderColor:'#bbb',
	borderRadius:5
});

var binaryTranslate = Ti.UI.createButton({
	title: 'Translate Text & Binary',
	font: { fontSize: buttonFontSize },
	width: translateWidth,
	top: translateTop,
	left: binaryTranslateLeft
});

var hexTranslate = Ti.UI.createButton({
	title: 'Translate Text & Hex',
	font: { fontSize: buttonFontSize },
	width: translateWidth,
	top: translateTop,
	left:  hexTranslateLeft
});

var scrollView = Ti.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	height: scrollViewHeight,
	top: scrollViewTop,
	left: scrollViewLeft,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

var view = Ti.UI.createView({
	backgroundColor:'black',
	borderRadius:10,
	width:viewWidth,
	height:viewHeight,
	top:10	
});

var translationLabel = Ti.UI.createLabel({
	text: '',
	backgroundColor:'black',
	suppressReturn: false,	
	textAlign: 'center'
});

// var translationLabel = Ti.UI.createTextArea({	
	// value: '',	
	// editable: false
// });

view.add(translationLabel);
scrollView.add(view);

var copy = Ti.UI.createButton({
	title: 'Copy to clipboard',
	font: { fontSize: buttonFontSize },
	width: bottomButtonsWidth,
	top: bottomButtonsTop,
	left: copyLeft
});

var share = Ti.UI.createButton({
	title: 'Share translation',
	font: { fontSize: buttonFontSize },
	width: bottomButtonsWidth,
	top: bottomButtonsTop,
	left: shareLeft
});

translatorWindow.add(textToTranslateLabel);
translatorWindow.add(textToTranslate);
translatorWindow.add(binaryTranslate);
translatorWindow.add(hexTranslate);
translatorWindow.add(scrollView);
translatorWindow.add(copy);
translatorWindow.add(share);