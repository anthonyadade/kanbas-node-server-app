import Database from "../Database/index.js";
export default function QuizRoutes(app) {
    app.get("/api/courses/:id/quizzes", (req, res) => {
        const { id } = req.params;
        const quizzes = Database.quizzes
            .filter((c) => c.course === id);
        if (!quizzes) {
            res.status(404).send("No quizzes for this course");
            return;
        }
        res.send(quizzes);
    });
    app.get("/api/courses/:courseId/quizzes/:quizId", (req, res) => {
        const { courseId, quizId } = req.params;
        const quiz = Database.quizzes
            .find((q) => q.course === courseId && q._id === quizId);
            if (!quiz) {
            res.status(404).send("No quizzes with this title for this course");
            return;
        }
        res.send(quiz);
    });
    app.put("/api/quizzes/:qid", (req, res) => {
        const { qid } = req.params;
        const quizIndex = Database.quizzes.findIndex(
            (q) => q._id === qid);
        Database.modules[quizIndex] = {
            ...Database.modules[quizIndex],
            ...req.body
        };
        res.sendStatus(204);
    });


}
