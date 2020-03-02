import React, { useState, useEffect } from 'react';
import {decode} from 'he';
import {Radio, RadioGroup, FormControl, FormControlLabel} from '@material-ui/core'

type Props = {
    correct_answer: string;
    incorrect_answers: string[];
    questionName: string;
    swapAwnser: (evt:React.FormEvent<HTMLInputElement>) => void;
}

const MultipleAwnser = ({correct_answer, incorrect_answers, questionName, swapAwnser}:Props) => {

    const [awnsersList, setAwnsersList] = useState<string[]>([]);
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
        const newAwnsersList = [...incorrect_answers];
        newAwnsersList.splice(randomIndex, 0, correct_answer);
        setAwnsersList(newAwnsersList);
    }, [questionName, correct_answer, incorrect_answers])

    return (
        <FormControl>
            <RadioGroup>
                {awnsersList.map(
                    (awnser:string) => (
                        <FormControlLabel 
                            label={decode(awnser)} 
                            control={
                                <Radio
                                    required
                                    color='primary'
                                    name={questionName}
                                    value={awnser}
                                    onChange={swapAwnser}
                                />}
                        />
                    )
                )}
            </RadioGroup>
        </FormControl>
    )
}
export default MultipleAwnser;