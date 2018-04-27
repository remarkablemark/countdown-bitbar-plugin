# countdown-bitbar-plugin

[BitBar](https://github.com/matryer/bitbar) plugin that counts down the time remaining.

## Download Plugin

Clone repository:

```sh
git clone https://github.com/remarkablemark/countdown-bitbar-plugin.git
cd countdown-bitbar-plugin
```

## Install Plugin

Symlink file to enable plugin:

```sh
# <plugins> is the BitBar plugins directory path
ln -sf $(pwd)/countdown.1s.js <plugins>/countdown.1s.js
```

## Remove Plugin

Delete symlink to remove plugin:

```sh
# <plugins> is the BitBar plugins directory path
rm <plugins>/countdown.1s.js
```

## License

[MIT](LICENSE)
