const {getAllWorkouts, addNewWorkout, findWorkout, workoutRange } = require("../controllers");

module.exports = function(app) {
    app.post("/api/workouts", (req, res) => {
        getAllWorkouts(req, res);
    });

    app.put("/api/workouts/:id", (req, res) => {
    addNewWorkout(req, res);
    });
    app.get("/api/workouts", (req, res) => {
        findWorkout(req, res);
    });   

    app.get("/api/workouts/range", (req, res)=> {
       workoutRange(req, res); 
    })

}


