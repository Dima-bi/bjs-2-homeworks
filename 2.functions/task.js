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
  function makeWork(arrOfArr, func) {
  // Инициализация переменной максимума. 
  // Используем результат насадки от самого первого элемента, как того требует условие.
  let maxWorkerResult = func(...arrOfArr[0]);

  // Цикл для перебора всех элементов массива arrOfArr
  for (let i = 0; i < arrOfArr.length; i++) {
    const currentData = arrOfArr[i];
    
    // Передача данных в функцию-насадку с использованием spread-оператора
    const currentResult = func(...currentData);

    // Проверка: полученное значение больше текущего максимума?
    if (currentResult > maxWorkerResult) {
      // Если да — обновляем максимум
      maxWorkerResult = currentResult;
    }
  }

  // Возвращаем найденное максимальное значение
  return maxWorkerResult;
}
 


