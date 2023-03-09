import Question from "../components/Question"

function SingleQuizView(){
    let quizData = {
        title: 'Quiz Display Test',
        description: 'Some random description about the quiz',
        questions: [
            {questionText: 'Question 1', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']},
            {questionText: 'Question 2', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']},
            {questionText: 'Question 2', answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']}
        ]
    }
    return(
        <div id="quiz">
            <h1>{quizData.title}</h1>
            <p className="description">{quizData.description}</p>
            {
                quizData.questions.map(question => {
                    return(
                        <Question answers={question.answers}></Question>
                    )
                })
            }
            <button id="submitQuiz">Submit</button>
        </div>
    )
}

export default SingleQuizView