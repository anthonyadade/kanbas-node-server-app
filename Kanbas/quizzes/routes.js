import Database from "../Database/index.js";
export default function QuizRoutes(app) {
    app.get("/api/courses/:id/quizzes", (req, res) => {
        const { id } = req.params;
        const course = Database.quizzes
            .filter((c) => c.course === id);
        if (!course) {
            res.status(404).send("No quizzes for this course");
            return;
        }
        res.send(course);
    });
    app.get("/api/courses/:id/quizzes/:title", (req, res) => {
        const { id, title } = req.params;
        const course = Database.quizzes
            .filter((c) => c.course === id && c.title === title);
        if (!course) {
            res.status(404).send("No quizzes with this title for this course");
            return;
        }
        res.send(course);
    });

}
