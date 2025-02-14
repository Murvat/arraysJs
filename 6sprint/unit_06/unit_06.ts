export {}
// TASK 01
// По нажатию b-1 выполняется функция f1. Функция применяет к массиву a1 метод filter и создает новый массив z1 куда входят только четные элементы массива a1. Результат выводится в консоль.
let a1: number[] = [5, 6, 7, 8, 44, 21, 43, 26, 78, 100, -2, 0, 17];
let z1: number[] = [];

const f1 = (): void => {
    z1 = a1.filter((item: number): boolean => item % 2 === 0);
    console.log(z1);
};

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция применяет к массиву a2 метод filter и создает новый массив z2 куда входят только элементы массива a2 с четным индексом. Результат выводится в консоль.
let a2: number[] = [22, 33, 44, 55, 66, 77, 88, 99];
let z2: number[] = [];

const f2 = (): void => {
    z2 = a2.filter((item: number, index: number): boolean => index % 2 === 0);
    console.log(z2);
};

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция применяет к массиву a3 метод filter и создает новый массив z3 куда выводит индексы тех элементов, значение которых больше 4. Результат выводится в консоль.
let a3: number[] = [2, 3, 4, 5, -6, 55, 1, 12, -3, 7, 4, 5, 2];
let z3: number[] = [];

const f3 = (): void => {
    z3 = a3
        .map((item: number, index: number): number => index)
        .filter((index: number): boolean => a3[index] > 4);
    console.log(z3);
};

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция применяет к массиву a4 метод filter и создает новый массив z4 куда выводит те значения массива которые не числа. Результат выводится в консоль.
let a4: (number | string | boolean | undefined)[] = [3, -2, 4, 1, '9', -3, '0', true, 2, -8, undefined];
let z4: (number | string | boolean | undefined)[] = [];

const f4 = (): void => {
    z4 = a4.filter((item: number | string | boolean | undefined): boolean => typeof item !== 'number');
    console.log(z4);
};

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция перебирает с помощью filter массив a5 и добавляет в z5 те вложенные массивы, в которых есть число 5. Результат выводится в консоль.
let a5: number[][] = [[4, 5], [6, 7, 8], [12, 5], [47, 3, 54, 62], [5]]; // ожидаю [[4,5], [12, 5], [5]]
let z5: number[][] = [];

const f5 = (): void => {
    z5 = a5.filter((item: number[]): boolean => {
        return Array.isArray(item) && item.includes(5);
    });
    console.log(z5);
};

// TASK 06
// По нажатию b-6 выполняется функция f6. Функция перебирает с помощью filter массив a6 и добавляет в z6 те вложенные массивы, сумма элементов которых — четная. Результат выводится в консоль.
let a6: number[][] = [[4, 5], [6, 7, 3], [12, 5], [47, 3, 54, 62], [5]]; // ожидаю [[6,7,3], [47, 3, 54, 62]]
let z6: number[][] = [];

const f6 = (): void => {
    const sum = (arr: number[]): number => arr.reduce((acc: number, init: number): number => acc + init, 0);
    z6 = a6.filter((item: number[]): boolean => sum(item) % 2 === 0);
    console.log(z6);
};

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция перебирает с помощью filter массив a7 и добавляет в z7 те объекты, пароль которых меньше или равен 6 символов. Результат выводится в консоль.
interface IUser {
    user: string;
    pass: string;
}

let a7: IUser[] = [
    { user: "poprik", pass: "a8b5442b9c" },
    { user: "dobrik", pass: "9665" },
    { user: "kovrik", pass: "DA06aA" },
    { user: "shurik", pass: "71b" },
    { user: "zorik", pass: "362617b302" }
];
let z7: IUser[] = [];

const f7 = (): void => {
    z7 = a7.filter((item: IUser): boolean => item.pass.length <= 6);
    console.log(z7);
};

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция применяет к массиву a8 метод filter и создает новый массив z8 куда входят только четные элементы массива a8. Остальные элементы добавляет в z8_2. Результат выводится в консоль.
let a8: number[] = [5, 6, 7, 8, 44, 21, 43, 26, 78, 100, -2, 0, 17];
let z8: number[] = [];
let z8_2: number[] = [];

const f8 = (): void => {
    z8 = a8.filter((item: number): boolean => {
        if (item % 2 === 0) {
            return true;
        } else {
            z8_2.push(item);
            return false;
        }
    });
    console.log(z8);
    console.log(z8_2);
};

// TASK 09
// Задача на повторение. По нажатию b-9 выполняется функция f9. Функция на основе массива a9 должна сделать объект z9, где ключи — такие же как и значения. Вывести результат в консоль.
let a9: number[] = [6, 7, 9];
let z9: { [key: number]: number } = {};

const f9 = (): void => {
    a9.forEach((item: number): void => {
        z9[item] = item;
    });
    console.log(z9);
};

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция перебирает объект a10 и создает новый объект z10, со значениями которых по модулю больше 5. Связка ключ - значение сохраняется. Вывести результат в консоль.
interface IA10 {
    [key: string]: number;
}
let a10: IA10 = { hi: 5, test: 2, best: 12, quest: -6 };
let z10: IA10 = {}; // ожидаю { best : 12, quest : -6 };

const f10 = (): void => {
    for (let key in a10) {
        const res: number | undefined = callback10(a10[key]);
        if (typeof res === 'number') {
            z10[key] = res;
        }
    }
    console.log(z10);
};

function callback10(elem: number): number | undefined {
    if (Math.abs(elem) > 5) return elem;
    return undefined;
}

// Event listeners with proper type annotations.
(document.querySelector('.b-1') as HTMLElement).addEventListener('click', f1);
(document.querySelector('.b-2') as HTMLElement).addEventListener('click', f2);
(document.querySelector('.b-3') as HTMLElement).addEventListener('click', f3);
(document.querySelector('.b-4') as HTMLElement).addEventListener('click', f4);
(document.querySelector('.b-5') as HTMLElement).addEventListener('click', f5);
(document.querySelector('.b-6') as HTMLElement).addEventListener('click', f6);
(document.querySelector('.b-7') as HTMLElement).addEventListener('click', f7);
(document.querySelector('.b-8') as HTMLElement).addEventListener('click', f8);
(document.querySelector('.b-9') as HTMLElement).addEventListener('click', f9);
(document.querySelector('.b-10') as HTMLElement).addEventListener('click', f10);