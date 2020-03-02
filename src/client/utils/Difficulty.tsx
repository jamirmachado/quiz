const easyValue = 1;
const mediumValue = 2;
const hardValue = 3;

const Difficulty = (difficulty:string) => {
    
    if(difficulty === 'easy') {
        return easyValue;
    }
    if(difficulty === 'medium') {
        return mediumValue;
    }
    if(difficulty === 'hard') {
        return hardValue;
    }

    return 0;
}
export default Difficulty;