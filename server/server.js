const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const pollRouter = require('./routes/poll.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes  */
app.use('/api/user', userRouter);
app.use('/api/route', pollRouter);

// serve static files
app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

const data = {
    thing1: 'hello bob',
    thing2: 'other thing',
};

app.get('/:id', (req, res) => {
    if (data[req.params.id]) res.send(data[req.params.id]);
    else res.status(404).send({code: '404', message: 'no found'});
})



app.get("*", (req, res) => res.status(404).send({code: '404', message: 'no found'}))
/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
