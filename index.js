


spongebobify = text => {
  let altered = "";
  let isLower = true;
  for (let i = 0; i < text.length; i++) {
    altered += isLower ? text[i].toLowerCase() : text[i].toUpperCase();
    isLower = !isLower;
  }
  return altered;
};


module.exports = spongebobify;