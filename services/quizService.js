const Quiz = require('../models/Quiz');

const userService = {};

userService.getCurrentQuiz = getCurrentQuiz;

function getCurrentQuiz(req) {
  let category = req.params.id;
  return new Promise((resolve, reject) => {
    Quiz.find({ category: category }).then(quizData => {
      resolve(quizData);
    });
  });
}

module.exports = userService;
