export {}

// TASK 01
// По нажатию b-1 выполняется функция f1. 
// Функция с помощью reverse должна развернуть массив a1 и вывести в out-1 через пробел.
let a1: number[] = [22, 33, 44, 55, 66, 77, 88];

const f1 = (): void => {
    const out: string = a1.reverse().join(' ');
    (document.querySelector('.out-1') as HTMLElement).textContent = out;
};


// TASK 02
// По нажатию b-2 выполняется функция f2. 
// Функция с помощью reverse должна развернуть строку s2 и вывести в out-2.
let s2: string = 'mazahackercrackall';

const f2 = (): void => {
    const out: string = s2.split('').reverse().join('');
    (document.querySelector('.out-2') as HTMLElement).innerHTML = out;
};


// TASK 03
// По нажатию b-3 выполняется функция f3.
// Функция с помощью reverse должна развернуть вложенные в a3 массивы и присвоить результат в a3_res,
// вывести в out-3 через пробел. Массив a3_res очищается при старте функции.
let a3: number[][] = [
    [44, 55, 66],
    [77, 88, 99]
];
let a3_res: number[] = [];

const f3 = (): void => {
    a3_res = [];
    for (let item of a3) {
        // Reverse the inner array (modifies original inner arrays)
        item.reverse();
        for (let innerItem of item) {
            a3_res.push(innerItem);
        }
    }
    (document.querySelector('.out-3') as HTMLElement).textContent = a3_res.join(' ');
};


// TASK 04
// Функция reverse меняет исходный массив. 
// Напишите функцию f4, которая создаёт новый массив на основе a4 с обратным порядком элементов и возвращает его.
// Использовать reverse запрещено. Исходный массив не должен изменяться.
let a4: number[] = [55, 66, 77, 88, 99];
let a4_res: number[] = [];

const f4 = (): void => {
    a4_res = [];
    for (let i: number = a4.length - 1; i >= 0; i--) {
        a4_res.push(a4[i]);
    }
    (document.querySelector('.out-4') as HTMLElement).textContent = a4_res.join(' ');
};


// TASK 05
// Напишите функцию f5, которая создаёт и возвращает новый массив на основе a5 c попарно замененными четными и нечетными элементами.
// Исходный массив менять запрещено! Количество элементов в массиве всегда четное.
let a5: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let a5_res: number[] = [];

const f5 = (): void => {
    a5_res = [];
    for (let i: number = 0; i < a5.length; i += 2) {
        a5_res.push(a5[i + 1]);
        a5_res.push(a5[i]);
    }
    console.log(a5_res);
};


// TASK 06
// Напишите функцию f6, которая сортирует массив a6 по возрастанию и выводит в out-6 через пробел.
// Здесь a6 может быть либо массив чисел, либо строк, поэтому используем объединение типов.
let a6: (number | string)[] = [1, 4, 2, 6, 7, 3, 5, 2, 9];
// Переопределяем a6 как массив строк.
a6 = ['hi', 'low', 'lo', 'hihi'];

const f6 = (): void => {
    // sort() works for strings; if a6 contains numbers they are converted to strings.
    a6.sort();
    (document.querySelector('.out-6') as HTMLElement).textContent = a6.join(' ');
};


// TASK 07
// Напишите функцию f7, которая сортирует массив a7 по возрастанию и выводит в out-7 через пробел.
// Функция sort вызывается без параметров.
let a7: number[] = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f7 = (): void => {
    a7.sort();
    (document.querySelector('.out-7') as HTMLElement).textContent = a7.join(' ');
};


// TASK 08
// Напишите функцию f8, которая сортирует массив a8 по возрастанию и выводит в out-8 через пробел.
// Функцию сортировки укажите самостоятельно.
let a8: number[] = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f8 = (): void => {
    a8.sort((a: number, b: number) => a - b);
    (document.querySelector('.out-8') as HTMLElement).textContent = a8.join(' ');
};


// TASK 09
// Напишите функцию f9, которая сортирует массив a9 по возрастанию или по убыванию в зависимости от аргумента s.
// Если s равно 'ASC' — сортирует по возрастанию, если 'DESC' — по убыванию, и возвращает изменённый массив.
let a9: number[] = [9, 9, 45, 3, 1, 83, 50, 6, 5, 35, 8, 4];

const f9 = (s: 'ASC' | 'DESC'): number[] => {
    switch (s) {
        case 'ASC':
            a9.sort((a: number, b: number) => a - b);
            break;
        case 'DESC':
            a9.sort((a: number, b: number) => b - a);
            break;
    }
    return a9;
};


// TASK 10
// По нажатию b-10 выполняется функция f10. 
// Функция сортирует массив a10 по полю age (по возрастанию) и выводит имена (после сортировки) в out-10 через пробел.
interface Person {
    name: string;
    age: number;
}
let a10: Person[] = [
    { name: "Ivan", age: 34 },
    { name: "Petro", age: 24 },
    { name: "Orest", age: 45 },
    { name: "Virii", age: 35 },
    { name: "Blamo", age: 47 },
    { name: "Vandeya", age: 27 },
    { name: "Inna", age: 35 },
    { name: "Gretta", age: 25 },
    { name: "Brianna", age: 55 }
];

const f10 = (): void => {
    a10.sort((a: Person, b: Person) => a.age - b.age);
    const out: string = a10.map((item: Person) => item.name).join(' ');
    console.log(out);
    (document.querySelector('.out-10') as HTMLElement).textContent = out;
};


// Event listeners with explicit type annotations.
(document.querySelector('.b-1') as HTMLElement).addEventListener('click', f1);
(document.querySelector('.b-2') as HTMLElement).addEventListener('click', f2);
(document.querySelector('.b-3') as HTMLElement).addEventListener('click', f3);
(document.querySelector('.b-4') as HTMLElement).addEventListener('click', f4);
(document.querySelector('.b-5') as HTMLElement).addEventListener('click', f5);
(document.querySelector('.b-6') as HTMLElement).addEventListener('click', f6);
(document.querySelector('.b-7') as HTMLElement).addEventListener('click', f7);
(document.querySelector('.b-8') as HTMLElement).addEventListener('click', f8);
(document.querySelector('.b-9') as HTMLElement).addEventListener('click', () => {
    (document.querySelector('.out-9') as HTMLElement).innerHTML = f9('ASC').toString();
});
(document.querySelector('.b-10') as HTMLElement).addEventListener('click', f10);