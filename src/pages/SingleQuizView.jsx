import Question from "../components/Question"

function SingleQuizView(){
    let quizData = {
        title: 'Quiz Display Test',
        description: 'Some random description about the quiz',
        questions: [
            {questionText: 'Question 1', answers: [{ansText: 'Answer 1', points: 0}, {ansText: 'Answer 2', points: 0}, {'Answer 3': 1}, {'Answer 4': 0}]},
            {questionText: 'Question 2', answers: {'Answer 1': 0, 'Answer 2': 0, 'Answer 3': 1, 'Answer 4': 0}},
            {questionText: 'Question 2', answers: {'Answer 1': 0, 'Answer 2': 0, 'Answer 3': 1, 'Answer 4': 0}}
        ]
    }
    return(
        <div id="quiz">
            <h1>{quizData.title}</h1>
            <p className="description">{quizData.description}</p>
            {
                quizData.questions.map((question, ind) => {
                    return(
                        <Question key={`${question.title}${ind}`} title={question.questionText} answers={question.answers}></Question>
                    )
                })
            }
            <button id="submitQuiz">Submit</button>
        </div>
    )
}

export default SingleQuizView