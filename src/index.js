
exports.min = function min (array) {
  if (typeof array === "undefined" || array.length === 0 ){return 0;}
  else {
      let min = array[0], i = 0;
      for (i; i < array.length; i++){
        if (min > array[i]){
          min = array[i];
        }
      }
      return min;
    }
}

exports.max = function max (array) {
  if (typeof array === "undefined" || array.length === 0 ){return 0;}
  else {
      let max = array[0], i = 0;
      for (i; i < array.length; i++){
        if (max < array[i]){
          max = array[i];
        }
      }
      return max;
    }
}

exports.avg = function avg (array) {
  if (typeof array === "undefined" || array.length === 0 ){return 0;}
  else {
    let sum = 0, i = array.length;
    while (i--){
      sum += array[i];
    }
        return (sum / array.length);
  }
}
