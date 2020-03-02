const RandomIndex = (maxValue:number, qty:number = 5):number[] => (
    function arrayRandom(indexList:number[]):number[] {
        const randomIndex = Math.floor(Math.random() * maxValue);
        if (indexList.indexOf(randomIndex) === -1) {
            indexList.push(randomIndex)
        }
        return (
            indexList.length >= qty
            ? indexList
            : arrayRandom(indexList)
        )
    }([])
)
export default RandomIndex;