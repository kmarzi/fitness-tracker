const db = require("../models/index");

module.exports = {
    getAllWorkouts: (req, res) => {
        db.Workout.create(req.body)
            .then(createdWorkout => {
                res.json(createdWorkout);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    addNewWorkout: (req, res) => {
        db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
            .then(updatedWorkout => {
                res.json(updatedWorkout);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    findWorkout: (req, res) => {
    db.Workout.find().then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
},
workoutRange: (req, res) => {

db.Workout.find().limit(5).then(data => {
    res.json(data);
}).catch(err => {
    res.json(err);
})}

}