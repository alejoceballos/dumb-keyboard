import { equation, display, OPERATIONS } from './Calculator.service';

const { SUM } = OPERATIONS;

describe('Calculator Service', () => {
    describe('Equation', () => {
        it('should display numbers and operations accumulated', () => {
            const eq = equation(1)(SUM)(1)(SUM)(1);
            expect(display(eq)).toBe('1 + 1 + 1');
        });
    });
});
