/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

var textDBArray = new Array();
var binaryDBArray = new Array();
var hexDBArray = new Array();

var db = Ti.Database.open('content');
var dbrows = db.execute('SELECT * FROM data');
db.close();

var numRows = dbrows.getRowCount();

for (var i=0; i < numRows; i++) {
	textDBArray[i] = dbrows.fieldByName('text');
	binaryDBArray[i] = dbrows.fieldByName('binary');
	hexDBArray[i] = dbrows.fieldByName('hex');
	dbrows.next();
}

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
			case '.':
				index = inputArray.indexOf('"."');
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