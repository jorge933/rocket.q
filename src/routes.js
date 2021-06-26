const express = require('express');
const QuestionController = require('./controllers/questionCrontoller');
const RoomController = require('./controllers/RoomController');

const app = express.Router();

app.get('/', (req, res) => res.render("index", {page: 'enter-room'}));

app.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

app.get('/room/:room', RoomController.open);

app.post('/enterroom', RoomController.enter);

// ==================================================================

app.post("/create-room", RoomController.create)

app.post('/question/create/:room', QuestionController.create);

app.post('/question/:room/:question/:action', QuestionController.index);

// 404

app.use((req, res) => {
    res.status(404).render("404")
})

module.exports = app