/**
 * Created by tiangestar on 2015-06-05.
 */
var tiangestar = require('../');
var str = "中国旅行社总社";
var results = tiangestar.make.pingYing(str);

// results = [ 'ZGLXSZS', 'ZGLHSZS' ]
console.log(results[0]);
