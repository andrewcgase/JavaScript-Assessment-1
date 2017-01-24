//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

var sum = num10 + string8 + one
// sum is '1081'

//2. write a loop that will log only numbers divisible by 3 between 20 - 100


var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

for(var i = 0; i<scores.length; i++){
    var num = scores[i]
    if(num % 3 === 0 && num >19 && num <101){
        console.log(num)
    }
}

