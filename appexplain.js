// Modules type 
/*
Core Modules
Local Modules
Third Party Modules
*/
 //core Modules
 /*
http ==>	http module includes classes, methods and events to create Node.js http server.
url ==>	url module includes methods for URL resolution and parsing.
querystring	 ==> querystring module includes methods to deal with query string.
path ==>	path module includes methods to deal with file paths.
fs ==>	fs module includes classes, methods, and events to work with file I/O.
util ==>	util module includes utility functions useful for programmers.
*/

//1- file system 
// اول حاجه اسطب ال باكدج من npm==> in terminal  npm i fs
// استدعاء الباكدج اللى سطبتها 
const { Console } = require('console')
var fs = require ('fs')

// to write 
// fs.writeFileSync بكتب فى اسم الملف اللى مديهاله وبيعمل ملف هو جديد وبيكتب فيه الجمله اللى كتبتهاله 
fs.writeFileSync('my note1.txt', 'my name amira ') 
// to read what i write 
// fs.readFileSync('mynote1.txt') عشان افراء الملف اللى انشاته من شويه 
 console.log (fs.readFileSync('my note1.txt'))   // دى هتدينى بيانات من نوع buffer لازم احولها الى string

 console.log (fs.readFileSync('my note1.txt').toString())  

 //  to add text in my note use append
 // appendFileSync
 fs.appendFileSync('my note1.txt','you are my love baby hamza ')

 // to run any comman in terminal  ==> node appexplain.js

// =================================================================================
// Import your own files

const x = require('./data');
// Console.log(x) //مطلعتش 
//console.log(x(3,4))  //تمام 


//ازاى اطبع اكتر من قيمه هاخدها من ملف تانى

console.log(x.name)
console.log(x.name2)
console.log(x.sum(4,4))


