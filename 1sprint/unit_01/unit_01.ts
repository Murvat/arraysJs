// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью indexOf и ищет данный элемент в массиве a1. Выводит в out-1 результат работы.
// Как тестируется - ввожу числа и проверяю результат.

let a1: number[] = [4, 12, 4, 2, 15, 98];

const f1 = (): void => {
    let inputValue: number = Number((document.querySelector('.i-1') as HTMLInputElement).value);
    console.log(inputValue);
    let res: number = a1.indexOf(inputValue);
    (document.querySelector('.out-1') as HTMLDivElement).textContent = res.toString();
    // обратите внимание в массиве только ЧИСЛА!
}

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 и с помощью indexOf и ищет данный элемент в массиве a2. Выводит в out-2  false, если такого элемента нет в массиве, и ИНДЕКС элемента если есть.
// Как тестируется - ввожу чис

let a2: number[] = [4, 12, 4, 2, 15, 98];

const f2 = (): void => {
    // обратите внимание в массиве только ЧИСЛА!
    let inputValue: number = Number((document.querySelector('.i-2') as HTMLInputElement).value);
    let res: boolean | number = a2.indexOf(inputValue) === -1 ? false : a2.indexOf(inputValue);
    (document.querySelector('.out-2') as HTMLDivElement).textContent = res.toString();
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью indexOf и ищет данный элемент в массиве a3. Выводит в out-3  false, если такого элемента нет в массиве, и true если есть.
// Как тестируется - ввожу числа и проверяю результат.

let a3: number[] = [4, 12, 4, 2, 15, 98];

const f3 = (): void => {
    let inputValue: number = Number((document.querySelector('.i-3') as HTMLInputElement).value);
    let res: boolean = a3.indexOf(inputValue) === -1 ? false : true;
    (document.querySelector('.out-3') as HTMLDivElement).textContent = res.toString();
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция принимает 2 параметра, первый - массив, второй элемент. Функция должна с помощью indexOf найти и вывести в out-4 индекс искомого элемента в массиве a4 или -1 если элемента в массиве нет. Протестируйте задачу на строке '2' и числе 2. Сделайте выводы.

type mixArr = (number | string)[];
let a4: mixArr = [1, '1', 2, '2', '3'];

const f4 = (arr: mixArr, elem: number | string): void => {
    let res: number = arr.indexOf(elem);
    (document.querySelector('.out-4') as HTMLDivElement).textContent = res.toString();
}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5-1 и индекс с которого начинается поиск в массиве с i-5-2 и с помощью indexOf и ищет данный элемент в массиве a5 c позиции указанной в i-5-2. Выводит в out-5 индекс если он есть в массиве, или -1 если нет.
// Введите пары и изучите поведение
// число 33 и индекс старта 2
// число 33 и индекс старта 0
// число 44 и индекс старта 50
// число 44 и индекс старта -3

let a5: number[] = [22, 33, 44, 55, 66, 77, 88, 33, 44, 55, 66, 77];

const f5 = (): void => {
    let inputValue: number = Number((document.querySelector('.i-5-1') as HTMLInputElement).value);
    let inputFrom: number = Number((document.querySelector('.i-5-2') as HTMLInputElement).value);
    let res: number = a5.indexOf(inputValue, inputFrom);
    (document.querySelector('.out-5') as HTMLDivElement).textContent = res.toString();
}

// TASK 06
// По нажатию b-6 выполняется функция f6. Функция считывает значение из i-6 и с помощью indexOf и ищет данный элемент в СТРОКЕ a6. Выводит в out-6 результат поиска.
// Изучите поведение введя по очереди 3, '3', 'a', 5, ytt

let a6: string = '987123abcdefyttb4';

const f6 = (): void => {
    let inputValue: string = (document.querySelector('.i-6') as HTMLInputElement).value;
    let arrRes: number = a6.split('').indexOf(inputValue);
    (document.querySelector('.out-6') as HTMLDivElement).textContent = arrRes.toString();
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция принимает 2 параметра, первый массив, второй - искомое число. Функция должна эмулировать работу метода indexOf с помощью цикла. Что понимается под эмуляцией? Мы не используем метод indexOf, а циклом перебираем массив и с помощью if решаем задачу. Функция должна только либо выводить в out-7 число -1, если искомого числа нет в массиве, или индекс числа в массиве.

let a7: number[] = [21, 22, 23, 24, 25, 26, 27];

const f7 = (arr: number[], elem: number): void => {
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            (document.querySelector('.out-7') as HTMLDivElement).textContent = i.toString();
            return;
        }
    }
    (document.querySelector('.out-7') as HTMLDivElement).textContent = (-1).toString();
}

// TASK 08 * - сложная
// По нажатию b-8 выполняется функция f8. Функция должна получить число из i-8 и с помощью цикла и indexOf найти все индексы данного числа в массиве a8. Индексы должны быть добавлены в res08. Результат (res08) выведите в out-8. Если число не встречается в массиве, то res08 должен быть пустым.

let a8: number[] = [1, 2, 3, 1, 3, 2, 55, 23, 53, 24, 55, 3, 1, 5, 2, 3, 5, 4, 6, 7, 12, 53];
let res08: number[] = [];

const f8 = (): void => {
    // Reset the result array on each function call.
    res08 = [];
    let inputValue: number = Number((document.querySelector('.i-8') as HTMLInputElement).value);
    for (let i: number = 0; i < a8.length; i++) {
        // Check if the current element matches inputValue.
        if (a8[i] === inputValue) {
            // Avoid duplicates if already added.
            if (res08.indexOf(i) === -1) {
                res08.push(i);
            }
        }
    }
    (document.querySelector('.out-8') as HTMLElement).innerHTML = res08.join(', ');
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна получить число из i-9 и с помощью цикла и indexOf вывести в out-9 все индексы вложенных в a9 массивов содержащие указанное число. Вывод через пробел. Если совпадений нет - выводите пустую строку.
// пример если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели число 5 то в out-9 должен быть вывод 2 3 поскольку [3,4,5] находится в a9 под индексом 2,
// a [6, 7, 5] под индексом 3
// пример 2. Если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели 3 то в out-9 будет 1 2

let a9: number[][] = [
    [55, 22, 33],
    [3, 4, 22, 7],
    [66, 2, 12, 55],
    [142, 12, 7, 15],
    [45, 12, 67, 32]
];

const f9 = (): void => {
    let inputValue: number = Number((document.querySelector('.i-9') as HTMLInputElement).value);
    let out: string = '';
    for (let i: number = 0; i < a9.length; i++) {
        for (let k: number = 0; k < a9[i].length; k++) {
            if (a9[i][k] === inputValue) {
                out += i.toString() + ' ';
                break; // Found the match; proceed to next sub-array.
            }
        }
    }
    (document.querySelector('.out-9') as HTMLDivElement).textContent = out.trim();
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция принимает два параметра - массив и искомую строку или число. Функция должна ВОЗВРАТИТЬ -1 если никаких совпадений нет, либо индекс при нестрогом совпадении.
// Пример
// массив a10 = [1, 2, '3'] введи 3 получили индекс 2
// массив a10 = [1, 2, '3'] введи '3' получили индекс 2
// массив a10 = [1, 2, '3'] введи '2' получили индекс 1
// массив a10 = [1, 2, '3'] введи '9' получили -1
// массив a10 = [1, 2, '2', '3'] введи '2' получили 1
// массив a10 = [1, 2, '2', '3'] введи 2 получили 1

let a10: (number | string)[] = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11];

const f10 = (arr: (number | string)[], elem: number | string): number => {
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return i;
        }
    }
    return -1;
}

document.querySelector('.b-1')?.addEventListener('click', f1);
document.querySelector('.b-2')?.addEventListener('click', f2);
document.querySelector('.b-3')?.addEventListener('click', f3);
document.querySelector('.b-4')?.addEventListener('click', () => {
    // f4(a4, '2'); // изучите какой индекс вывело. Разберитесь почему
    f4(a4, 2); // изучите какой индекс вывело. Разберитесь почему
});
document.querySelector('.b-5')?.addEventListener('click', f5);
document.querySelector('.b-6')?.addEventListener('click', f6);
document.querySelector('.b-7')?.addEventListener('click', () => {
    let num: number = Number((document.querySelector('.i-7') as HTMLInputElement).value);
    f7(a7, num);
});
document.querySelector('.b-8')?.addEventListener('click', f8);
document.querySelector('.b-9')?.addEventListener('click', f9);
document.querySelector('.b-10')?.addEventListener('click', () => {
    (document.querySelector('.out-10') as HTMLElement).innerHTML = f10(a10, 8).toString();
});