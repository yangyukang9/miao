var a = parseInt(prompt("a"));
var b = parseInt(prompt("b"));
var c = parseInt(prompt("c"));

var delta = b * b - 4 * a * c;
if (delta < 0) {
  var sqrtDelta = Math.sqrt(delta);
} else {
  if (delta == 0) {
      var x = (-b) / (2*a)
      console.log('x1=x2=' + x)
  } else {
    var x1 = (-b + sqrtDelta) / (2 * a);
    var x2 = (-b - sqrtDelta) / (2 * a);
    alert("x1=" + x1);
    alert("x2=" + x2);
  }
}
