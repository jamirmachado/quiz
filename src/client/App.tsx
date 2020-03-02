import React, { useState, useEffect } from 'react';
import RandomIndex from './utils/RandomIndex';
import Difficulty from './utils/Difficulty'
import Question from './components/ui/Question';
import Result from './components/ui/Result';
import {Grid, Card, CardContent, CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const numberOfQuestionsBySession = 5;
const useStyles = makeStyles({
    root: {
        marginTop: 80,
    }
});

export const App = () => {
    const classes = useStyles();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [sortedIndexArr, setSortedIndexArr] = useState<number[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [correctAwnsers, setCorrectAwnsers] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState<number>(0);
    const [maxPoints, setMaxPoints] = useState<number>(0);

    
    const startQuiz = () => {
        const indexes = RandomIndex(questions.length, numberOfQuestionsBySession);
        const maxPoints = indexes.reduce((acc, current) => (
            acc+Difficulty(questions[current].difficulty)
        ), 0)

        setIsLoading(false);
        setCurrentQuestion(0);
        setCorrectAwnsers(0);
        setSortedIndexArr(indexes);
        setScore(0);
        setMaxPoints(maxPoints);
    }

    const nextQuestion = (isAwnserCorrect:boolean, difficulty:string) => {
        if(isAwnserCorrect) {
            setScore(score+Difficulty(difficulty));
            setCorrectAwnsers(correctAwnsers+1);
        }
        setCurrentQuestion(currentQuestion+1);
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const result:QuestionResponse = await fetch(
                'http://localhost:4000/api/questions',
            ).then(res => res.json());
            setQuestions(result.results);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (questions.length) {
            startQuiz();
        }
    }, [questions.length])

    return (
        <Grid className={classes.root} container justify='center'>
            <Grid item xs={10} sm={6} md={5} lg={4}>
                <Card>
                    <CardContent>
                        {isLoading ? (<CircularProgress/>)
                        : currentQuestion < numberOfQuestionsBySession ? (
                            <Question 
                                key={currentQuestion} 
                                question={questions[sortedIndexArr[currentQuestion]]} 
                                nextQuestion={nextQuestion} 
                            />
                        ):(
                            <Result 
                                score={score} 
                                maxPoints={maxPoints} 
                                correctAwnsers={correctAwnsers} 
                                numberOfQuestionsBySession={numberOfQuestionsBySession} 
                                restartQuiz={startQuiz} 
                            />
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}