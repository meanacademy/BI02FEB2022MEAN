let url = require("url");

let fakeUrl = "https://wwww.example.com:4500/about.html?name=username";

let parsedUrl = url.parse(fakeUrl, true);
console.log(parsedUrl.hostname);