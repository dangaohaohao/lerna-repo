const { sayHello } = require('package2-yu');
var _ = require('lodash');

const arr =  _.flattenDeep([1, [2, [3, [4]], 5]]);

console.log('打平数组', arr);

console.log('package1-yu 再次发布');

sayHello();