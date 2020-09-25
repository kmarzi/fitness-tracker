const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    distance: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

const WorkoutSchema = new Schema({
    day: {type: Date, default: ()=> new Date()},
    exercises: [ExerciseSchema]
}, {
    toJSON:{
        virtuals: true
    }
});
WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise)=>{
        return total+exercise.duration
    },0);
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;