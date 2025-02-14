// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью unShift добавляет полученную из input строку в массив a1. Функция выводит массив a1 в консоль и возвращает массив a1.
let a1: string[] = ['hello', 't'];

const f1 = (): string[] => {
    const inputElem: HTMLInputElement = document.querySelector('.i-1') as HTMLInputElement;
    const inputValue: string = inputElem.value;
    a1.unshift(inputValue);
    console.log(a1);
    return a1;
};

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 (число). С помощью unShift число и его третью степень (куб) добавляются в массив a2. 
// Функция выводит a2 в консоль и возвращает массив a2.
let a2: (string | number)[] = ['b', 'c', 12, 34, 'dh', 17];

const f2 = (): (string | number)[] => {
    const inputElem: HTMLInputElement = document.querySelector('.i-2') as HTMLInputElement;
    const inputValue: number = +inputElem.value;
    a2.unshift(inputValue, inputValue ** 3);
    console.log(a2);
    return a2;
};

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью unShift добавляет значение в массив a3.
// Функция выводит в консоль результат работы unShift и сам массив a3.
let a3: string[] = ['a', 'b'];

const f3 = (): void => {
    const inputElem: HTMLInputElement = document.querySelector('.i-3') as HTMLInputElement;
    const inputValue: string = inputElem.value;
    const newLength: number = a3.unshift(inputValue);
    console.log(newLength);
    console.log(a3);
};

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция удаляет из массива первое значение с помощью shift. Выводит a4 в консоль.
let a4: number[] = [14, 15, 16, 17, 18];

const f4 = (): void => {
    a4.shift();
    console.log(a4);
};

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция удаляет из массива нулевое значение с помощью shift и возвращает результат операции. Выводит a5 в консоль.
let a5: number[] = [55, 66, 77, 88, 99, 129];

const f5 = (): number | undefined => {
    const shifted: number | undefined = a5.shift();
    console.log(a5);
    return shifted;
};

// TASK 06
// Давайте сделаем функцию, которая полностью будет эмулировать работу unShift без применения unShift (push можно использовать).
// Функция принимает элемент и добавляет его в начало массива a6. Функция должна возвращать новую длину массива a6.
let a6: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

const f6 = (elem: string): number => {
    a6.length = a6.length + 1;
    for (let i: number = a6.length - 1; i > 0; i--) {
        a6[i] = a6[i - 1];
    }
    a6[0] = elem;
    return a6.length;
};

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция применяет метод shift к массиву a7, выводит массив в консоль и возвращает новую длину массива a7.
let a7: number[] = [21, 22, 23, 24, 25, 26, 27];

const f7 = (): number => {
    a7.shift();
    console.log(a7);
    return a7.length;
};

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна применить slice с параметрами (1,4) к массиву a8 и вывести полученный массив в консоль.
let a8: number[] = [44, 45, 46, 47, 48, 49];

const f8 = (): void => {
    const res: number[] = a8.slice(1, 4);
    console.log(res);
};

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна применить slice с параметрами (2) к массиву a9 и вывести полученный массив в консоль.
let a9: (string | number)[] = ['A', 2, 43, 12, 13, 14, 15, 16];

const f9 = (): void => {
    const res: (string | number)[] = a9.slice(2);
    console.log(res);
};

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция должна применить slice с параметрами (2, -2) к массиву a10 и вывести полученный массив в консоль.
let a10: number[] = [100, 2, 43, 12, 13, 14, 15, 16];

const f10 = (): void => {
    const res: number[] = a10.slice(2, -2);
    console.log(res);
};

// Event listeners with proper type annotations.
const btn1: HTMLElement = document.querySelector('.b-1') as HTMLElement;
btn1.addEventListener('click', f1);

const btn2: HTMLElement = document.querySelector('.b-2') as HTMLElement;
btn2.addEventListener('click', f2);

const btn3: HTMLElement = document.querySelector('.b-3') as HTMLElement;
btn3.addEventListener('click', f3);

const btn4: HTMLElement = document.querySelector('.b-4') as HTMLElement;
btn4.addEventListener('click', f4);

const btn5: HTMLElement = document.querySelector('.b-5') as HTMLElement;
btn5.addEventListener('click', (): void => {
    console.log(f5());
    console.log(a5);
});

const btn6: HTMLElement = document.querySelector('.b-6') as HTMLElement;
btn6.addEventListener('click', (): void => {
    const inputElem: HTMLInputElement = document.querySelector('.i-6') as HTMLInputElement;
    const elem: string = inputElem.value;
    console.log(f6(elem));
});

const btn7: HTMLElement = document.querySelector('.b-7') as HTMLElement;
btn7.addEventListener('click', (): void => {
    console.log(f7());
});

const btn8: HTMLElement = document.querySelector('.b-8') as HTMLElement;
btn8.addEventListener('click', f8);

const btn9: HTMLElement = document.querySelector('.b-9') as HTMLElement;
btn9.addEventListener('click', f9);

const btn10: HTMLElement = document.querySelector('.b-10') as HTMLElement;
// Note: We pass f10 as a callback instead of invoking it immediately.
btn10.addEventListener('click', f10);

export {};