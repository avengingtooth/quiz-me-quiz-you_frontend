import QuizPreview from '../components/QuizPreview.jsx'

function Feed(){
    let base = {
        title: 'Quiz Display Test',
        description: 'Some random description about the quiz',
        questions: ['ObjectIds would be here but not populated for now']
    }

    // this loop and the base are just to use to test the visuals for now
    // the data should automatically be imported as quizzes from a fetch request
    let quizzes = []
    for (let i=0; i<20; i++){
        quizzes.push({_id: i, title: base.title, description:base.description})
        base.description += 'Some random description about the quiz'
    }

    for (let i=0; i<20; i++){
        let rand1 = Math.round(Math.random()*(quizzes.length-1))
        let rand2 = Math.round(Math.random()*(quizzes.length-1))
        let p = quizzes[rand2]

        quizzes[rand2] =  quizzes[rand1]
        quizzes[rand1] = p
        // [quizzes[rand1], quizzes[rand2]] = [quizzes[rand2], quizzes[rand1]]
    }
    return(
        <div id="feed">
            <h1>Discover quizzes</h1>
            {/* maybe add a search bar here */}
            <div id='viewQuizzes'>
                {
                    quizzes.map(quiz => {
                        return(
                            <QuizPreview key={quiz._id} _id={quiz._id} title={quiz.title} description={quiz.description}></QuizPreview>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feed