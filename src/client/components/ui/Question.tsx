import React, { useState } from 'react';
import MultipleAwnser from './MultipleAwnser';
import BooleanAwnser from './BooleanAwnser';
import TextAwnser from './TextAwnser';
import {decode} from 'he';
import {CardContent, CardActions, Typography, Button} from '@material-ui/core'

type Props = {
    question: Question;
    nextQuestion: (isAwnserCorrect:boolean, difficulty:string) => void;
}

const Question = ({question, nextQuestion}:Props) => {
    const [selectAwnser, setSelectAwnser] = useState('');

    const swapAwnser = (evt:React.FormEvent<HTMLInputElement>) => {
        const anwser = evt.currentTarget.value;
        setSelectAwnser(anwser);
    }

    const validateQuestion = (evt:React.FormEvent) => {
        evt.preventDefault();
        if(selectAwnser === '') {
            return false;
        }
        nextQuestion(selectAwnser === question.correct_answer, question.difficulty);
        return false;
    }

    return (
        <>
            <Typography gutterBottom component='h1' variant='h5'>{decode(question.question)}</Typography>
            <form onSubmit={validateQuestion}>
                <CardContent>
                    {
                        (question.type === 'multiple' && <MultipleAwnser questionName={question.question} correct_answer={question.correct_answer} incorrect_answers={question.incorrect_answers} swapAwnser={swapAwnser} />) ||
                        (question.type === 'boolean' && <BooleanAwnser questionName={question.question} swapAwnser={swapAwnser} />) ||
                        (question.type === 'text' && <TextAwnser questionName={question.question} swapAwnser={swapAwnser} selectAwnser={selectAwnser} />)
                    }
                </CardContent>
                <CardActions>
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                    >
                        Next question
                    </Button>
                </CardActions>
            </form>
        </>
    )
}

export default Question;