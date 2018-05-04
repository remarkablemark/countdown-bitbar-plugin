#!/usr/bin/env /usr/local/bin/node

const { execSync } = require('child_process');
const { existsSync, mkdirSync, writeFileSync } = require('fs');

let time = execSync(
  `osascript -e 'tell application "System Events" to display dialog "Set Time (HH:MM or HH:MM:SS):" default answer ""' -e 'text returned of result' 2>/dev/null`
);
time = time.toString().trim();

if (/^[0-2]?[0-9](:[0-5][0-9]){1,2}?$/.test(time)) {
  const { path } = require('./constants');

  if (!existsSync(path.tmp)) {
    mkdirSync(path.tmp);
  }

  let data;
  if (existsSync(path.tmpData)) {
    data = require(path.tmpData) || {};
  } else {
    data = {};
  }

  data.time = time;
  writeFileSync(path.tmpData, JSON.stringify(data, null, 2));
}
