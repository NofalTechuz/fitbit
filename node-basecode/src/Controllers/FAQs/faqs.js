const {FAQs} = require("../../database/models/index")

const AddFAQs = async (req, res) => {
    const data = {
        uuid: req.body.uuid,
        question: req.body.question,
        answer: req.body.answer
    }
    try {
        const faqs = await FAQs.create(data)
        res.status(200).json(faqs)
    } catch (error) {
        next(error)
        console.log(error)
    }
}

const GetFAQs = async (req, res) => {
    try {
        const data = await FAQs.findAll();
        res.send(data);
    } catch (error) {
        next(error)
        console.log(error)
    }
}


const GetFAQsById = async (req, res) => {
    const id = req.params.id;
    try {
        const faqs = await FAQs.findOne({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(faqs);
    } catch (error) {
        next(error)
        console.log(error)
    }
}

const DeleteFAQs = async (req, res) => {
    const id = req.params.id;
    try {
        const faqs = await FAQs.destroy({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(faqs);
    } catch (error) {
        next(error)
        console.log(error)
    }
}


const UpdateFAQs = async (req, res) => {
    const id = req.params.id;
    const data = {
        uuid: req.body.uuid,
        question: req.body.question,
        answer: req.body.answer
    }
 
    try {
        const faqs = await FAQs.update(data, {
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(faqs);
    } catch (error) {
        next(error)
        console.log(error)
    }
}


module.exports = {
    AddFAQs,
    GetFAQs,
    GetFAQsById,
    DeleteFAQs,
    UpdateFAQs
}