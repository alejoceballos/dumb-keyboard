import { equation, display, OPERATIONS } from './Calculator.service';

const { SUM, SUBTRACT, MULTIPLY, DIVIDE, EQUALS } = OPERATIONS;

describe('Calculator Service', () => {
    describe('Display', () => {
        it('should display a very simple sum', () => {
            let eq = equation(1);
            eq = eq(SUM);
            eq = eq(2);
            expect(display(eq)).toBe('1 + 2');
        });

        it('should display a sum with 3 numbers', () => {
            const eq = equation(1)(SUM)(2)(SUM)(3);
            expect(display(eq)).toBe('1 + 2 + 3');
        });

        it('should display an equation with all possible basic operations', () => {
            const eq = equation(1)(SUM)(2)(MULTIPLY)(3)(SUBTRACT)(4)(DIVIDE)(5);
            expect(display(eq)).toBe('1 + 2 x 3 - 4 ÷ 5');
        });

        it('should replace the first number for the next one if its value is zero', () => {
            const eq = equation(0)(1);
            expect(display(eq)).toBe('1');
        });

        it('should replace the last number for the next one if its value is zero', () => {
            const eq = equation(1)(SUM)(0)(2);
            expect(display(eq)).toBe('1 + 2');
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

        it('should calculate an equation with all possible basic operations', () => {
            const eq = equation(1)(SUM)(2)(MULTIPLY)(3)(SUBTRACT)(4)(DIVIDE)(5)(EQUALS);
            expect(display(eq)).toBe('1');
        });
    });
});
