const express = require('express');
require('./db/mongoose');
require('./middleware/util');
const userRouter = require('./routers/user');

const app = express();

app.use(express.json());
app.use(userRouter);

module.exports = app;