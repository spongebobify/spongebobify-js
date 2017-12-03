import spongebobify from '../src/main';
import 'mocha';
import { assert } from 'chai';

describe('spongebobify', () => {
    it('thing first', () => {
        // first/left
        const result = spongebobify('thing', true);
        assert.equal(result, 'tHiNg');
    });

    it('hi first', () => {
        const result = spongebobify('hi', true);
        assert.equal(result, 'hI');
    });

    it('numbers first', () => {
        const result = spongebobify('9628347231', true);
        assert.equal(result, '9628347231');
    });

    it('invert first', () => {
        const description = 'a nOdE MoDuLe tO EaSiLy sPoNgEbObIfY TeXt';
        const result = spongebobify(spongebobify(description, true), true);

        assert.equal(result, description);
    });

    it('punctuation and spaces first', () => {
        const result = spongebobify('!fh@# @b#csQ@A', true);
        assert.equal(result, '!Fh@# @B#CsQ@A');
    });

    it('surrogate pairs first', () => {
        const result = spongebobify('abc𝟘𝟙𝟚𝟛', true);
        assert.equal(result, 'aBc𝟘𝟙𝟚𝟛');
    });

    it('emoji first', () => {
        const result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤', true);
        assert.equal(result, '🤤😅😫🤶😖🤳💁💓😏🖤');
    });

    it('thing last', () => {
        const result = spongebobify('thing', false);
        assert.equal(result, 'ThInG');
    });

    it('hi last', () => {
        const result = spongebobify('hi', false);
        assert.equal(result, 'Hi');
    });

    it('numbers last', () => {
        const result = spongebobify('9628347231', false);
        assert.equal(result, '9628347231');
    });

    it('invert last', () => {
        const description = 'A NoDe mOdUlE To eAsIlY SpOnGeBoBiGy tExT';
        const result = spongebobify(spongebobify(description, false), false);

        assert.equal(result, description);
    });

    it('punctuation and spaces last', () => {
        const result = spongebobify('!fh@# @b#csQ@A', false);
        assert.equal(result, '!fH@# @b#cSq@a');
    });

    it('surrogate pairs last', () => {
        const result = spongebobify('abc𝟘𝟙𝟚𝟛', false);
        assert.equal(result, 'AbC𝟘𝟙𝟚𝟛');
    });

    it('emoji last', () => {
        const result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤', false);
        assert.equal(result, '🤤😅😫🤶😖🤳💁💓😏🖤');
    });

    it('thing default', () => {
        // first/left
        const result = spongebobify('thing');
        assert.equal(result, 'tHiNg');
    });

    it('hi default', () => {
        const result = spongebobify('hi');
        assert.equal(result, 'hI');
    });

    it('numbers default', () => {
        const result = spongebobify('9628347231');
        assert.equal(result, '9628347231');
    });

    it('invert default', () => {
        const description = 'a nOdE MoDuLe tO EaSiLy sPoNgEbObIfY TeXt';
        const result = spongebobify(spongebobify(description));

        assert.equal(result, description);
    });

    it('punctuation and spaces default', () => {
        const result = spongebobify('!fh@# @b#csQ@A');
        assert.equal(result, '!Fh@# @B#CsQ@A');
    });

    it('surrogate pairs default', () => {
        const result = spongebobify('abc𝟘𝟙𝟚𝟛');
        assert.equal(result, 'aBc𝟘𝟙𝟚𝟛');
    });

    it('emoji default', () => {
        const result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤');
        assert.equal(result, '🤤😅😫🤶😖🤳💁💓😏🖤');
    });
});
