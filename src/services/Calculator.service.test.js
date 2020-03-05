import { equation, display, OPERATIONS } from './Calculator.service';

const { SUM, EQUALS } = OPERATIONS;

describe('Calculator Service', () => {
    describe('Display', () => {
        it('should display a very simple sum', () => {
            const eq = equation(1)(SUM)(2);
            expect(display(eq)).toBe('1 + 2');
        });

        it('should display a sum with 3 numbers', () => {
            const eq = equation(1)(SUM)(2)(SUM)(3);
            expect(display(eq)).toBe('1 + 2 + 3');
        });
    });

    describe('Calculate', () => {
        it('should calculate a very simple sum', () => {
            const eq = equation(1)(SUM)(2)(EQUALS);
            expect(display(eq)).toBe('3');
        });

        it('should calculate a two results sum', () => {
            const eq = equation(1)(SUM)(2)(EQUALS)(SUM)(3)(EQUALS);
            expect(display(eq)).toBe('6');
        });
    });
});
