describe('unit_02 tests', () => {
    let mockOutElement: { textContent: string };

    beforeEach((): void => {
        // Create a simple mock object for any element with a textContent property.
        mockOutElement = { textContent: '' };
        // Spy on document.querySelector to return our mock object for any selector.
        jest.spyOn(document, 'querySelector').mockImplementation((selector: string): Element | null => {
            return mockOutElement as unknown as Element;
        });
    });

    afterEach((): void => {
        jest.restoreAllMocks();
    });

    it('should set textContent to "true" for f3 when input is present in one of a3 arrays', () => {
        // Mock the .i-3 input element value via overriding querySelector for that selector.
        const inputMock = { value: '3' } as HTMLInputElement;
        jest.spyOn(document, 'querySelector').mockImplementation((selector: string): Element | null => {
            if (selector === '.i-3') return inputMock as unknown as Element;
            return mockOutElement as unknown as Element;
        });
        // Call f3 – it checks input and writes to our mock element.
        f3();
        expect(mockOutElement.textContent).toBe('true');
    });

    it('should set textContent to "false" for f3 when input is missing in a3 arrays', () => {
        const inputMock = { value: '100' } as HTMLInputElement;
        jest.spyOn(document, 'querySelector').mockImplementation((selector: string): Element | null => {
            if (selector === '.i-3') return inputMock as unknown as Element;
            return mockOutElement as unknown as Element;
        });
        f3();
        expect(mockOutElement.textContent).toBe('false');
    });

    it('should set textContent to "true" for f7 when the element is found in a7', () => {
        // f7 takes two arguments: the array and the element to look for.
        // a7 is [21,22,23,24,25,26,27] so testing for 23 should yield "true".
        f7([21, 22, 23, 24, 25, 26, 27], 23);
        expect(mockOutElement.textContent).toBe('true');
    });

    it('should set textContent to "false" for f7 when the element is NOT found in a7', () => {
        f7([21, 22, 23, 24, 25, 26, 27], 100);
        expect(mockOutElement.textContent).toBe('false');
    });
});