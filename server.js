const express = require("express");
const apiRoutes = require("../routes/apiRoutes.js");
const htmlRoutes = require("../routes/htmlRoutes.js");
const fs = require("fs");
const { send } = require("process");
const newDb = [];

// app initialization and create port
const app = express();
// dynamic port for heroku deployment

const PORT = process.env.PORT || 8080;


// body parsing, static, and middleware for post route
app.use(express.json());
// URL encoding converts characters into a format that can be transmitted over the Internet
app.use(express.urlencoded({ extended: true }));
// serve static files such as images, CSS files, and JavaScript files.
app.use(express.static("public"));
// require our abstracted route folders
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/assets/notes.html"));
});
    
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/assets/index.html"));

});

app.post("/api/notes", (req, require) => {
    fs.readFile(path.join(__dirname, "/db/db/json"), "utf8, (err, data") = {
        if(err) {
            return console.log("Somthing went wrong!" + err)
        }        
        notes = JSON.parse(notes);
        
    }
})



app.listen(PORT, () => console.log('listening on PORT: ${PORT}'));
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
