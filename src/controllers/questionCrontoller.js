const Database = require('../db/config')

module.exports = {
    async index(req, res) {
        const db = await Database();
        let roomId = req.params.room;
        let questionId = req.params.question;
        let action = req.params.action;
        let password = req.body.pass;

        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

        if (verifyRoom.pass == password) {
            if (action == "delete") {
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
                res.redirect(`/room/${roomId}`);
            } else if (action == "check") {
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`);
                res.redirect(`/room/${roomId}`);
            }
        } else {
            res.render('passincorrect', {roomId: roomId})
        }
    },

    async create(req, res) {
        const db = await Database();

        const question = req.body.question;
        const roomId = req.params.room;
        
        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )
        VALUES(
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`);
    }
}