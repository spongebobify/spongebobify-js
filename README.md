# spongebobify

[![Build Status](https://travis-ci.org/bencooper222/spongebobify.svg?branch=master)](https://travis-ci.org/bencooper222/spongebobify)
[![npm-version](https://img.shields.io/npm/v/spongebobify.svg?maxAge=2592000)](https://npmjs.org/package/spongebobify)
[![npm-monthly-downloads](https://img.shields.io/npm/dm/spongebobify.svg?maxAge=2592000)](https://npmjs.org/package/spongebobify)

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

## FAQ
Q: Why do you need type safe spongebobification?

A: Our 10s of users depend on us to deliver a reliable package that will never cause issues. Type checking allows us to deliver on that promise. 

Q: Couldn't you just have a human test the code? 

A: Clearly, we hold ourselves to higher standards than you hold yourself. 

Q: Couldn't I just write this algorithm myself?

A: What would you rather do - write 5 lines of code or just type `yarn add spongebobify` and install an extra 8 direct dependencies and 92 more required by those packages?

Q: Why is there a rollup config file?

A: Welcome to the future.

## Credits

Algorithm and idea inspired by Irfaan Khalid's
[spongebobify-cmd](https://github.com/IrfaanKhalid/spongebobify-cmd) project.

## License

MIT License.
