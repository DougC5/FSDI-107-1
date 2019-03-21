
let myMath = require('./mathlib');

console.log('im in node');


function createProduct() {
  return{
    id: 23,
    name: 'Random Product',
    price: 42
  };
}

function init() {

  let res = myMath.sqrt(25);
  console.log('sqr root ', res);

  let r1 = myMath.even(23);
  let r2 = myMath.even(824);
  console.log('evens ', r1, r2);

  //try if 42 valid int, float, 'z' is valis int

  let num1 = myMath.isValidInt(42);
  console.log('42 is a valid int? ', num1);

  let num2 = myMath.isValidFloat(42);
  console.log('42 is a valid float? ', num2);

  let num3 = myMath.isValidInt('z');
  console.log('z is a valid int? ', num3);

  let p1 = createProduct();
  let p2 = createProduct();
}

init();
