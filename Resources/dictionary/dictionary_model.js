/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

function getTextElements() {

	var db = Ti.Database.open('content');
	var dbrows = db.execute('SELECT text FROM data');
	db.close();

	var numRows = dbrows.getRowCount();

	for (var i=0; i < numRows; i++) {
		textDBArray[i] = dbrows.fieldByName('text');
		dbrows.next();
	}

	var data = new Array();

	for (var r=0; r < textDBArray.length; r++) {
		
		switch (textDBArray[r]) {
			case '"("':
				textDBArray[r] = '(';
				break;
			case '")"':
				textDBArray[r] = ')';
				break;
			case '"."':
				textDBArray[r] = '.';
				break;
			case 'pound':
				textDBArray[r] = '£';
				break;
			case ' ':
				textDBArray[r] = 'space';
				break;
		}
		
		data[r] = {
			title: textDBArray[r]
		}
	}

	return data;
}

function getTranslation (character) {

	switch (character) {
			case '(':
				character = '"("';
				break;
			case ')':
				character = '")"';
				break;
			case '.':
				character = '"."';
				break;
			case '£':
				character = 'pound';
				break;
			default:				
				break;
		}

	var db = Ti.Database.open('content');
	var dbrows = db.execute('SELECT binary, hex, decimal, html FROM data WHERE text = "' + character + '"');
	db.close();
	
	return "Binary:   " + dbrows.fieldByName('binary') 
				+ "\nHex:   " + dbrows.fieldByName('hex') 
				+ "\nDecimal:   " + dbrows.fieldByName('decimal')
				+ "\nHTML:   " + dbrows.fieldByName('html');
}

function getDictionaryData () {

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

	var text, binary, hex;
	var data = new Array();

	for (var j=0; j < textDBArray.length; j++) {

		text = Ti.UI.createTableViewSection({
			headerTitle: textDBArray[j]
		});

		switch (text.headerTitle) {
			case '"("':
				text.headerTitle = '(';
				break;
			case '")"':
				text.headerTitle = ')';
				break;
			case '"."':
				text.headerTitle = '.';
				break;
			case 'pound':
				text.headerTitle = '£';
				break;
			case ' ':
				text.headerTitle = 'space';
				break;
		}

		binary = Ti.UI.createTableViewRow({
			title: binaryDBArray[j]
		});

		hex = Ti.UI.createTableViewRow({
			title: hexDBArray[j]
		})

		text.add(binary);
		text.add(hex);

		data[j] = text;
	};

	return data;
}