/**
 * @author Jonny Olliff-Lee (http://twitter.com/DevJonny)
 */

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