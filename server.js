const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const PORT = process.env.PORT || 1738;
const app = express();

app.use(bodyParser.json());

// connect to mongodb
require('./models/User');
require('./models/Quiz');
require('./services/googlePassport');
require('./services/linkedinPassport');
mongoose.connect(keys.mongoURI);

// set up cookies for login
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

// run this express heroku production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // express will serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// app is listening on PORT 1738
app.listen(PORT, function() {
  console.log('App running on port ' + PORT);
});
