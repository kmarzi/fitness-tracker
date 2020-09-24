const path = require("path");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/index.js"));
    });

    app.get("/stats", (req, res)=> {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });

    app.get("/stats", (req, res)=> {
        res.sendFile(path.join(_dirname, "../public/workout.html"));
    });
};