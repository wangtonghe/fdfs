var fs = require('fs'),
    gm = require('gm');
var request = require('request');
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
// try {
//     var readStream = fs.createReadStream('/Users/wangtonghe/Desktop/test.jpg');
//     // var buf = new Buffer(153954);
//     var writeStream = fs.createWriteStream('/Users/wangtonghe/Desktop/test2.jpg');
//     gm(readStream).resize(300, 300).stream().pipe(writeStream);

//     // var rStream = fs.createReadStream(writeStream);

//     stream = fs.createReadStream('/Users/wangtonghe/Desktop/test2.jpg');
// } catch (e) {
//     console.log(e);

// }

// fdfs.getFileInfo('group1/M00/00/00/wKgoFFk6GkeAJGNoAAJZYrnlfBg074.jpg').then(function(info) {
//     if (info && info.size && info.size > 0) {
//         console.log('文件存在')
//     }
// }).catch(function(err) {
//     console.error('err:' + err);
// });

fdfs.upload('/Users/wangtonghe/Desktop/test.jpg', {
    // fileId: 'group1/M00/00/00/wKgoFFk6GkeAJGNoAAJZYrnlfBg075.jpg',
    // method: 'uploadSalve',
    // prefixName: '_300x300',
    // size: 11227
}).then(function(fileId) {
    console.log(fileId);

}).catch(function(e) {
    console.log(e);
});

// fdfs.getFileInfo('group1/M00/14/89/wKgAolk-jHWASH94AAkB7HLOevk120.jpg').then(function(info) {
//     // callback(null, info);
//     console.log("info:" + info);
// }).catch(function(err) {
//     // callback(err);
//     console.log("err:" + err);
// });