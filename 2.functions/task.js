function summElementsWorker(...args) {
    if (args.length === 0) return 0;
    
    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
}

function differenceMaxMinWorker(...args) {
    if (args.length === 0) return 0;
    
    let max = args[0];
    let min = args[0];
    
    for (const num of args) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    return max - min;
}

function differenceEvenOddWorker(...args) {
    if (args.length === 0) return 0;
    
    let sumEvenElement = 0;
    let sumOddElement = 0;
        for (const num of args) {
        if (num % 2 === 0) {
            sumEvenElement += num;
        } else {
            sumOddElement += num;
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...args) {
    if (args.length === 0) return 0;
    
    let sumEvenElement = 0;
    let countEvenElement = 0;
    
    for (const num of args) {
        if (num % 2 === 0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    }
      if (countEvenElement === 0) return 0;
    
    return sumEvenElement / countEvenElement;
}
  function makeWork (arrOfArr, func) {

}
    if (countEvenElement === 0) return 0;
    
    return sumEvenElement / countEvenElement;
}

