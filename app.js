const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files2){
    if(err) console.log('Error', err);
    else console.log('Reslt',  files2);

});

// log(os.freemem());
// log(os.totalmem());
// log(path.parse(__filename));
// log(path.parse(__filename).name);
// log(path.parse(__filename).root);
log('mamamia');