const { resolve } = require('path');

const path = {};
path.setTime = resolve(__dirname, 'set-time.js')
path.tmp = resolve(__dirname, '../tmp/');
path.tmpData = resolve(path.tmp, 'data.json');

module.exports = {
  path,
};
