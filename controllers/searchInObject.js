function searchInObject(data, text) {
  text = String(text).toLowerCase();
  return (
    JSON.stringify(Object.values(data))
      .toLowerCase()
      .search(text.toLowerCase()) !== -1
  );
}

module.exports = searchInObject;
