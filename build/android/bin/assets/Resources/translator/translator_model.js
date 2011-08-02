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
	};

	return array;
}

var textDBArray = loadDBToMemory('text');
var binaryDBArray = loadDBToMemory('binary');
var hexDBArray = loadDBToMemory('hex');

function translateToBinary (input) {
	
	var output = '';
	
	for (var c = 0; c < input.length; c++) {
		
		if(input[c] == '(' || input[c] == ')') {
			input[c] = '"' + input[c] + '"';
		}
		
		index = textDBArray.indexOf(input[c]);
		
		if (index < 0) {
			index = textDBArray.indexOf('"'+input[c]+'"');
		}
		
		output += binaryDBArray[index] + ' ';		
	}
	
	return output;
}

function calculateViewHeight (numOfChars) {
	return 40 * ((numOfChars - (numOfChars % 4)) / 4);
}