const { Exercise } = require("../../database/models/index");

const AddExercise = async (req, res, next) => {
  const data = {
    uuid: req.body.uuid,
    name: req.body.name,
    description: req.body.description,
    setOfExercise: req.body.setOfExercise,
    exerciseCategory: req.body.exerciseCategory,
    status: req.body.status || true,
  };
  try {
    const exercise = await Exercise.create(data);
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

const GetExercises = async (req, res, next) => {
  try {
    const data = await Exercise.findAll();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const GetExerciseById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const exercise = await Exercise.findOne({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

const DeleteExercise = async (req, res, next) => {
  const id = req.params.id;
  try {
    const exercise = await Exercise.destroy({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

const UpdateExercise = async (req, res, next) => {
  const id = req.params.id;
  const data = {
    uuid: req.body.uuid,
    name: req.body.name,
    description: req.body.description,
    setOfExercise: req.body.setOfExercise,
    exerciseCategory: req.body.exerciseCategory,
    status: req.body.status || true,
  };
  try {
    const exercise = await Exercise.update(data, {
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(exercise);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AddExercise,
  GetExercises,
  GetExerciseById,
  DeleteExercise,
  UpdateExercise,
};
