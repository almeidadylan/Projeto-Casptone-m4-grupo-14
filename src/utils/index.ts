export const transforBitsInMegabytes = (number: number) => {
    //const num =  Number.parseInt(number)
    const div1 = number / 1024;
    const div2 = div1 / 1024;

    return `${parseFloat(div2.toFixed(2))} mb`
};