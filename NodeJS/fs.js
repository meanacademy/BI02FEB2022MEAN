//fs - file system
let fs = require("fs");

//create folder
// fs.mkdir("sample", (err) => {
//   if (err) throw err;
//   console.log("Folder created..!");
// });

//create a file
// fs.writeFile(
//   "sample/demo.txt",
//   "This is a sample data or string that you are able to see here...!",
//   (err) => {
//     if (err) throw err;
//     console.log("File created..!");
//   }
// );

//appending the file
// fs.appendFile('sample/demo.txt', 'it will append after existing data', (err) => {
//     if (err) throw err;
//     console.log('File Appended..!');
// })

//read the file
// fs.readFile('sample/demo.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

//delete the file
// fs.unlink('sample/demo.txt', (err) => {
//     if (err) throw err;
//     console.log('File Deleted..!');
// })

//delete the folder
// fs.rmdir('sample', (err) => {
//     if (err) throw err;
//     console.log('Folder Deleted..!');
// })