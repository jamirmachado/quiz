import React from 'react';
import {Radio, RadioGroup, FormControl, FormControlLabel} from '@material-ui/core'

type Props = {
    questionName: string;
    swapAwnser: (evt:React.FormEvent<HTMLInputElement>) => void;
}

const BooleanAwnser = ({questionName, swapAwnser}:Props) => {
    return (
        <FormControl>
            <RadioGroup>
                <FormControlLabel 
                    label='True'
                    control={
                        <Radio
                            required  
                            color='primary'
                            name={questionName}
                            value='True'
                            onChange={swapAwnser}
                        />}
                />
                <FormControlLabel 
                    label='False'
                    control={
                        <Radio 
                            required
                            color='primary'
                            name={questionName}
                            value='False'
                            onChange={swapAwnser}
                        />}
                />
            </RadioGroup>
        </FormControl>
    )
}

export default BooleanAwnser;