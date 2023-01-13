const show = require('./js/a.js');
import myExclude from 'staticJs/exclude/exclude.js';
import myInclude from './js/include/include.js';
import 'scssFile';

show('webpack output');
myExclude();
myInclude();