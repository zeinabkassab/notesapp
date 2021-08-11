

// const fs =require ('fs')
// fs.writeFileSync('notes.txt','hello')

// console.log('test')
// console.log(fs.readFileSync('notes.txt'))  // datatype of buffer لازم احوله الى ال string

// console.log(fs.readFileSync('notes.txt').toString())



// fs.appendFileSync('notes.txt', 'you are strong')

//======================================================================//

// const x = require ('./data')


// console.log(x(2,3))

// console.log(x.name)

//======================================================================//
const validator = require('validator')
console.log(validator.isEmail('amira@gmail.com'))

// chalk  =>  npm i chalk in terminal



const chalk = require('chalk');

console.log(chalk.blue('Hello amira!'));


//========================================//

// //yargs
// //version1
// const yargs = require('yargs')

// yargs.command({
//     command:'add',
//     descibe: 'Add notes',
//     handler:()=>{
//         console.log('add note')
//     }

// })


// // delete
// yargs.command({
//     command:'delete',
//     descibe: 'delete notes',
//     handler:()=>{
//         console.log('delete note')
//     }

// })



//  //read
//  yargs.command({
//     command:'read',
//     descibe: 'read notes',
//     handler:()=>{
//         console.log('read note')
//     }

// })



// //list
// yargs.command({
//     command:'list',
//     descibe: 'list notes',
//     handler:()=>{
//         console.log('list note')
//     }

// })
// // yargs.parse()




// console.log(yargs.argv)







//========================================//

//yargs
//version1
const yargs = require('yargs')

// yargs.command({
//     command:'add',
//     descibe: 'Add notes',
//     handler:()=>{
//         console.log('add note')
//     }

// })


// // delete
// yargs.command({
//     command:'delete',
//     descibe: 'delete notes',
//     handler:()=>{
//         console.log('delete note')
//     }

// })



//  //read
//  yargs.command({
//     command:'read',
//     descibe: 'read notes',
//     handler:()=>{
//         console.log('read note')
//     }

// })



// //list
// yargs.command({
//     command:'list',
//     descibe: 'list notes',
//     handler:()=>{
//         console.log('list note')
//     }

// })
// yargs.parse()




// console.log(yargs.argv)



 
// ===============================================================



// Version 3

const notes = require ('./notes')

yargs.command({
  command: "add",
  describe: "Add notes",
  // Options
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    },

    body: {
      describe: "This is body description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (arvg) => {
      notes.addNotes(arvg.title,arvg.body)
    
  },
});






// delete
yargs.command({
    command: "delete",
    describe: "delete notes",
    // Options
    builder: {
      title: {
        describe: "This is title description",
        demandOption: true,
        type: "string",
      },
  
    },
    handler: (arvg) => {
        notes.removeNote(arvg.title)
      
    },
  });



  ///read

  yargs.command({
    command: "read",
    describe: "read notes",
    // Options
    builder: {
      title: {
        describe: "This is title description",
        demandOption: true,
        type: "string",
      },
  
    },
    handler: (arvg) => {
        notes.readNote(arvg.title)
      
    },
  });

  
  ///list

  yargs.command({
    command: "list",
    describe: "list notes",
    
    handler: (arvg) => {
        notes.listNote()
      
    },
  });




// console.log(yargs.argv);
yargs.parse()




