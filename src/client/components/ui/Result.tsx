import React from 'react';
import {CardContent, CardActions, Typography, Button} from '@material-ui/core'

type Props = {
    score: number;
    maxPoints: number;
    correctAwnsers: number;
    numberOfQuestionsBySession: number;
    restartQuiz: () => void;
}

const Result = ({score, maxPoints, correctAwnsers, numberOfQuestionsBySession, restartQuiz}:Props) => {

    return (
        <>
            <CardContent>
                <Typography gutterBottom component='h1' variant='h5'>Summary</Typography>
                <Typography>Correct: {correctAwnsers}</Typography>
                <Typography>Wrong: {numberOfQuestionsBySession-correctAwnsers}</Typography>
                <Typography>Questions Awnswered: {numberOfQuestionsBySession}</Typography>
                <Typography>Final Score: {Math.round(score/maxPoints*100)}%</Typography>
            </CardContent>
            <CardActions>
                    <Button
                        onClick={restartQuiz}
                        variant='contained'
                        color='primary'
                    >
                        Restart Quiz
                    </Button>
                </CardActions>
        </>
    )
}

export default Result;