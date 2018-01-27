const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizSchema = new Schema(
  {
    category: String,
    questions: Array
  },
  { collection: 'quiz' }
);

mongoose.model('quiz', quizSchema);

module.exports = Quiz;
