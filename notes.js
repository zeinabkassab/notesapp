const fs = require('fs')

//version 1 

const addNotes = (title, body) => {
console.log('test')

    const notes = loadNotes()
    // دلوقتى انا عايزه اخلى اتاتيل بتاعى يبقى واحد بس ومش يقبل المتشابه

    const duplicateTitle = notes.filter((note) => {
        return note.title === title;

    });
    console.log(duplicateTitle);
    if (duplicateTitle.length === 0) {

        notes.push(
            {
                title: title,
                body: body
            }
        );
        saveNotes(notes)
        console.log('saved successfully');
    }
       else{
        console.log('error duplicate title');

       } 
    
 };



const loadNotes = () => {
        try {
            const dataBuffer = fs.readFileSync('notes.json').toString()
            return JSON.parse(dataBuffer)
        }

        catch (e) {
            return []
        }
    }



    const saveNotes = (notes) => {

        const saveData = JSON.stringify(notes)
        fs.writeFileSync('notes.json', saveData)
    }

     // to delete any item 
 const removeNote = (title)=>{
     const notes= loadNotes()
 const notesToKeep = notes.filter((note)=>{

    return note.title !==title
  })

console.log (notesToKeep)

saveNotes(notesToKeep)
 

}




/// read 
 const readNote =(title) =>{

    const notes = loadNotes ()

    const note =notes.find((note)=>{
        return note.title === title
    })
    if(note){
        console.log(note)
        console.log(note.title)
        console.log(note.body)

    }
 }

/// list array
 const listNote =()=>{
      const notes = loadNotes()
      notes.forEach((note) => {
          console.log(note.title)    
  });
 }


    module.exports = {
        addNotes: addNotes,
        removeNote: removeNote,
        readNote: readNote,
        listNote:listNote
    }