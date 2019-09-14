const calculate = (array1, operation, array2) => {
    let total;
    const val1 = Number(array1.join(""));
    const val2 = Number(array2.join(""));

    if (operation === '+') {
      total = val1 + val2
    }

    if (operation === '-') {
      total = val1 - val2
    }

    if (operation === 'X') {
      total = val1 * val2
    }

    if (operation === '/') {
      total = val1 / val2
    }

    return total
}

export default calculate;