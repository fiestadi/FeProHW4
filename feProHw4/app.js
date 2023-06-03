// Напишите функцию JavaScript, которая возвращает переданную строку с буквами в алфавитном порядке. Split = razbivaet, sort = sortiruet, join = soedinaet v stroku.
// Пример строки: 'uncopyrightable'. Ожидаемый результат: 'abceghilnoprtuy'
str = "myString"
function alphabetorder(str) {
 return str.split('str').sort().join('str');
   
}document.writeln(alphabetorder("uncopyrightable")); 

//*******************************
// Напишите функцию JavaScript, которая принимает строку в качестве параметра и находит самое длинное слово в строке.
function findlongestword(str) {
 let words = str.split(' ');
 let longestword = '';
 for(let i = 0; i < words.length; i++){
   if(words[i].length > longestword.length){
longestword = words[i];
   }
  }
   return longestword;
 
}
 document.writeln(findlongestword('Web Development In Telran'));
 // !!!!!longestword po idei v zadanii dolzhen byt camel case " longestWord" ili eto ne sushestvenno??????