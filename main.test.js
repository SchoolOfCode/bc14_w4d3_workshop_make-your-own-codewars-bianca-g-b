//👉 Write your tests below here:
import { test, expect } from '@jest/globals';
import { modifyArrayOfNums } from './main.js';


test("modifyArrayOfNums should return an empty array", () => {
    expect(modifyArrayOfNums([])).toStrictEqual([]);
})

test("modifyArrayOfNums should return the same array if the array has only one element", () => {
    expect(modifyArrayOfNums([1545])).toStrictEqual([1545]);
});

test("modifyArrayOfNums should return an array containing the sum of the 2 numbers", () => {
    expect(modifyArrayOfNums([58, 2])).toStrictEqual([60]);
});

test("modifyArrayOfNums should return an array containing the sum of the 2 numbers and the last number unchanged", () => {
    expect(modifyArrayOfNums([58, 2, 30])).toStrictEqual([60, 30]);
});

test("modifyArrayOfNums should return an array containing the sums of pairs of numbers", () => {
    expect(modifyArrayOfNums([12, 250, 5, 34, 5624, 689])).toStrictEqual([262, 39, 6313])
});

test("modifyArrayOfNums should return an array containing the sums of pairs of numbers and the last number unchanged", () => {
    expect(modifyArrayOfNums([12, 250, 5, 34, 5624, 689, 1])).toStrictEqual([262, 39, 6313, 1])
});

test("modifyArrayOfNums should return an array containing the sums of pairs of numbers and the last number unchanged", () => {
    expect(modifyArrayOfNums([12, -250, -5, 34, -5624, -689, -4])).toStrictEqual([-238, 29, -6313, -4])
});
