export const isArr = Array.isArray;

export const arrayfy = (arr) => (!arr ? [] : isArr(arr) ? arr : [arr]);

export const isStr = (s) => typeof s === "number" || typeof s === "string";
