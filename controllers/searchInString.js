function searchInString(text, keyword) {
  text = String(text).toLowerCase();
  const x = text.search(String(keyword).toLowerCase());
  return x > -1;
}

module.exports = searchInString;
