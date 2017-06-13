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

fdfs.upload('/Users/wangtonghe/Desktop/test.jpg', {
    // fileId: 'group1/M00/00/01/wKgAb1k6hYWAfWWaAAAr2wmxQg4646.jpg',
    // method: 'uploadSalve',
    // prefixName: '_500x500'
}).then(function(info) {
    if (info && info.fileId) {
        console.log('fileId:' + fileId);
    } else if (info.exist) {
        console.log('已存在');
    }

}).catch(function(e) {
    console.log(e);
});
// var fileId = 'group1/M00/00/00/wKgoFFk5AfGAP8SmAApnVQS84oo538.jpg';

// fdfs.download(fileId, 'newfile.jpg').then(function() {
//     console.log('下载完成！');
// }).catch(function(e) {
//     console.log(e);
// });


// var fileId = 'group1/M00/00/00/wKgoFFkxqTuAESDcAApnVQS84oo697.jpg';
// fdfs.getFileInfo(fileId).then(function(fileInfo) {
//     console.log('fileInfo:', fileInfo);

// }).catch(function(e) {
//     console.log(e);
// });

// fdfs.del(fileId).then(function() {
//     console.log('删除成功');

// }).catch(function(e) {
//     console.log(e);
// });

// fdfs.getFileInfo(fileId).then(function(fileInfo) {
//     console.log(JSON.stringify(fileInfo));
// }).catch(function(e) {
//     console.log(e);
// });