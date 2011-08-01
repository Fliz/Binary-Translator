/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

function loadDBToMemory (colName) {

	var db = Ti.Database.open('content');
	var dbrows = db.execute('SELECT '+ colName + ' FROM data');
	db.close();

	var numRows = dbrows.getRowCount();
	var array = new Array();

	for (var i=0; i < numRows; i++) {
		array[i] = dbrows.fieldByName(colName);
		dbrows.next();
	}

	return array;
}

var textDBArray = loadDBToMemory('text');
var binaryDBArray = loadDBToMemory('binary');
var hexDBArray = loadDBToMemory('hex');

function translate (input, inputArray, langArray) {

	var output = '';

	for (var t = 0; t < input.length; t++) {

		switch (input[t]) {
			case '(':
				index = inputArray.indexOf('"("');
				break;
			case ')':
				index = inputArray.indexOf('")"');
				break;
			case '£':
				index = inputArray.indexOf('pound');
				break;
			default:
				index = inputArray.indexOf(input[t]);
				break;
		}

		if (index < 0) {
			output += input[t];
		} else {
			output += langArray[index] + ' ';
		}
	}

	return output;
}

function calculateViewHeightForBinary (numOfChars) {
	if (numOfChars < 4) {
		return 16;
	} else {
		return 16 * ((numOfChars - (numOfChars % 4)) / 4);
	}
}

function calculateViewHeightForHex (numOfChars) {
	if (numOfChars < 15) {
		return 18
	} else {
		return 18 * ((numOfChars - (numOfChars % 15)) / 15);
	}
}