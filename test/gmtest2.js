var fs = require('fs'),
    gm = require('gm');
var request = require('request');
var is = require('is-type-of');
var FdfsClient = require('../index.js');

var fdfs = new FdfsClient({
    trackers: [{
        host: '192.168.40.20',
        port: 22122
    }],
    timeout: 10000,
    defaultExt: '',
    charset: 'utf8'
});

var url = 'http://192.168.40.20/group1/M00/00/00/wKgoFFk6GkeAJGNoAAJZYrnlfBg075.jpg';

var ext = 'jpg';

gm(request(url)).resize(500, 500).toBuffer(function(err, buffer) {

    fdfs.upload(buffer, {
        fileId: 'group1/M00/00/00/wKgoFFk6XwOAFbbGAAJZYrnlfBg718.jpg',
        ext: ext,
        prefixName: '_500x500',
        method: 'uploadSalve'
    }).then(function(fileId) {
        console.log(fileId);

    }).catch(function(err) {
        console.error(err);
    });

});




var fileSize = 0;



// stream.pipe(st2);

// var buf = new Buffer();
// var buf = [];

// stream.on('data', (chunk) => {
//     console.log(chunk.length);

//     fileSize += chunk.length;

// });
// stream.on('end', function() {



// });

// stream.