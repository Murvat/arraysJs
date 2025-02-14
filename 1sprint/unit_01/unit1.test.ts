
describe('unit1 cases', () => {
    it('', () => {
        
     });
    it('expected tobe falsy', () => {
        const a2: number[] = [4, 12, 4, 2, 15, 98];
        const inputValue: number = 5;
        const res: boolean | number = a2.indexOf(inputValue) === -1 ? false : a2.indexOf(inputValue);
            expect(res).toBeFalsy();
     });
    it('expected ', () => {
        let a8: number[] = [1, 2, 3, 1, 3, 2, 55, 23, 53, 24, 55, 3, 1, 5, 2, 3, 5, 4, 6, 7, 12, 53];
        let res08: number[] = [];
        let inputValue: number = 5;
        let func = (input: number[]) => {
            for (let i: number = 0; i < a8.length; i++) {
                if (a8[i] === inputValue) {
                    if (res08.indexOf(i) === -1) {
                        res08.push(i);
                    }
                }
            };
        };
        func(a8);
        const expected = [13, 16]
        expect(res08).toStrictEqual(expected);
 });
    it('', () => {
    let a9: number[][] = [
    [55, 22, 33],
    [3, 4, 22, 7],
    [66, 2, 12, 55],
    [142, 12, 7, 15],
    [45, 12, 67, 32]
];
    let out: string = '';

const f9 = (arr:number[][] ): void => {
    let inputValue: number = 7;
    for (let i: number = 0; i < a9.length; i++) {
        for (let k: number = 0; k < a9[i].length; k++) {
            if (a9[i][k] === inputValue) {
                out += i.toString() + ' ';
                break; // Found the match; proceed to next sub-array.
            }
        }
    }
}
        f9(a9);
        const expected = '1 3 ';
        expect(out).toBe(expected);
     });
})