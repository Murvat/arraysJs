export {};

// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью concat объединяет массивы a1 и a1_1 в массив a1_res. Результирующий массив выводится в out-1 (каждый элемент через пробел).
let a1: number[] = [5, 6, 7];
let a1_1: number[] = [55, 66, 77];
let a1_res: number[];

const f1 = (): void => {
    a1_res = a1.concat(a1_1);
    const out1: HTMLElement = document.querySelector('.out-1') as HTMLElement;
    out1.textContent = a1_res.join(' ');
};

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью concat объединяет строки a2 и a2_1 в строку a2_res. Результирующая строка выводится в out-2.
let a2: string = 'test';
let a2_1: string = 'best';
let a2_res: string;

const f2 = (): void => {
    a2_res = a2.concat(a2_1);
    const out2: HTMLElement = document.querySelector('.out-2') as HTMLElement;
    out2.textContent = a2_res;
};

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью concat объединяет строку a3 и массив a3_1 с помощью метода concat. Результат помещается в строку a3_res. Результирующая строка выводится в out-3.
let a3: string = 'some_text';
// Change the type to allow numbers and strings.
let a3_1: (number | string)[] = [5, 7];
let a3_res: string;

const f3 = (): void => {
    // Concatenate a3_1 and a3 and join the resulting array into a string.
    a3_res = a3_1.concat(a3).join(' ');
    const out3: HTMLElement = document.querySelector('.out-3') as HTMLElement;
    out3.textContent = a3_res;
};
// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью concat объединяет массив a4 и строку a4_1 с помощью метода concat. Результат помещается в a4_res. Результат выводится в out-4 через пробел.
let a4: (number|string)[] = [5, 7];
let a4_1: string = 'prime';
let a4_res: (number | string)[];

const f4 = (): void => {
    // Wrap a4_1 in an array so that concat returns a new array of (number | string)[]
    a4_res = a4.concat([a4_1]);
    const out4: HTMLElement = document.querySelector('.out-4') as HTMLElement;
    out4.textContent = a4_res.join(' ');
};

// TASK 05
// Напишите функцию f5-эмулятор concat. Функция должна принимать два аргумента массива и возвращать новый массив, объединённый из этих двух.
const f5 = (ar1: number[], ar2: number[]): number[] => {
    let res: number[] = ar2.reduce((accum: number[], item: number): number[] => {
        accum.push(item);
        return accum;
    }, [...ar1]);
    return res;
};

// TASK 06
// Напишите функцию f6-эмулятор concat. Функция должна принимать любое количество массивов в качестве аргументов и возвращать новый массив, объединённый из принятых.
const f6 = (...arg1: number[][]): number[] => {
    let res: number[] = [];
    for (let item of arg1) {
        for (let innerItem of item) {
            res.push(innerItem);
        }
    }
    return res;
};

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция удаляет 3 элемента из a7, начиная со второго индекса, с помощью splice. Выведите a7 в out-7 через пробел.
let a7: number[] = [3, -4, 5, -6, 7, 45, 67];

const f7 = (): void => {
    a7.splice(2, 3);
    const out7: HTMLElement = document.querySelector('.out-7') as HTMLElement;
    out7.textContent = a7.join(' ');
};

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция удаляет n8 элементов из a8, начиная со k8 индекса с помощью splice. Выведите a8 в out-8 через пробел.
let a8: number[] = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1];
let n8: number = 4;
let k8: number = 3;

const f8 = (): void => {
    a8.splice(k8, n8);
    const out8: HTMLElement = document.querySelector('.out-8') as HTMLElement;
    out8.textContent = a8.join(' ');
};

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция удаляет 3 элемента с начала массива a9 и добавляет элементы 7 и 8 (числа) вместо удаленных.
let a9: number[] = [-2, 3, -4, 5, -6, 7];

const f9 = (): void => {
    a9.splice(0, 3, 7, 8);
    const out9: HTMLElement = document.querySelector('.out-9') as HTMLElement;
    out9.textContent = a9.join(' ');
};

// TASK 10
// Напишите функцию эмуляцию splice. Функция принимает 4 параметра - исходный массив, индекс, с которого начинать удаление, количество удаляемых элементов, и массив с новыми элементами, которые нужно добавить. Возвращает новый массив на основе исходного и условий.
let a10: number[] = [-2, 3, -4, 5, -6, 7];
let from: number = 2;
let num: number = 3;
let add: number[] = [999, 1000];

const f10 = (arr: number[], from: number, num: number, add: number[]): number[] => {
    let newArr: number[] = [];
    for (let i: number = 0; i < from; i++) {
        newArr.push(arr[i]);
    }
    for (let item of add) {
        newArr.push(item);
    }
    let deleted: number = from + num;
    for (let i: number = deleted; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
};

// Event listeners with proper type annotations.
document.querySelector('.b-1')?.addEventListener('click', f1);
document.querySelector('.b-2')?.addEventListener('click', f2);
document.querySelector('.b-3')?.addEventListener('click', f3);
document.querySelector('.b-4')?.addEventListener('click', f4);
document.querySelector('.b-5')?.addEventListener('click', (): void => {
    const out5: HTMLElement = document.querySelector('.out-5') as HTMLElement;
    out5.innerHTML = f5([3, 4, 5], [6, 7, 8]).join(' ');
});
document.querySelector('.b-6')?.addEventListener('click', (): void => {
    const out6: HTMLElement = document.querySelector('.out-6') as HTMLElement;
    // Note: f6 is designed for arrays of numbers. Here, ['hi'] is not a number[] so it's cast to any[] if needed.
    out6.innerHTML = f6([2, 3], (['hi'] as unknown) as number[], [6, 7, 8], [23, 5]).join(' ');
});
document.querySelector('.b-7')?.addEventListener('click', f7);
document.querySelector('.b-8')?.addEventListener('click', f8);
document.querySelector('.b-9')?.addEventListener('click', f9);
document.querySelector('.b-10')?.addEventListener('click', (): void => {
    const out10: HTMLElement = document.querySelector('.out-10') as HTMLElement;
    out10.innerHTML = f10(a10, from, num, add).join(' ');
});
