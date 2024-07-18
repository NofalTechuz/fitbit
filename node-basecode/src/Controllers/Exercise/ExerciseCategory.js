const {ExerciseCategory} = require("../../database/models/index");

const AddExerciseCategory = async (req, res) => {
    const data = {
        uuid: req.body.uuid,
        name: req.body.name,
        subCategory: req.body.subCategory || null,
        status: req.body.status || true,
    };
    try {
        const exerciseCategory = await ExerciseCategory.create(data);
        res.status(200).json(exerciseCategory);
    } catch (error) {
        next(error);
        console.log(error);
    }
};


const GetExerciseCategory = async (req, res) => {
    try {
        const data = await ExerciseCategory.findAll();
        res.send(data);
    } catch (error) {
        next(error);
        console.log(error)
    }
}


const GetExerciseCategoryById = async (req, res) => {
    const id = req.params.id
    try {
        const exerciseCategory = await ExerciseCategory.findOne({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(exerciseCategory);
    } catch (error) {
        next(error);
        console.log(error)
    }
}


const DeleteExerciseCategory = async (req, res) => {
    const id = req.params.id
    try {
        const exerciseCategory = await ExerciseCategory.destroy({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(exerciseCategory);
    } catch (error) {
        next(error);
        console.log(error)
    }
}


const UpdateExerciseCategory = async (req, res) => {
    const id = req.params.id
    const data = {
        uuid: req.body.uuid,
        name: req.body.name,
        subCategory: req.body.subCategory || null,
        status: req.body.status || true,
    };
    try {
        const exerciseCategory = await ExerciseCategory.update(data, {
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(exerciseCategory);
    } catch (error) {
        next(error);
        console.log(error)
    }
}


module.exports = {
    AddExerciseCategory,
    GetExerciseCategory,
    GetExerciseCategoryById,
    DeleteExerciseCategory,
    UpdateExerciseCategory
}