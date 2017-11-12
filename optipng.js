var OptiPng = require('optipng'),
    myOptimizer = new OptiPng(['-o7']);

sourceStream.pipe(myOptimizer).pipe(destinationStream);