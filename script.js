/* JavaScript code here */
//Task1
console.log("External JS")

//Task2
function sumArray(arr){
    var sum = 0;
    arr.foreach(function(value, index){
        sum += value;
        
    });
    return sum;
    
}

console.log(sumArray([1,2,3,4,5]));