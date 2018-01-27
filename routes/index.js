const authRoutes = require('./authRoutes');

module.exports = app => {
  app.use('/auth', authRoutes);
  app.use('/quiz', quizRoutes);
};
