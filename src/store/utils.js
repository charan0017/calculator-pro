export const isNumber = n => /[0-9]*/.test(n);
export const isInt = (n) => Number(n) === n && n % 1 === 0;
export const isFloat = (n) => Number(n) === n && n % 1 !== 0;
export const replaceNumberInNestedString = (str, joinStr) => {
    const rightIndex = str.indexOf(')');
    const leftIndex = str.split('').reverse().join('').indexOf('(');
    return str.replace(/\d+/, `${joinStr}(${str.substring(str.length - leftIndex, rightIndex)})`);
};
