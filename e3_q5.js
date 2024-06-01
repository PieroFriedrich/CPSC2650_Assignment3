//task 1
const listApply = (list, f) => {
    const newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray.push(f(list[i]));
    }
    return newArray;
}

//task 2
const cadToUsd = cad => cad * 0.73;

//task 3
const cadsToUsds = (cads) => listApply(cads, cadToUsd);

//task 4
const isOdd = (x) => x % 2 === 1;
const every = (array, f) => {
    return array.reduce((accumulator, result) => accumulator && f(result), true);
}

//task 5 (tests)
function assert(value, message) {
    if (!value) {
        throw new Error(message || "Assertion failed");
    }
}

function assertEquals(actual, expected, message) {
    if (actual != expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
}

function assertListEquals(actual, expected, message) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
        throw new Error(message || `Expected both arguments to be arrays`);
    }
    if (actual.length !== expected.length) {
        throw new Error(
            message ||
            `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
        );
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            throw new Error(
                message ||
                `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
            );
        }
    }
}

//test 1
assertListEquals(
    listApply([1, 2, 3], (x) => x + 1),
    [2, 3, 4]
);

//test 2
assertEquals(
    cadToUsd(1),
    0.73
);

assertEquals(
    cadToUsd(10),
    7.3
);

//test 3
assertListEquals(
    cadsToUsds([1, 2, 3]),
    [0.73, 1.46, 2.19]
);

//test 4
assert(
    every([1, 3, 5], isOdd) == true
);

assert(
    every([1, 2, 3], isOdd) == false
);

console.log("Test completed!");