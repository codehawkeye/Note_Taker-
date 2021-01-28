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

    app.delete("/api/notes/:id", (req, res) => {
        let noteList = JSON.parse(fs.readFileSync(",/db/db/json"));
        let noteId = (req.param.id).toString();
        notelist.filter(selected => {
            return selected.id != noteId;
        })
    });

   
}
