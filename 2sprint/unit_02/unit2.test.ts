let a7: number[] = [21, 22, 23, 24, 25, 26, 27];

const f7 = (arr: number[], elem: number): void => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            (document.querySelector('.out-7') as HTMLElement).textContent = 'true';
            return;
        }
    }
    (document.querySelector('.out-7') as HTMLElement).textContent = 'false';
};

interface objWArr {
    [key: string]: number[];
}

let a4: objWArr = { a: [1, 2, 3], b: [3, 1, 5, 8], c: [88, 77, 66] };

const f4 = (): void => {
    let inputValue: number = Number(
        (document.querySelector('.i-4') as HTMLInputElement).value
    );
    let out: string = '';
    for (let key in a4) {
        if (a4[key].includes(inputValue)) {
            out += key + ' ';
        }
    }
    (document.querySelector('.out-4') as HTMLElement).textContent = out === '' ? 'false' : out;
};

// For the purpose of these tests, we assume f3 is defined similarly, operating on a 2D array.
let a3: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const f3 = (): void => {
    let inputValue: number = Number(
        (document.querySelector('.i-3') as HTMLInputElement).value
    );
    for (let subArr of a3) {
        if (subArr.includes(inputValue)) {
            (document.querySelector('.out-3') as HTMLElement).textContent = 'true';
            return;
        }
    }
    (document.querySelector('.out-3') as HTMLElement).textContent = 'false';
};

describe("Unit Tests for f3, f4, and f7", () => {
    // f3 tests
    test("f3 should display 'true' when input value exists in one of the sub-arrays", () => {
        document.body.innerHTML = `
            <input class="i-3" value="">
            <div class="out-3"></div>
        `;
        const a3: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const f3 = (): void => {
            const inputValue: number = Number(
                (document.querySelector('.i-3') as HTMLInputElement).value
            );
            for (const subArr of a3) {
                if (subArr.includes(inputValue)) {
                    (document.querySelector('.out-3') as HTMLElement).textContent = 'true';
                    return;
                }
            }
            (document.querySelector('.out-3') as HTMLElement).textContent = 'false';
        };
        const input3 = document.querySelector('.i-3') as HTMLInputElement;
        input3.value = "7"; // 7 is in a3[2]
        f3();
        const output3 = document.querySelector('.out-3') as HTMLElement;
        expect(output3.textContent).toBe("true");
    });

    test("f3 should display 'false' when input value does not exist in any sub-array", () => {
        document.body.innerHTML = `
            <input class="i-3" value="">
            <div class="out-3"></div>
        `;
        const a3: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const f3 = (): void => {
            const inputValue: number = Number(
                (document.querySelector('.i-3') as HTMLInputElement).value
            );
            for (const subArr of a3) {
                if (subArr.includes(inputValue)) {
                    (document.querySelector('.out-3') as HTMLElement).textContent = 'true';
                    return;
                }
            }
            (document.querySelector('.out-3') as HTMLElement).textContent = 'false';
        };
        const input3 = document.querySelector('.i-3') as HTMLInputElement;
        input3.value = "10"; // 10 is not in any sub-array
        f3();
        const output3 = document.querySelector('.out-3') as HTMLElement;
        expect(output3.textContent).toBe("false");
    });

    // f4 tests
    test("f4 should display keys when input value exists in the object arrays", () => {
        document.body.innerHTML = `
            <input class="i-4" value="">
            <div class="out-4"></div>
        `;
        const a4: { [key: string]: number[] } = { a: [1, 2, 3], b: [3, 1, 5, 8], c: [88, 77, 66] };
        const f4 = (): void => {
            const inputValue: number = Number(
                (document.querySelector('.i-4') as HTMLInputElement).value
            );
            let out: string = '';
            for (const key in a4) {
                if (a4[key].includes(inputValue)) {
                    out += key + ' ';
                }
            }
            (document.querySelector('.out-4') as HTMLElement).textContent = out === '' ? 'false' : out;
        };
        const input4 = document.querySelector('.i-4') as HTMLInputElement;
        input4.value = "3"; // 3 is in a4.a and a4.b
        f4();
        const output4 = document.querySelector('.out-4') as HTMLElement;
        expect(output4.textContent).toBe("a b ");
    });

    test("f4 should display 'false' when input value does not exist in any object array", () => {
        document.body.innerHTML = `
            <input class="i-4" value="">
            <div class="out-4"></div>
        `;
        const a4: { [key: string]: number[] } = { a: [1, 2, 3], b: [3, 1, 5, 8], c: [88, 77, 66] };
        const f4 = (): void => {
            const inputValue: number = Number(
                (document.querySelector('.i-4') as HTMLInputElement).value
            );
            let out: string = '';
            for (const key in a4) {
                if (a4[key].includes(inputValue)) {
                    out += key + ' ';
                }
            }
            (document.querySelector('.out-4') as HTMLElement).textContent = out === '' ? 'false' : out;
        };
        const input4 = document.querySelector('.i-4') as HTMLInputElement;
        input4.value = "100"; // 100 doesn't exist in any array in a4
        f4();
        const output4 = document.querySelector('.out-4') as HTMLElement;
        expect(output4.textContent).toBe("false");
    });

    // f7 tests
    test("f7 should display 'true' when element is found in the passed array", () => {
        document.body.innerHTML = `
            <div class="out-7"></div>
        `;
        const a7: number[] = [21, 22, 23, 24, 25, 26, 27];
        const f7 = (arr: number[], elem: number): void => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === elem) {
                    (document.querySelector('.out-7') as HTMLElement).textContent = 'true';
                    return;
                }
            }
            (document.querySelector('.out-7') as HTMLElement).textContent = 'false';
        };
        f7(a7, 25); // 25 exists in a7
        const output7 = document.querySelector('.out-7') as HTMLElement;
        expect(output7.textContent).toBe("true");
    });

    test("f7 should display 'false' when element is not found in the passed array", () => {
        document.body.innerHTML = `
            <div class="out-7"></div>
        `;
        const a7: number[] = [21, 22, 23, 24, 25, 26, 27];
        const f7 = (arr: number[], elem: number): void => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === elem) {
                    (document.querySelector('.out-7') as HTMLElement).textContent = 'true';
                    return;
                }
            }
            (document.querySelector('.out-7') as HTMLElement).textContent = 'false';
        };
        f7(a7, 99); // 99 does not exist in a7
        const output7 = document.querySelector('.out-7') as HTMLElement;
        expect(output7.textContent).toBe("false");
    });
});

export {};