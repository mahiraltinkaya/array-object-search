function searchInArray(data, text) {
  text = String(text).toLowerCase();
  let arr = [...data];
  let filtered = [];
  arr = arr.map((item) => {
    if (
      JSON.stringify(Object.values(item))
        .toLowerCase()
        .search(text.toLowerCase()) !== -1
    ) {
      filtered.push(item);
      return item;
    }
  });
  return filtered;
}

module.exports = searchInArray;
