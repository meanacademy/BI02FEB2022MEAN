const path = require('path');

//get file location
let fileLocation = path.join(__dirname, 'node.txt');
console.log("fileLocation", fileLocation);

//get file name by its location
let fileName = path.basename(fileLocation);
console.log("file name: ", fileName);

//get File extention from file name
let fileExtension = path.extname(fileName);
console.log('File Extention', fileExtension);

