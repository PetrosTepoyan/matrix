function mutiplyMatrices(firstMatrix, secondMatrix){
    let arrayPetros = []

    if (firstMatrix[0].length != secondMatrix.length){
        return null
    }

    

    for(let m = 0; m < firstMatrix.length; m++){ // rows in firstMartix
        arrayPetros.push([])
        for(let n = 0; n < secondMatrix[0].length; n++){ 
            let temporarySum = 0
            for(let i = 0; i < firstMatrix[0].length; i++){
                
                temporarySum += firstMatrix[m][i] * secondMatrix[i][n]
                
            }
            arrayPetros[m].push(temporarySum)
        }
    }

    return arrayPetros
}

function printMatrixArray(inputArray) {
    let outPutString = ""

    for(let i = 0; i < inputArray.length; i++){
        for(let j = 0; j < inputArray[0].length; j++){
            outPutString += inputArray[i][j] + "\t"
        }
        if(i != inputArray.length - 1){
            outPutString +=  "\n"
        }
        
    }

    return outPutString
}

module.exports = {
    mutiplyMatrices,
    printMatrixArray
}

