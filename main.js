/******************************
*
*   Discord Forense Tool
*   Author: David Martins
*
*******************************/
var path = require('path')
var fs = require('fs');
var copydir= require('copy-dir');
var _username = process.env['USERPROFILE'].split(path.sep)[2];
var _cachepath = "C:\\Users\\" + _username + "\\AppData\\Roaming\\Discord\\Cache";
var _outputpath = './output';

if (!fs.existsSync(_outputpath)){
    fs.mkdirSync(_outputpath);
}

copydir.sync(_cachepath, _outputpath);

fs.readdir(_cachepath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        fs.rename(_outputpath+"/"+file, _outputpath+"/"+file+".png", function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
        console.log("[+] "+file);
    });
    console.log("forense_discord -> Data saved on "+ _outputpath+"!");
});
