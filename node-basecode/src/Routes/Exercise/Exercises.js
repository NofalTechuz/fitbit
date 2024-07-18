const express = require("express");
const Exercises = express.Router();
const ExercisesController = require("../../Controllers/Exercise/Exercises");
const authMiddleware = require("../../middlewares/authMiddleware");



// Exercise Routes
Exercises.get("/", authMiddleware, ExercisesController.GetExercises);
Exercises.get("/:id", authMiddleware, ExercisesController.GetExerciseById);
Exercises.post("/", authMiddleware, ExercisesController.AddExercise);
Exercises.delete("/:id", authMiddleware, ExercisesController.DeleteExercise);
Exercises.put("/:id", authMiddleware, ExercisesController.UpdateExercise);

module.exports = Exercises;