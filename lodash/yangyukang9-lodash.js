var yangyukang9 = {
  chunk: function (array, size) {
    let chunks1 = [];
    let chunks2 = [];
    let num = 0;
    for (let i = 0; i < array.length; i++) {
      chunks1.push(array[i]);
      result++;
      if (num == size) {
        num = 0;
        chunks2.push(chunks1);
        chunks1 = [];
      }
    }
    if (num != 0) {
      chunks2.push(chunks1);
    }
    return chunks2;
  },

  compact: function (array) {
    let compacts = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        compacts.push(array[i]);
      }
    }
    return compacts;
  },

  concat: function (array, values) {},
};
