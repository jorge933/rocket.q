const Database = require('../db/config');

module.exports = {
    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId;
        let isRoom = true;

        while (isRoom) {
        for (let i = 0; i < 6; i++) {
            i === 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()
        }
        const roomsExistIds = await db.all(`SELECT id FROM rooms`);

        isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId); isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId);
        if (!isRoom) {
            await db.run(`
            INSERT INTO rooms (id, pass)
            VALUES (?, ?)`, [
                parseInt(roomId),
                pass
            ])
        } 
    }

        await db.close();

        res.redirect(`/room/${roomId}`)
    },
    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`);
        let isQuestions = true;
        let creator = true;

        if (questions.length == 0) {
            if (questionsRead.length == 0) {
                isQuestions = false
            }
        }
        
        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions, creator: creator});
    },

    enter(req, res) {
        const roomId = req.body.roomid
        res.redirect(`/room/${roomId}`)
    }
}