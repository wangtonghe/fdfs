var promise = new Promise(function(resolve, reject) {
    console.log('promise');
    resolve('success');

});
promise.then(function(value) {
    console.log(value);
}).catch(function(err) {
    console.log(err);
});