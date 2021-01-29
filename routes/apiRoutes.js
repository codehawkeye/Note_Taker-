const fs = require("fs");
var path = require("path")





module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
       fs.readFile(path.join(__dirname + "/../db/db.json"), "utf8", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
    
        })
   
    
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        console.log("this is the body" + req.body);
        newNote.id = Math.floor(Math.random()* 1000);
        let noteList = [];
        noteList.push(newNote);

        fs.readFile(path.join(__dirname + "/../db/db.json"), "utf8", (err, data) => {
            if (err) throw err;
            let updated = noteList.concat(JSON.parse(data));
            fs.writeFile(path.join(__dirname + "/../db/db.json"), JSON.stringify(updated), (err) => {
                if (err) throw err;
            })
            res.json(updated);
        })
    })

    app.delete('/api/notes/:id', function (req, res) {
        //chosen variable adds an id to each newNote
          chosen = req.params.id;
          console.log(chosen);
         fs.readFile('./db/db.json', "utf-8", (err, data) => {
          if (err) throw err;
          noteList = JSON.parse(data);
           var notesIndex = noteList.findIndex(i => i.id == chosen);
           console.log(notesIndex);
             noteList.splice(notesIndex, 1);

             fs.writeFile(path.join(__dirname + "/../db/db.json"), JSON.stringify(noteList), (err) => {
                if (err) throw err;
            })
             
                
         });
         return res.send("No character found");
    })
    
   
}
