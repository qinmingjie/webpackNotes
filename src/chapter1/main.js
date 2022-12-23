// CommonJS 规范引入相关模块

// 在加载相关文件时规定解析规则
// require('style-loader!css-loader!./css/main.css')

require('./css/main.css');
const show = require('./js/show.js');

show('webpack');