#!/usr/bin/env node

var sample = function(arr){
    var len = arr == null ? 0 : arr.length
    return len ? arr[Math.floor(Math.random() * len)] : undefined
}
var jokes = require('./src/jokes')

return sample(jokes);
