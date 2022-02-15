const { first, template } = require("lodash");

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

  difference: function (array, ...values) {
    var ary = [];
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      var ins = false;
      for (var j = 0; j < values.length; j++) {
        for (var k = 0; k < values[j].length; k++) {
          if (item == values[j][k]) {
            ins = true;
          }
        }
      }
      if (!ins) {
        ary.push(item);
      }
    }
    return ary;
  },

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

  keyBy: function (array, propName) {
    return array.reduce((obj, item) => {
      obj[item[propName]] = item;
      return obj;
    });
  },

  flatten: function (array) {
    return [].concat(...array);
  },

  flattenDeep: function (array) {
    if (array.length == 0) return [];
    var result = [];
    array.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...this.flattenDeep(item));
      } else {
        result.push(item);
      }
    });
    return result;
  },

  flattenDepth: function (array, depth = 1) {
    if (depth == 0) return array;
    if (depth == 1) return this.flatten(array);

    var result = this.flatten(array);
    for (var i = 1; i < depth; i++) {
      result = this.flatten(result);
    }
    return result;
  },

  fromPairs: function (pairs) {
    var obj = {};
    pairs.forEach((item) => {
      obj[item[0]] = item[1];
    });
    return obj;
  },

  intersection: function (...arrays) {
    var ary = arrays[0];
    arrays.forEach((item) => {
      item.forEach((res, idx) => {
        if (!ary.includes(res)) {
          ary.splice(idx, 1);
        }
      });
    });
    return ary;
  },
};
