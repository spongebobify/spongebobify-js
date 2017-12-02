const assert = require('assert');
const spongebobify = require('../dist/spongebobify.js');

describe('spongebobify', function() {
    it('thing first', function() { // first/left
        let result = spongebobify('thing',true);
        assert.equal(result, 'tHiNg');
    });

    it('hi first', function() {
        let result = spongebobify('hi',true);
        assert.equal(result, 'hI');
    });

    it('numbers first', function() {
        let result = spongebobify('9628347231',true);
        assert.equal(result, '9628347231');
    });

    it('invert first', function() {
        const description = 'a nOdE MoDuLe tO EaSiLy sPoNgEbObIfY TeXt';
        let result = spongebobify(spongebobify(description,true),true);

        assert.equal(result, description);
    });

    it('punctuation and spaces first', function() {
        let result = spongebobify('!fh@# @b#csQ@A',true);
        assert.equal(result, '!Fh@# @B#CsQ@A');
    });

    it('surrogate pairs first', function() {
        let result = spongebobify('abc𝟘𝟙𝟚𝟛',true);
        assert.equal(result, 'aBc𝟘𝟙𝟚𝟛');
    });

    it('emoji first', function() {
        let result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤',true);
        assert.equal(result, '🤤😅😫🤶😖🤳💁💓😏🖤');
    });


    it('thing last', function() {
        let result = spongebobify('thing',false);
        assert.equal(result, 'ThInG');
    });

    it('hi last', function() {
        let result = spongebobify('hi',false);
        assert.equal(result, 'Hi');
    });

    it('numbers last', function() {
        let result = spongebobify('9628347231',false);
        assert.equal(result, '9628347231');
    });

    it('invert last', function() {
        const description = 'A NoDe mOdUlE To eAsIlY SpOnGeBoBiGy tExT';
        let result = spongebobify(spongebobify(description,false),false);

        assert.equal(result, description);
    });

    it('punctuation and spaces last', function() {
        let result = spongebobify('!fh@# @b#csQ@A',false);
        assert.equal(result, '!fH@# @b#cSq@a');
    });

    it('surrogate pairs last', function() {
        let result = spongebobify('abc𝟘𝟙𝟚𝟛',false);
        assert.equal(result, 'AbC𝟘𝟙𝟚𝟛');
    });

    it('emoji last', function() {
        let result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤',false);
        assert.equal(result, '🤤😅😫🤶😖🤳💁💓😏🖤');
    });


    it('thing first', function() { // first/left
        let result = spongebobify('thing');
        assert.equal(result, 'tHiNg');
    });

    it('hi first', function() {
        let result = spongebobify('hi');
        assert.equal(result, 'hI');
    });

    it('numbers first', function() {
        let result = spongebobify('9628347231');
        assert.equal(result, '9628347231');
    });

    it('invert first', function() {
        const description = 'a nOdE MoDuLe tO EaSiLy sPoNgEbObIfY TeXt';
        let result = spongebobify(spongebobify(description));

        assert.equal(result, description);
    });

    it('punctuation and spaces first', function() {
        let result = spongebobify('!fh@# @b#csQ@A');
        assert.equal(result, '!Fh@# @B#CsQ@A');
    });

    it('surrogate pairs first', function() {
        let result = spongebobify('abc𝟘𝟙𝟚𝟛');
        assert.equal(result, 'aBc𝟘𝟙𝟚𝟛');
    });

    it('emoji first', function() {
        let result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤');
        assert.equal(result, '🤤😅😫🤶😖🤳💁💓😏🖤');
    });
 
    
});
