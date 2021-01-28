// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // send out a file to .....add page
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });