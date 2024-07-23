const { FAQs } = require("../../database/models/index");

const AddFAQs = async (req, res, next) => {
  const data = {
    uuid: req.body.uuid,
    question: req.body.question,
    answer: req.body.answer,
  };
  try {
    const faqs = await FAQs.create(data);
    res.status(200).json(faqs);
  } catch (error) {
    next(error);
  }
};

const GetFAQs = async (req, res, next) => {
  try {
    const data = await FAQs.findAll();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const GetFAQsById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const faqs = await FAQs.findOne({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(faqs);
  } catch (error) {
    next(error);
  }
};

const DeleteFAQs = async (req, res, next) => {
  const id = req.params.id;
  try {
    const faqs = await FAQs.destroy({
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(faqs);
  } catch (error) {
    next(error);
  }
};

const UpdateFAQs = async (req, res, next) => {
  const id = req.params.id;
  const data = {
    uuid: req.body.uuid,
    question: req.body.question,
    answer: req.body.answer,
  };

  try {
    const faqs = await FAQs.update(data, {
      where: {
        id: id,
      },
      cascade: false,
    });
    res.status(200).json(faqs);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AddFAQs,
  GetFAQs,
  GetFAQsById,
  DeleteFAQs,
  UpdateFAQs,
};
