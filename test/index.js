const assert = require("assert");
const spongebobify = require("../dist/spongebobify.js");

describe("spongebobify", function() {
  it("thing", function() {
    let result = spongebobify("thing");
    assert.equal(result, "tHiNg");
  });

  it("hi", function() {
    let result = spongebobify("hi");
    assert.equal(result, "hI");
  });

  it("numbers", function() {
    let result = spongebobify("9628347231");
    assert.equal(result, "9628347231");
  });

  it("invert", function() {
    const description = "a nOdE MoDuLe tO EaSiLy sPoNgEbObIfY TeXt";
    let result = spongebobify(spongebobify(description));

    assert.equal(result, description);
  });

  it("punctuation and spaces", function() {
    let result = spongebobify("!fh@# @b#csQ@A");
    assert.equal(result, "!Fh@# @B#CsQ@A");
  });

  it("emoji", function() {
      let result = spongebobify('🤤😅😫🤶😖🤳💁💓😏🖤');
      assert.equal(result,'🤤😅😫🤶😖🤳💁💓😏🖤');
  });
});
