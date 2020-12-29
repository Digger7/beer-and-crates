const solution = (bottleCount) => {

    const boxSize = [3,25,12,54]

    let boxSizeSorted = boxSize.sort((a, b) => {
        return a > b ? 1 : -1
    })

    let result = [[boxSizeSorted[0],1]]
    for(let item of boxSizeSorted){
        let bottlesFitIntoABox = bottleCount/item
        if(bottlesFitIntoABox<1) {
            result = [[item,1]]
            break;
        }
    }
    if(bottleCount>result[0][0]){
        let maxBox = boxSizeSorted[boxSizeSorted.length-1]
        let bottlesFitIntoAMaxBox = bottleCount/maxBox
        result = [[maxBox,Math.trunc(bottlesFitIntoAMaxBox)]]
        if(bottlesFitIntoAMaxBox>1) {
            let recidue = bottleCount - Math.trunc(bottlesFitIntoAMaxBox)*maxBox
            for (let item  of boxSizeSorted){
                if(item > recidue && recidue > 0) {
                    if(item===result[result.length-1][0]){
                        result[result.length-1][1]++
                    }else{
                        result.push([item,1])
                    }
                    break
                }
            }
        }
    }
    return result
}

console.log(solution(127))