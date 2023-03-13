import QuizPreview from '../components/QuizPreview'

function MultipleQuizView(props){
    const { quizzes, nextRoute } = props
    return(
        <div id='viewQuizzes'>
        {
            quizzes.map(quiz => {
                return(
                    <QuizPreview key={quiz._id} _id={quiz._id} nextRoute={'/quiz/:id'} title={quiz.title} description={quiz.description}></QuizPreview>
                )
            })
        }
    </div>
    )
}

export default MultipleQuizView