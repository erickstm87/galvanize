var myLibary = {
  greet: function(name){
    console.log('hello ' + name);
  },
  add: function(a,b){
    console.log(a+b);
    return a+b;
  },
  listValues: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}
var $ = myLibary;
$.greet('tomas aquinas');
$.add(2,3);
$['listValues']([1,2,3,4,5]);
