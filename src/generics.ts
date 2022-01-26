// GENERICS

function createArray<T>(items: T[]): T[]{
    return new Array().concat()
}

const stringArray = createArray<string>(['Solomon', 'Developer'])
const numberArray = createArray<number>([20, 11])
