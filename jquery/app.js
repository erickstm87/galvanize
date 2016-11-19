// function returnAnything(name){
//   return name;
// }
//
// var obj = {
//   method1: function(){
//     console.log('Method1');
//   }
// }
// obj['method1']();

var htmlElement = {
  type: 'div',
  text: 'This is the text inside our div'
};

function jQuery2(thing){
  return {
    target: thing,
    text: function(){
      console.log(this);
      return this.target.text;
    }
  }
}
console.log(jQuery2(htmlElement).text());
