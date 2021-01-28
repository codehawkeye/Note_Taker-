





module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json("");
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        let noteList = json.parse(fs.readFileSync("./db/db.json"));
        let noteLength = (notelist.length).toString();
        
        newNote.id = notelength;

        noteList.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
        res.json(noteList);
    })

    app.delete("/api/notes/:id", (req, res) => {
        let noteList = JSON.parse(fs.readFileSync(",/db/db/json"));
        let noteId = (req.param.id).toString();
        notelist.filter(selected => {
            return selected.id != noteId;
        })
    });

   
}
