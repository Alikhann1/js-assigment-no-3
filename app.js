// CHAPTER 35 TO 38

// Q.1

// function a(){
//     var b = new Date();
//     document.write(b);

// }

// a();



// Q.2





// function fullname(){
//     var a = prompt("enter first name");
// var b = prompt("enter first name");
//     document.write(a + " " + b +" greeting")
// }

// fullname();


//Q.3

// function sum(){
//     var a = +prompt("enter first num");
//     var b = +prompt("enter second num");
//     var c = a+b
//     document.write(c)
// }

// sum();

//Q.4
// var d;
// function sum(){
//     var a = +prompt("enter first num");
//     var b = +prompt("enter second num");
//     var c = prompt("enter operator");
   

// if(c == '+'){
// d = a+b
// }
// else if(c == '-'){
//     d = a-b
// }

// else if(c == '/'){
//     d = a/b
// }

// else if(c == '*'){
//     d = a*b
// }

// else{
//     d ='Enter correct operater and number';
// }

// return(d)

  
   
// }
// var e = sum(d)
// document.write(e)


//Q.5

// function square(){
//     var b = +prompt('enter any num')
//     var a =Math.pow(b,4)
//     document.write(a)
// }

// square();



//Q.6

// const number = parseInt(prompt('Enter a positive integer: '));
// var d;
// function factorial(){
// if (number < 0) {
//     d=('Error! Factorial for negative number does not exist.');
// }

// else if (number === 0) {
//     d=(`The factorial of ${number} is 1.`);
// }

// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     d=(`The factorial of ${number} is ${fact}.`);
//     return(d)
// }
// }
// var e = factorial(d);
// document.write(e)


//Q.7

// var i;
// var a = +prompt('enter starting num'); 
// var b = +prompt('enter ending num'); 
// function number(){
//     for (i = a;i<=b; i++ ){
//         document.write(i + "<br>")
//     }
   
// }

// number();
//Q.8

// var a = +prompt('enter the value of base');
// var b = +prompt('enter the value of perpendicular');
// var c;
// var e;
// var f;
// var g;

// function hypocal(){

//     function squarecal(){
//         var c = a*a;
//         var d = b*b;
//         var g = c+d;
//         return(g);
//     }
// var e =squarecal(g);
//     return(e);
// }

// var f = hypocal(e);
// document.write('hypotenous value is ' +f);


//Q.9
// var a;
// function rectangle(width,hight){
// var a = width*hight;
// document.write('area of rectangle is ' + a);

// }

// rectangle(7,3);


//Q.10


// var a = prompt('enter a string');
// var b;

// function palindrome(){
//     var converttoarray = a.split('');
//     var reverse = converttoarray.reverse();
//     var reversestring = reverse.join('');

//     if(a === reversestring){
//          b=('It is a palindrome')
//     }
//     else{
//         b=('It is not a palindrome')
//     }
//     return(b);

// }

// var c = palindrome(b);
// document.write(c);


//Q.11


// var a = 'ali khan';
// var a = prompt('enter full name');
// var f = a;
// var array;
// function firstletter(){
//     var array = f.split(" ");
//    for (var i=0; i<array.length; i++){
//        array[i]=array[i][0].toUpperCase() +array[i].substr(1);
       
//    }
//    var c = array.join(' ');
//        document.write(c);
// }
// firstletter();

//Q.12
// var a = 'Web Development Tutorial';
// function find_longest_word()
// {
//   var array1 = a.split(' ');
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


//Q.13



// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));


//Q.14

// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// document.write('Area =', c.area().toFixed(2)+ "<br>");
// document.write('perimeter =', c.perimeter().toFixed(2));