var url = require('url');

var parsedURL = url.parse('http://www.edwardsexample.com/profile?name=edwards');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
