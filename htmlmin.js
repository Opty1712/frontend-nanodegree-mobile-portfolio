var minify = require('html-minifier').minify;
var page = require('./index.html')
var result = minify(page);
result;