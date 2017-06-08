var hello = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
var world = new Buffer('world');
var bstr = Buffer.concat([hello, new Buffer(' '), world]);

console.log(bstr.toString());