export {};

// TASK 01
let a1: number[] = [13, 15, 22, 23, 26, 35, 72];
let a1_from: number = 23;
let a1_to: number = 27;

const f1 = (): void => {
    const res: number | undefined = a1.find((item: number): boolean => {
        return item > a1_from && item < a1_to;
    });
    const out1: HTMLElement = document.querySelector('.out-1') as HTMLElement;
    out1.textContent = res !== undefined ? String(res) : 'undefined';
};

// TASK 02
let a2: number[] = [13, 15, 22, 23, 26, 35, 72];
let a2_from: number = 23;
let a2_to: number = 27;

const f2 = (): void => {
    const res: number | undefined = a2.find((item: number): boolean => item > a2_from && item < a2_to);
    const out2: HTMLElement = document.querySelector('.out-2') as HTMLElement;
    out2.textContent = res !== undefined ? String(res) : 'false';
};

// TASK 03
let a3: number[] = [13, 15, 22, 23, 26, 35, 72];
let a3_from: number = 14;
let a3_to: number = 25;
let a3_res: number[] = [];

const f3 = (): void => {
    a3_res = [];
    const arr: number[] = a3.filter((item: number): boolean => item > a3_from && item < a3_to);
    for (const item of arr) {
        a3_res.push(item);
    }
    const out3: HTMLElement = document.querySelector('.out-3') as HTMLElement;
    out3.textContent = a3_res[0] !== undefined ? String(a3_res[0]) : '';
};

// TASK 04
// Функция с помощью FIND находит первый элемент строки str4, который лежит от a4_from до a4_to (строго больше, строго меньше).
let str4: string = 'a_baba_galamaga_tvoe_korito_est_nesti';
let a4_from: string = 'k';
let a4_to: string = 't';

const f4 = (): void => {
    const arr: string[] = str4.split(' ');
    const index_from: number = str4.indexOf(a4_from);
    const index_to: number = str4.indexOf(a4_to);
    const res: string | undefined = arr.find((item: string, index: number): boolean => {
        return index > index_from && index < index_to;
    });
    console.log(res);
    const out4: HTMLElement = document.querySelector('.out-4') as HTMLElement;
    out4.textContent = res !== undefined ? res : 'undefined';
};

// TASK 05
let a5: number[] = [13, 15, 22, 23, 26, 35, 72];
let a5_from: number = 23;
let a5_to: number = 67;

const f5 = (): void => {
    const res: number = a5.findIndex((item: number): boolean => item > a5_from && item < a5_to);
    const out5: HTMLElement = document.querySelector('.out-5') as HTMLElement;
    out5.textContent = res !== -1 ? String(res) : '-1';
};

// TASK 06
let a6: number[] = [13, 15, 22, 23, 26, 35, 72];
let a6_from: number = 23;
let a6_to: number = 67;

const f6 = (): void => {
    const from: number = a6.findIndex((item: number): boolean => item > a6_from && item < a6_to);
    const num: number | undefined = a6.find((item: number): boolean => item > a6_from && item < a6_to);
    const lastIndex: number = num !== undefined ? a6.lastIndexOf(num, from) : -1;
    const out6: HTMLElement = document.querySelector('.out-6') as HTMLElement;
    out6.textContent = String(lastIndex);
};

// TASK 07
let str7: string = 'cccaBCcbBDabBddcCadcDbACacbbCdbBCADBDBdaAdcCd';
let a7_1: string = 'C';

const f7 = (): void => {
    const res: number = str7.lastIndexOf(a7_1);
    const out7: HTMLElement = document.querySelector('.out-7') as HTMLElement;
    out7.textContent = res !== -1 ? String(res) : '-1';
};

// TASK 08
// При поиске в данном задании реализуем поиск независимо от регистра.
let str8: string = 'C#CdABd$d@$Ab!#@#bcAaB@c$D#@AD$A!b#!D!BB@CaAD@###@';
let a8_1: string = 'a';

const f8 = (): void => {
    const lowerStr: string = str8.toLowerCase();
    const lowerLetter: string = a8_1.toLowerCase();
    const res: number = lowerStr.lastIndexOf(lowerLetter);
    const out8: HTMLElement = document.querySelector('.out-8') as HTMLElement;
    out8.textContent = String(res);
};

// TASK 09
let a9: string[] = ['2', '17', '45', '5', '14', '5', '45', '107'];
let a9_1: string = '5';

const f9 = (): void => {
    const res: number = a9.lastIndexOf(a9_1);
    const out9: HTMLElement = document.querySelector('.out-9') as HTMLElement;
    out9.textContent = String(res);
};

// TASK 10
let a10: number[] = [-2, 3, -4, 5, -6, 7];
let a11: number[] = [0, 4, 22];
let a10_res: number[] = [];

const f10 = (): void => {
    a10_res = [];
    for (let i: number = 0; i < a11.length; i++) {
        const index: number = a11[i];
        if (index >= 0 && index < a10.length) {
            a10_res.push(a10[index]);
        }
    }
    const out10: HTMLElement = document.querySelector('.out-10') as HTMLElement;
    out10.textContent = a10_res.join(' ');
};

// Event listeners with explicit type annotations.
const btn1: HTMLElement = document.querySelector('.b-1') as HTMLElement;
btn1.addEventListener('click', f1);

const btn2: HTMLElement = document.querySelector('.b-2') as HTMLElement;
btn2.addEventListener('click', f2);

const btn3: HTMLElement = document.querySelector('.b-3') as HTMLElement;
btn3.addEventListener('click', f3);

const btn4: HTMLElement = document.querySelector('.b-4') as HTMLElement;
btn4.addEventListener('click', f4);

const btn5: HTMLElement = document.querySelector('.b-5') as HTMLElement;
btn5.addEventListener('click', f5);

const btn6: HTMLElement = document.querySelector('.b-6') as HTMLElement;
btn6.addEventListener('click', f6);

const btn7: HTMLElement = document.querySelector('.b-7') as HTMLElement;
btn7.addEventListener('click', f7);

const btn8: HTMLElement = document.querySelector('.b-8') as HTMLElement;
btn8.addEventListener('click', f8);

const btn9: HTMLElement = document.querySelector('.b-9') as HTMLElement;
btn9.addEventListener('click', f9);

const btn10: HTMLElement = document.querySelector('.b-10') as HTMLElement;
btn10.addEventListener('click', f10);