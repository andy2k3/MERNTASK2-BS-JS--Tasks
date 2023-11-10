function reverseNumber(number) {

    const reverse = number.toString().split('').reverse().join('');

    return parseInt(reverse, 10);
}


const num = 32243;
console.log(reverseNumber(num)); 
