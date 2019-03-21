module.exports = {

  sqrt: function (theNumber){
    var answer = Math.sqrt(theNumber);
    return answer;
  },

  even: function (theNumber){
   let even = (theNumber % 2 == 0);
   return even;
 },

 isValidInt: function (theNumber) {
   let theInt = parseInt(theNumber);
   if (theInt) {
     return true;
   } else {
     return false;
   }
 },

 isValidFloat: function (theNumber){
   let theFloat = parseFloat(theNumber);
   if (theFloat) {
     return true;
   } else {
     return false;
   }
 }

};
