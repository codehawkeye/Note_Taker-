// Routes
// =============================================================
var path = require("path");

module.exports = function (app) {

  // send out a file to .....add page
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

    // Basic route that sends the user first to the AJAX Page
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  

};


  