/**
 * An extremely fast function for deep-cloning an object which only contains simple
 * values, i.e. primitives, arrays and nested simple objects.
 */
export function simpleDeepClone<T>(input: T): T {
    // if not array or object or is null return self
    if (typeof input !== 'object' || input === null) {
        return input;
    }
    let output: any;
    let i: number | string;
    // handle case: array
    if (input instanceof Array) {
        let l;
        output = [] as any[];
        for (i = 0, l = input.length; i < l; i++) {
            output[i] = simpleDeepClone(input[i]);
        }
        return output;
    }
    // handle case: object
    output = {};
    for (i in input) {
        if (input.hasOwnProperty(i)) {
            output[i] = simpleDeepClone((input as any)[i]);
        }
    }
    return output;
}