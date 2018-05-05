#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Countdown</bitbar.title>
// <bitbar.version>v0.1.0</bitbar.version>
// <bitbar.author>Menglin "Mark" Xu</bitbar.author>
// <bitbar.author.github>remarkablemark</bitbar.author.github>
// <bitbar.desc>Counts down the time remaining.</bitbar.desc>
// <bitbar.dependencies>node</bitbar.dependencies>

const { resolve } = require('path');

const bitbar = require('./lib/bitbar');
const { pad } = require('./lib/helpers');
const { path } = require('./lib/constants');

let H, M, S, time;

try {
  // get time if set
  const data = require('./tmp/data');
  [H, M, S] = data.time.split(':');
  S = S || 0;
  time = `${H}:${pad(M)}:${pad(S)}`;

} catch (err) {
  // otherwise display unset time and option
  bitbar.output('00:00:00');
  bitbar.separator.dropdown;
  bitbar.output(`Set Time | color=green bash='${path.setTime}' terminal=false`);
  process.exit();
}

// current time
const now = Date.now();

// end time
const end = new Date();
end.setHours(H);
end.setMinutes(M);
end.setSeconds(S);
end.setMilliseconds(0);

// delta time
let delta = end - now;

// add 1 day if delta time is negative
if (delta < 1) {
  end.setDate(end.getDate() + 1);
  delta = end - now;
}

// remaining milliseconds
// const ms = delta % 1000;

// remaining seconds
const s = Math.floor(delta / 1000) % 60;

// remaining minutes
const m = Math.floor(delta / (1000 * 60)) % 60;

// remaining hours
const h = Math.floor(delta / (1000 * 60 * 60)) % 24;

// display remaining time
const remaining = `${h}:${pad(m)}:${pad(s)}`;
bitbar.output(remaining);

bitbar.separator.dropdown;

// set time
bitbar.output(`Set Time (${time}) | color=green bash='${path.setTime}' terminal=false`);
