"use strict";

/**
 * Решает квадратное уравнение вида ax^2 + bx + c = 0.
 * @param {number} a - Коэффициент при x^2
 * @param {number} b - Коэффициент при x
 * @param {number} c - Свободный член
 * @returns {number[]} Массив из одного или двух корней. 
 *                     Если решений нет или их бесконечно много — возвращает пустой массив.
 */
function solveEquation(a, b, c) {
    // Приводим входные данные к числам, если вдруг пришли строки
    a = +a;
    b = +b;
    c = +c;

    // Проверка на линейное уравнение (a = 0)
    if (a === 0) {
        // Уравнение вида bx + c = 0
        if (b === 0) {
            // c = 0 (бесконечно много решений) или c != 0 (нет решений)
            return [];
        }
        // Единственный корень линейного уравнения
        return [-c / b];
    }

    // Вычисление дискриминанта для квадратного уравнения
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        // Вещественных корней нет
        return [];
    } else if (discriminant === 0) {
        // Один корень
        const root = -b / (2 * a);
        return [root];
    } else {
        // Два корня
        const sqrtD = Math.sqrt(discriminant);
        const root1 = (-b - sqrtD) / (2 * a);
        const root2 = (-b + sqrtD) / (2 * a);
        return [root1, root2];
    }
}