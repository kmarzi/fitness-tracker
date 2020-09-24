const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  type: {
    type: Number,
    required: "Type of work out is required"
  },

 weight: {
    type: Number,
    required: "Weight amount is required"
  },

  sets: {
    type: Number,
    required: "Number of sets is required"
  },

  reps: {
    type: Number,
    required: "Number of reps is required"
  },

  duration: {
    type: Number,
    required: "Duration of workout is required"
  },


  distance: {
    type: Number,
    required: "Distance of cardio is required"
  },

  longstring: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Example;