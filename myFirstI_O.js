var fs = require("fs");
var file = fs.readFileSync(process.argv[2]);
var fileStr = file.toString();
var lineCount = fileStr.match(/\n/g).length;
console.log(lineCount);