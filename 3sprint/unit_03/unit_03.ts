// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью push добавляет полученную из input строку в массив a1. Функция выводит массив a1 в консоль.
let a1: string[] = ['hello', 't'];

const f1 = (): void => {
    const inputElement: HTMLInputElement | null = document.querySelector('.i-1');
    const inputValue: string = inputElement ? inputElement.value : '';
    a1.push(inputValue);
    console.log(a1);
};

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 (число). С помощью push число и его третья степень (куб) добавляются в массив a2. 
// Обратите внимание, что добавление двух чисел нужно выполнить с помощью одного push. Функция выводит a2 в консоль.
let a2: (string | number)[] = ['b', 'c', 12, 34, 'dh', 17];

const f2 = (): void => {
    const inputElement: HTMLInputElement | null = document.querySelector('.i-2');
    const inputValue: number = inputElement ? +inputElement.value : NaN;
    if (!isNaN(inputValue)) {
        a2.push(inputValue, inputValue ** 3);
    }
    console.log(a2);
};

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью push добавляет значение в массив a3. Изучите вывод в консоль. Разберитесь, что возвращает метод push.
let a3: string[] = ['a', 'b'];

const f3 = (): void => {
    const inputElement: HTMLInputElement | null = document.querySelector('.i-3');
    const inputValue: string = inputElement ? inputElement.value : '';
    const newLength: number = a3.push(inputValue);
    console.log(newLength);
    console.log(a3);
};

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция добавляет в массив a4 переменную a4_1. Выводит a4 в консоль. Изучите результат.
let a4: (number | number[])[] = [1, 2];
let a4_1: number[] = [5, 6];

const f4 = (): void => {
    a4.push(a4_1);
    console.log(a4);
};

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5 и добавляет это значение в конец массива a5. 
// Обратите внимание, в данном задании запрещено использовать push, мы должны выполнить присвоение через явное указание индекса последнего элемента + 1. 
// В этом нам поможет знание длины массива a5. Таким образом, мы выполняем частичную эмуляцию метода push. 
// Внимание! Полученное из input переводите в число!
let a5: number[] = [55, 66, 77];

const f5 = (): void => {
    const inputElement: HTMLInputElement | null = document.querySelector('.i-5');
    const inputValue: number = inputElement ? +inputElement.value : NaN;
    a5[a5.length] = inputValue;
    console.log(a5);
};

// TASK 06
// Давайте сделаем функцию, которая полностью будет эмулировать работу push без применения push. 
// Функция принимает 2 аргумента, первый - массив, второй элемент. Добавляет элемент в конец массива, и возвращает новую длину массива.
let a6: string[] = ['a', 'b'];

const f6 = (arr: string[], elem: string): number => {
    arr[arr.length] = elem;
    return arr.length;
};

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция применяет метод pop к массиву a7 и выводит массив в консоль.
let a7: number[] = [21, 22, 23, 24, 25, 26, 27];

const f7 = (): void => {
    a7.pop();
    console.log(a7);
};

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна применить pop к массиву a8 и возвратить результат данной операции.
// Нажимая кнопку удалите все элементы. Изучите что возвращает операция когда есть элементы доступные для удаления и когда массив пуст.
let a8: number[] = [99, 98, 97, 96];

const f8 = (): number | undefined => {
    return a8.pop();
};

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна применить pop() к массиву a9. После применения массив выведите в консоль.
type obj = (string | number | boolean | number[] | (() => void) | { test: number })[];

let a9: obj = [
    'A',
    2,
    true,
    (): void => { console.log(2); },
    [2, 3, 4],
    { test: 1 }
];

const f9 = (): void => {
    a9.pop();
    console.log(a9);
};

// TASK 10
// Ну и на прокачку ваших скиллов. Напишем функцию, которая эмулирует работу pop - удаляет последний элемент массива a10 и возвращает удаленный элемент.
let a10: (number | string)[] = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11];

const f10 = (): number | string | undefined => {
    if (a10.length > 0) {
        const lastElem: number | string = a10[a10.length - 1];
        a10.length = a10.length - 1;
        console.log(a10);
        return lastElem;
    }
    return undefined;
};

// Event listeners with proper type annotations.
const btn1: HTMLElement | null = document.querySelector('.b-1');
btn1?.addEventListener('click', f1);

const btn2: HTMLElement | null = document.querySelector('.b-2');
btn2?.addEventListener('click', f2);

const btn3: HTMLElement | null = document.querySelector('.b-3');
btn3?.addEventListener('click', f3);

const btn4: HTMLElement | null = document.querySelector('.b-4');
btn4?.addEventListener('click', f4);

const btn5: HTMLElement | null = document.querySelector('.b-5');
btn5?.addEventListener('click', f5);

const btn6: HTMLElement | null = document.querySelector('.b-6');
btn6?.addEventListener('click', (): void => {
    const inputElem: HTMLInputElement | null = document.querySelector('.i-6');
    const elem: string = inputElem ? inputElem.value : '';
    console.log(f6(a6, elem));
});

const btn7: HTMLElement | null = document.querySelector('.b-7');
btn7?.addEventListener('click', f7);

const btn8: HTMLElement | null = document.querySelector('.b-8');
btn8?.addEventListener('click', (): void => {
    console.log(f8());
});

const btn9: HTMLElement | null = document.querySelector('.b-9');
btn9?.addEventListener('click', f9);

const btn10: HTMLElement | null = document.querySelector('.b-10');
btn10?.addEventListener('click', (): void => {
    console.log(f10());
});
export{}