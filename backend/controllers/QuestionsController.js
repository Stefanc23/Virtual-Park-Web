const { Question } = require('../models');

const QuestionsController = {
    async create(req, res) {
        const { number, question, answer, choices, category, image } = req.body;
        const newQuestion = new Question({
            number,
            question,
            answer,
            choices,
            category,
            image
        });
        let savedQuestion = await newQuestion.save().then(() => res.json("Question added!")).catch(err => res.status(500).json("Error: " + err));
        res.send(savedQuestion);
    },

    async index(req, res) {
        const questions = await Question.find().sort({number: 1});
        res.send(questions);
    },

    async find(req, res) {
        const question = await Question.findById(req.params.id);
        res.send(question);
    }
}

module.exports = QuestionsController;