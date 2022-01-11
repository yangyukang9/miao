var yangyukang9 = {
  chunk: function (array, size) {
    let chunks1 = [];
    let chunks2 = [];
    let num = 0;
    for (let i = 0; i < array.length; i++) {
      chunks1.push(array[i]);
      num++;
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

  drop: function (array, n = 1) {
    let res = [];
    let len = array.length;
    if (len < n) {
      return res;
    }
    for (let i = n; i < len; i++) {
      res.push(array[i]);
    }
    return res;
  },

  dropRight: function (array, n = 1) {
    let res = [];
    let len = array.length - 1;
    if (len < n) {
      return res;
    }
    for (let i = 0; i <= len - n; i++) {
      res.push(array[i]);
    }
    return res;
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },

  head: function (array) {
    if (!array) return undefined;
    return array[0];
  },

  indexOf: function (array, value, fromIndex = 0) {
    let len = array.length;
    for (let i = fromIndex; i < len; i++) {
      if (array[i] == value) return i;
    }
    return -1;
  },

  initial: function (array) {
    let res = [];
    for (let i = 0; i < array.length - 1; i++) {
      res.push(array[i]);
    }
    return res;
  },

  last: function (array) {
    return array[array.length - 1];
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === value) return i;
    }
    return -1;
  },
};
