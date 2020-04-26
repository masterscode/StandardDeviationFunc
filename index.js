'given four variables with inputed data';

// const A = [132, 94, 53, 114, 83, 114, 104, 46];
// const B = [144, 74, 130, 55, 86, 47, 277, 79, 3];
// const C = [1243, 39, 345, 1431, 438, 3411, 4310, 346];
// const D = [12, 94, 54, 11,38, 1341, 10, 634];
const A = [12, 9, 5, 11, 8, 11, 10, 6];
const B = [11, 7, 10, 5, 8, 4, 2, 9, 3];
const C = [12, 9, 5, 11, 8, 11, 10, 6];
const D = [12, 9, 5, 11, 8, 11, 10, 6];

`the focus is that the program should 
calculate for the mean and use the mean
to calculate for the standard deviation

from A if any of the numbers is less than 
2 times the standard deviation A should
display Green, if any of the numbers is 
greater than 2 times the standard deviation
but less than 4 times the standard deviation 
A should display Yellow,
if any of the number is greater than or equal to
4 times the standard deviation A should display Red`;





//calculate the mean
// ∑x/n
const Mean = values => {
    let n = values.length;
    summation = values.reduce((value, sum) => value + sum );
    return summation / n;
};


//calculate the square of the mean difference
//∑(x-µ)²
const SumOfMeanDiff = (x, mean) => {
    md = x.map(value => (value - mean) ** 2);
    smd = md.reduce((val,sum) => val + sum);
    return smd;
};


//calculate the sd
//√∑(x-µ)²/n

const StandardDeviation = x =>  (SumOfMeanDiff( x, Mean(x)) ** (1/2) )/ x.length;

//then make comparison
const Check = x =>{
    let result = '';
    x.forEach(v => {
        if(v < (StandardDeviation(x) * 2 )){
            result =  'black';
        }else if(v > (StandardDeviation(x) * 2 ) && v < (StandardDeviation(x) * 4 )){
            result =  'YELLOW';
        }else if(v >= (StandardDeviation(x) * 4 )){
            result =  'RED';
        } else{
            result = 'e no work 😂';
        }
    });
    return result;
};

console.log('the Standard Deviation for A is: '+StandardDeviation(A));
console.log('the Standard Deviation for B is: '+StandardDeviation(B));
console.log('the Standard Deviation for C is: '+StandardDeviation(C));
console.log('the Standard Deviation for D is: '+StandardDeviation(D));
console.log('--------------------------------------------');
console.log('the result for A is: '+Check(A));
console.log('the result for B is: '+Check(B));
console.log('the result for C is: '+Check(C));
console.log('the result for D is: '+Check(D));