const {LegalAgreement} = require("../../database/models/index")


const GetLegalAgreement = async (req, res) => {
    try {
        const data = await LegalAgreement.findAll();
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

const GetLegalAgreementById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await LegalAgreement.findOne({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(data);
    } catch (error) {
        next(error)
        console.log(error)
    }
};


const AddLegalAgreement = async (req, res) => {
    const data = {
        uuid: req.body.uuid,
        title : req.body.title,
        content: req.body.content,
        type : req.body.type
    }
    console.log(data)
    try {
        const response = await LegalAgreement.create(data)
        res.status(200).json(response)
    } catch (error) {
        next(error)
        console.log(error)
    }
};

const UpdateLegalAgreement = async (req, res) => {
    const id = req.params.id;
    const data = {
        uuid: req.body.uuid,
        title : req.body.title,
        content: req.body.content,
        type : req.body.type
    }
    try {
        const response = await LegalAgreement.update(data, {
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(response);
    } catch (error) {
        next(error)
        console.log(error)
    }
};

const DeleteLegalAgreement = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await LegalAgreement.destroy({
            where: {
                id: id
            },
            cascade: false
        })
        res.status(200).json(response);
    } catch (error) {
        next(error)
        console.log(error)
    }
};

module.exports = {GetLegalAgreement, GetLegalAgreementById, AddLegalAgreement, UpdateLegalAgreement, DeleteLegalAgreement}