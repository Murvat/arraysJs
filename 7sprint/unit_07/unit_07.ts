export {};

// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью isArray проверяет a1. Результат проверки — вывести в out-1.
let a1: number[] = [5, 6, 7, 8, 44, 21, 43, 26, 78, 100, -2, 0, 17];

const f1 = (): void => {
    const out1: HTMLElement = document.querySelector('.out-1') as HTMLElement;
    out1.innerHTML = String(Array.isArray(a1));
};

// TASK 02
// Выполним эмуляцию метода isArray. Функция берет переменную a2 и проверяет, что она является массивом.
let a2: number[] = [22, 33, 44, 55, 66, 77, 88, 99];

const f2 = (): void => {
    try {
        a2.push(5);
        console.log(true);
    } catch {
        console.log(false);
    }
};

// TASK 03
// Функция f3 применяет reduce к a3 и выводит accum и item в консоль.
let a3: number[] = [2, 3, 4, 5];

const f3 = (): void => {
    console.clear();
    a3.reduce((accum: number, item: number): number => {
        console.log('accum: ' + accum);
        console.log('item: ' + item);
        console.log('==============');
        // No return here: undefined return leads to the next accum value as undefined.
        return 0; // Added a dummy return to satisfy TypeScript; note that without proper return logic, reduce may not behave as intended.
    });
};

// TASK 04
// Функция f4 применяет reduce к a4, выводит accum и item, и возвращает item.
let a4: number[] = [2, 3, 4, 5];

const f4 = (): void => {
    console.clear();
    const res: number = a4.reduce((accum: number, item: number): number => {
        console.log('accum: ' + accum);
        console.log('item: ' + item);
        console.log('==============');
        return item;
    });
    // Optionally log res if needed.
};

// TASK 05
// Функция f5 суммирует элементы массива a5 с помощью reduce и выводит результат в out-5.
let a5: number[] = [2, 3, 4, 5, 6];

const f5 = (): void => {
    const res: number = a5.reduce((accum: number, item: number): number => accum + item);
    const out5: HTMLElement = document.querySelector('.out-5') as HTMLElement;
    out5.textContent = String(res);
};

// TASK 06
// Функция f6 перемножает элементы массива a6 с помощью reduce и выводит результат в out-6.
let a6: number[] = [2, 3, 4];

const f6 = (): void => {
    const res: number = a6.reduce((accum: number, item: number): number => accum * item);
    const out6: HTMLElement = document.querySelector('.out-6') as HTMLElement;
    out6.textContent = String(res);
};

// TASK 07
// Функция f7 суммирует положительные элементы массива a7 с помощью reduce и выводит результат в out-7.
let a7: number[] = [3, -4, 5, -6, 7];  // результат 15

const f7 = (): void => {
    const res: number = a7.reduce((accum: number, item: number): number => {
        if (item > 0) {
            return accum + item;
        }
        return accum;
    }, 0);
    const out7: HTMLElement = document.querySelector('.out-7') as HTMLElement;
    out7.textContent = String(res);
};

// TASK 08
// Функция f8 суммирует положительные элементы массива a8 с reduce (начальное значение 0) и выводит результат в out-8.
let a8: number[] = [-2, 3, -4, 5, -6, 7];  // результат 15

const f8 = (): void => {
    const res: number = a8.reduce((accum: number, item: number): number => {
        if (item > 0) {
            return accum + item;
        }
        return accum;
    }, 0);
    const out8: HTMLElement = document.querySelector('.out-8') as HTMLElement;
    out8.textContent = String(res);
};

// TASK 09
// Функция f9 перемножает положительные элементы массива a9 с reduce и выводит результат в out-9.
let a9: number[] = [-2, 3, -4, 5, -6, 7];  // 105

const f9 = (): void => {
    const res: number = a9.reduce((acc: number, item: number): number => {
        if (item > 0) {
            return acc * item;
        }
        return acc;
    }, 1);
    const out9: HTMLElement = document.querySelector('.out-9') as HTMLElement;
    out9.textContent = String(res);
};

// TASK 10
// Функция f10 с помощью reduce выводит в out-10 массив, где в нулевом элементе сумма положительных, а в первом — сумма отрицательных элементов массива a10.
let a10: number[] = [-2, 3, -4, 5, -6, 7];  // ожидаемый результат: [15, -12]

const f10 = (): void => {
    const res: [number, number] = a10.reduce((accum: [number, number], item: number): [number, number] => {
        if (item > 0) {
            accum[0] += item;
        } else {
            accum[1] += item;
        }
        return accum;
    }, [0, 0]);
    const out10: HTMLElement = document.querySelector('.out-10') as HTMLElement;
    out10.innerHTML = res.toString();
};

// TASK 11
// Функция f11 находит самое большое число в массиве a11 и выводит его в out-11.
let a11: number[] = [-2, 3, 14, 5, -6, 7];  // ожидаемый результат: 14

const f11 = (): void => {
    const res: number = a11.reduce((accum: number, item: number): number => {
        return accum > item ? accum : item;
    });
    const out11: HTMLElement = document.querySelector('.out-11') as HTMLElement;
    out11.textContent = String(res);
};

// TASK 12
// Функция f12 находит индекс самого большого числа в массиве a12 с помощью reduce и выводит его в out-12.
let a12: number[] = [-2, 3, 14, 15, -6, 7];

const f12 = (): void => {
    const res: number = a12.reduce((accum: number, item: number, index: number): number => {
        if (a12[accum] < item) {
            return index;
        }
        return accum;
    }, 0);
    const out12: HTMLElement = document.querySelector('.out-12') as HTMLElement;
    out12.innerHTML = String(res);
};

// TASK 13
// Функция f13 выводит длину самого большого вложенного массива в a13 в out-13.
let a13: number[][] = [[4, 4, 4], [4, 4], [4, 4, 4, 4], [4], [4, 4]];

const f13 = (): void => {
    const res: number = a13.reduce((accum: number, item: number[]): number => {
        return item.length > accum ? item.length : accum;
    }, 0);
    const out13: HTMLElement = document.querySelector('.out-13') as HTMLElement;
    out13.textContent = String(res);
};

// TASK 14
// Функция f14 выводит самый большой вложенный массив из a14 в out-14.
let a14: number[][] = [[4, 4, 4], [4, 4], [4, 4, 4, 4], [4], [4, 4]];

const f14 = (): void => {
    const res: number[] = a14.reduce((accum: number[], item: number[]): number[] => {
        return item.length > accum.length ? item.slice() : accum;
    }, []);
    const out14: HTMLElement = document.querySelector('.out-14') as HTMLElement;
    out14.innerHTML = res.join(' ');
};

// TASK 15
// Функция f15 вычисляет среднюю температуру из массива a15 и выводит её в out-15.
let a15: number[] = [0, 0, 1, 1, 1, 0, 2, 2, 3, 3, 3, 4, 5, 5, 6, 4, 4, 3, 1, 1, 0, 0, -1];

const f15 = (): void => {
    const total: number = a15.reduce((accum: number, item: number): number => accum + item, 0);
    const res: number = total / a15.length;
    const out15: HTMLElement = document.querySelector('.out-15') as HTMLElement;
    out15.innerHTML = String(res);
};

// TASK 16
// Функция f16 переиндексирует массив a16 в объект с ключами id и значениями name, выводит его в out-16.
interface IA16Item {
    id: number;
    name: string;
}
let a16: IA16Item[] = [
    { id: 45, name: "Ivar" },
    { id: 464, name: "Astor" },
    { id: 17, name: "Bristol" }
];

const f16 = (): void => {
    const res: { [key: number]: string } = a16.reduce((accum: { [key: number]: string }, item: IA16Item): { [key: number]: string } => {
        accum[item.id] = item.name;
        return accum;
    }, {});
    let out: string = '';
    for (const key in res) {
        out += key + ' ' + res[Number(key)] + '</br>';
    }
    const out16: HTMLElement = document.querySelector('.out-16') as HTMLElement;
    out16.innerHTML = out;
};

// TASK 17
// Функция f17 преобразует объект a17 в массив, содержащий только название стран, и выводит результат в out-17.
interface IA17 {
    [key: string]: string;
}
let a17: IA17 = {
    "Lyon": "France",
    "Berlin": "Germany",
    "Paris": "France"
};

let a17_res: string[] = [];

const f17 = (): void => {
    a17_res = []; // reset before use
    const entries: [string, string][] = Object.entries(a17);
    entries.reduce((accum: string[], item: [string, string]): string[] => {
        accum.push(item[1]);
        return accum;
    }, a17_res);
    const out17: HTMLElement = document.querySelector('.out-17') as HTMLElement;
    out17.textContent = a17_res.join(' ');
};

// TASK 18
// Функция f18 выводит массив a18 в цикле ключ-значение (через reduce) в out-18.
let a18: number[] = [];
a18[100] = 67;
a18[2000] = 15;

const f18 = (): void => {
    const res: string = a18.reduce((accum: string, item: number, index: number): string => {
        return accum + `${index} ${item} </br> `;
    }, '');
    const out18: HTMLElement = document.querySelector('.out-18') as HTMLElement;
    out18.innerHTML = res;
};

// TASK 19
// Функция f19 выводит массив a19 в формате индекс значение (через reduce) в out-19.
let a19: string = 'hello';

const f19 = (): void => {
    const res: string = a19.split('').reduce((accum: string, item: string, index: number): string => {
        return accum + `${index} ${item} </br>`;
    }, '');
    const out19: HTMLElement = document.querySelector('.out-19') as HTMLElement;
    out19.innerHTML = res;
};

// TASK 20
// Функция f20 переворачивает массив a20 с помощью reduce и выводит результат в out-20.
let a20: number[] = [4, 5, 6];

const f20 = (): void => {
    const res: number[] = a20.reduce((accum: number[], item: number): number[] => {
        accum.unshift(item);
        return accum;
    }, []);
    const out20: HTMLElement = document.querySelector('.out-20') as HTMLElement;
    out20.textContent = res.join(' ');
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
(document.querySelector('.b-9') as HTMLElement).addEventListener('click', f9);
(document.querySelector('.b-10') as HTMLElement).addEventListener('click', f10);
(document.querySelector('.b-11') as HTMLElement).addEventListener('click', f11);
(document.querySelector('.b-12') as HTMLElement).addEventListener('click', f12);
(document.querySelector('.b-13') as HTMLElement).addEventListener('click', f13);
(document.querySelector('.b-14') as HTMLElement).addEventListener('click', f14);
(document.querySelector('.b-15') as HTMLElement).addEventListener('click', f15);
(document.querySelector('.b-16') as HTMLElement).addEventListener('click', f16);
(document.querySelector('.b-17') as HTMLElement).addEventListener('click', f17);
(document.querySelector('.b-18') as HTMLElement).addEventListener('click', f18);
(document.querySelector('.b-19') as HTMLElement).addEventListener('click', f19);
(document.querySelector('.b-20') as HTMLElement).addEventListener('click', f20);