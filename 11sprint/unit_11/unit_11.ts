export {};

// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью join должна объединить элементы массива a1 в строку. 
// Разделитель не указывать. Результат вывести в out-1.
let a1: number[] = [13, 15, 22, 23, 26, 35, 72];

const f1 = (): void => {
    const out: string = a1.join();
    (document.querySelector('.out-1') as HTMLElement).textContent = out;
};

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью join должна объединить элементы массива a2 в строку. 
// Разделитель – пустая строка. Результат вывести в out-2.
let a2: number[] = [13, 15, 22, 23, 26, 35, 72];

const f2 = (): void => {
    const out: string = a2.join('');
    (document.querySelector('.out-2') as HTMLElement).textContent = out;
};

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью join должна объединить элементы массива a3 в строку. 
// Разделитель – знак равно. Результат вывести в out-3.
let a3: number[] = [13, 15, 22, 23, 26, 35, 72];

const f3 = (): void => {
    const out: string = a3.join('=');
    (document.querySelector('.out-3') as HTMLElement).textContent = out;
};

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция принимает два параметра – массив arr и разделитель delimiter.
// Функция должна с помощью цикла эмулировать работу метода join и возвратить строку из элементов массива arr, разделённых символом delimiter.
// Обратите внимание на конец строки!!! Функция должна возвратить строку.
let a4: number[] = [66, 77, 88];
let delimiter4: string = '-';

const f4 = (arr: number[], delimiter: string): string => {
    let out: string = '';
    for (const item of arr) {
        out += item + delimiter;
    }
    return out;
};

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью join должна объединить элементы массива a5 в строку. 
// Разделитель – знак равно. Результат вывести в out-5.
let a5: number[] = [100];
a5[56] = 56;
a5[57] = 56;

const f5 = (): void => {
    const out: string = a5.join('=');
    (document.querySelector('.out-5') as HTMLElement).textContent = out;
};

// TASK 06
// По нажатию b-6 выполняется функция f6. Функция с помощью split должна разделить строку s6 на массив a6_res по элементам. 
// Один элемент – один символ. Результат вывести в out-6.
let s6: string = 'hello';
let a6_res: string[] = [];

const f6 = (): void => {
    const result: string[] = s6.split('');
    console.log(result);
    (document.querySelector('.out-6') as HTMLElement).innerHTML = result.join(' ');
};

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция с помощью split должна разделить строку s7 на массив a7_res по элементам. 
// Получить из строки только 3 первых элемента. Один элемент – один символ. Результат вывести в out-7.
let s7: string = 'hello';
let a7_res: string[] = [];

const f7 = (): void => {
    const result: string[] = s7.split('', 3);
    (document.querySelector('.out-7') as HTMLElement).innerHTML = result.join(' ');
};

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна развернуть строку. 
// Так как reverse не работает со строками, нужно сделать массив из строки s8, развернуть его, а затем слепить обратно. 
// Результат – строка, записать в a8_res и вывести в out-8.
let s8: string = 'abrikos';
let a8_res: string = '';

const f8 = (): void => {
    a8_res = s8.split('').reverse().join('');
    (document.querySelector('.out-8') as HTMLElement).textContent = a8_res;
};

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция с помощью spread должна на основе строки s9 создать массив a9_res. 
// Результат – через запятую вывести массив в out-9.
let s9: string = 'hiall';
let a9_res: string[] = [];

const f9 = (): void => {
    a9_res = [...s9];
    (document.querySelector('.out-9') as HTMLElement).textContent = a9_res.join(',');
};

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция с помощью spread должна на основе строки s10 создать массив a10_res. 
// Затем, с помощью filter удалить все символы из массива, которые меньше 'l'. Результат, через пробел, вывести в out-10.
let s10: string = 'fghijklmnoprsq';
let a10_res: string[] = [];

const f10 = (): void => {
    a10_res = [...s10];
    const filtered: string[] = a10_res.filter((item: string): boolean => item > 'l');
    console.log(filtered);
    (document.querySelector('.out-10') as HTMLElement).textContent = filtered.join(' ');
};

// Event listeners with explicit type annotations.
(document.querySelector('.b-1') as HTMLElement).addEventListener('click', f1);
(document.querySelector('.b-2') as HTMLElement).addEventListener('click', f2);
(document.querySelector('.b-3') as HTMLElement).addEventListener('click', f3);
(document.querySelector('.b-4') as HTMLElement).addEventListener('click', (): void => {
    (document.querySelector('.out-4') as HTMLElement).innerHTML = f4(a4, delimiter4);
});
(document.querySelector('.b-5') as HTMLElement).addEventListener('click', f5);
(document.querySelector('.b-6') as HTMLElement).addEventListener('click', f6);
(document.querySelector('.b-7') as HTMLElement).addEventListener('click', f7);
(document.querySelector('.b-8') as HTMLElement).addEventListener('click', f8);
(document.querySelector('.b-9') as HTMLElement).addEventListener('click', f9);
(document.querySelector('.b-10') as HTMLElement).addEventListener('click', f10);