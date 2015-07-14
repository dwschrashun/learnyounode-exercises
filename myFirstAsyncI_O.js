var fs = require("fs");
fs.readFile(process.argv[2], function(error, data) {
	if (error) {
		console.error("there was an error");
	}
	else {
		var fileStr = data.toString();
		var lineCount = fileStr.match(/\n/g).length;
		console.log(lineCount);
	}
});
