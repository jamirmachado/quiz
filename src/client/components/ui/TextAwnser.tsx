import React from 'react';
import {TextField} from '@material-ui/core'

type Props = {
    questionName: string;
    selectAwnser: string;
    swapAwnser: (evt:React.ChangeEvent<HTMLInputElement>) => void;
}

const TextAwnser = ({questionName, selectAwnser, swapAwnser}:Props) => {

    return (
        <TextField 
            type='text' 
            label='Your Awnser' 
            variant='outlined'
            fullWidth 
            required
            name={questionName} 
            value={selectAwnser} 
            onChange={swapAwnser}
        />
    )
}

export default TextAwnser;