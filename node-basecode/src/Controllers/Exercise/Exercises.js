
const {Exercise} = require("../../database/models/index");


const AddExercise = async (req, res) => {
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
        console.log(error);
    }
};


const GetExercises = async (req, res) => {
    try {
        const data = await Exercise.findAll();
        res.send(data);
    } catch (error) {
        next(error)
        console.log(error)
    }
}


const GetExerciseById = async (req, res) => {
    const id = req.params.id
    try {
        const exercise = await Exercise.findOne({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(exercise);
    } catch (error) {
        next(error)
        console.log(error)
    }
}



const DeleteExercise = async (req, res) => {
    const id = req.params.id
    try {
        const exercise = await Exercise.destroy({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(exercise);
    } catch (error) {
        next(error)
        console.log(error)
    }
}



const UpdateExercise = async (req, res) => {
    const id = req.params.id
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
                id: id
            },
            cascade: false
        })
        res.status(200).json(exercise);
    } catch (error) {
        next(error)
        console.log(error)
    }
}


module.exports = {
    AddExercise,
    GetExercises,
    GetExerciseById,
    DeleteExercise,
    UpdateExercise
}