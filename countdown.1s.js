#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Countdown</bitbar.title>
// <bitbar.version>v0.1.0</bitbar.version>
// <bitbar.author>Menglin "Mark" Xu</bitbar.author>
// <bitbar.author.github>remarkablemark</bitbar.author.github>
// <bitbar.desc>Counts down the time remaining.</bitbar.desc>
// <bitbar.dependencies>node</bitbar.dependencies>

const { pad } = require('./lib/helpers');

// current time
const now = Date.now();

// end time
const end = new Date();
end.setHours(7);
end.setMinutes(30);
end.setSeconds(0);
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
console.log(`${h}:${pad(m)}:${pad(s)}`);
