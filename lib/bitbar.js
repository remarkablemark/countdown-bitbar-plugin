const bitbar = {
  output: text => {
    if (!text || typeof text !== 'string') return;
    console.log(text);
  },
};

module.exports = bitbar;
