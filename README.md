# spongebobify

[![Build Status](https://travis-ci.org/bencooper222/spongebobify.svg?branch=master)](https://travis-ci.org/bencooper222/spongebobify)

## Usage

First install it:

```bash
# npm
npm install --save spongebobify

# yarn (better)
yarn add spongebobify
```

Alternatively, use it from the web with [unpkg](https://unpkg.com/spongebobify).

Then require and use it:

```javascript
import spongebobify from 'spongebobify';

console.log(spongebobify('A node module to easily spongebobify text'));
// will print "a nOdE mOdUlE To eAsIlY SpOnGeBoBiFy TeXt"

// you can also specify a param on case alternation
console.log(spongebobify('A node module to easily spongebobify text', true));
// will print same as above

console.log(spongebobify('A node module to easily spongebobify text', false));
// will print "A NoDe mOdUlE To eAsIlY SpOnGeBoBiGy tExT"
```

## Development

```bash
# Build UMD and ESM modules
yarn build

# Run Mocha test-suite
yarn test
```

## Credits

Algorithm and idea inspired by Irfaan Khalid's
[spongebobify-cmd](https://github.com/IrfaanKhalid/spongebobify-cmd) project.

## License

MIT License.
