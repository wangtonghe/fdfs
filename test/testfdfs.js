var fs = require('fs');
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

fdfs.upload('/Users/wangtonghe/Desktop/buffer.js', {
    fileId: 'group1/M00/00/00/wKgoFFk5AfGAP8SmAApnVQS84oo538.jpg',
    method: 'uploadSalve',
    prefixName: '_400x400'
}).then(function(fileId) {
    console.log(fileId);
}).catch(function(e) {
    console.log(e);
});


// var fileId = 'group1/M00/00/00/wKgoFFkxqTuAESDcAApnVQS84oo697.jpg';
// fdfs.getFileInfo(fileId).then(function(fileInfo) {
//     console.log('fileInfo:', fileInfo);

// }).catch(function(e) {
//     console.log(e);
// });