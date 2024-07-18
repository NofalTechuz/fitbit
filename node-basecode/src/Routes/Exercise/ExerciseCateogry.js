const express = require("express");
const ExerciseCategory = express.Router();
const ExerciseCategoryController = require("../../Controllers/Exercise/ExerciseCategory");
const authMiddleware = require("../../middlewares/authMiddleware");



// Exercise Category Routes

ExerciseCategory.get("/", authMiddleware, ExerciseCategoryController.GetExerciseCategory);
ExerciseCategory.get("/:id", authMiddleware, ExerciseCategoryController.GetExerciseCategoryById);
ExerciseCategory.post("/", authMiddleware, ExerciseCategoryController.AddExerciseCategory);
ExerciseCategory.delete("/:id", authMiddleware, ExerciseCategoryController.DeleteExerciseCategory);
ExerciseCategory.put("/:id", authMiddleware, ExerciseCategoryController.UpdateExerciseCategory);

module.exports = ExerciseCategory;
