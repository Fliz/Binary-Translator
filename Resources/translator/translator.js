var translatorWindow = Ti.UI.createWindow({
	title: 'Translator'
});

var textareaTopPos = 10;

var translatorLabel = Titanium.UI.createLabel({
	color:'#999',
	text:'Translator window goes here',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var ta1 = Titanium.UI.createTextArea({
    value:'Enter value to be translated....',
    height:125,
    width:300,
    top: textareaTopPos,
    font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},    
    textAlign:'left',
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
});