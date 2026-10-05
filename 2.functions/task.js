function getArrayParams(... arr) {
  // Если массив пуст, возвращаем значения по умолчанию
  if (arr.length === 0) {
    return { min: null, max: null, avg: 0 };
  }

  // Находим минимум и максимум с помощью Math и spread-оператора
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Находим сумму через reduce. 
// Начальное значение 0 обязательно, чтобы метод сработал на массиве из одного элемента
  const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  
  // Вычисляем среднее, округляем до двух знаков и преобразуем строку в число
  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}


console.log (getArrayParams (-99, 99, 10));
console.log(getArrayParams (1, 2, 3, -100, 10));
console.log(getArrayParams (5));
