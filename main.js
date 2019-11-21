const firstMatrix = [[1, 2, 3],
                     [4, 5, 6]]
                    
const secondMatrix = [[7, 8],
                      [9, 10],
                      [11, 12]]

const util = require("./utils")

const multipliedMatrices = util.mutiplyMatrices(firstMatrix, secondMatrix)

console.log(util.printMatrixArray(multipliedMatrices))