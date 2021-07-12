// データ結合（Data coupling）
// モジュールを介してデータを共有する場合、例えば、引数である。 
// 各データは基本部分であり、これらは単純なデータの受け渡しのみを行う（例えば、数値を渡してその平方根を返す）。



const add10 = (targetNumber) => {
  const additionResult =  targetNumber + 10
  return additionResult
}

const subtract10 = (targetNumber) => {
  const subtractionResult =  targetNumber - 10
  return subtractionResult
}


const result1 = add10(10)
const result2 = subtract10(10)

console.log(result1)
console.log(result2)



