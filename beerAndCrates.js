const solution = (bottleCount, cratesSizeArr) => {

    let cratesSizeSorted = cratesSizeArr.sort((a, b) => {
        return a > b ? 1 : -1
    })

    let result = []
    for(let item of cratesSizeSorted){
        let bottlesFitIntoABox = bottleCount/item
        if(bottlesFitIntoABox>1 || bottlesFitIntoABox<1){
            let residue = bottlesFitIntoABox-Math.trunc(bottlesFitIntoABox)
            let cratesCount = Math.trunc(bottlesFitIntoABox) + (residue>0?1:0)
            result.push([item, cratesCount, cratesCount * item - bottleCount])
        }else
            if(bottlesFitIntoABox===1)
                return [item,bottlesFitIntoABox, 0]
    }

    result =  result.sort((a,b)=>{
        return a[2]>b[2]?1:-1
    })

    //console.log(result)

    return result[0]

}

const cratesSizeArr = [3,25,13,54]
const bottleCount = 52
console.log(`bottleCount:${bottleCount}`, solution(bottleCount, cratesSizeArr))