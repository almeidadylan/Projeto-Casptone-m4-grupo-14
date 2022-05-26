export const transforBitsInMegabytes = (number: number) => {
    const div1 = number / 1024;
    const div2 = div1 / 1024;

    const num = `${Number.parseFloat(div2.toFixed(2))}`

    return Number.parseFloat(num)
};