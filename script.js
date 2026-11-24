// searching -> if i give you 10 elements, and I ask you to find a specific element
// this process is called searching ..

let arr = [3, 5, 5, 99, 100 , 90, 101, 5, 5, 5]
// [1,2, 7, 8, 9]

let target = 5;

// linear search
function linearSearch(arr, target) { // parameters
    for(let i = 0; i< arr.length; ++i) {
    if(target == arr[i]) {
        console.log("Element found", i)
        return i; // this return will break the function or stop the working of the 
        // function
    }

    else {
        console.log("Target not found")
    }
}
// if not found 
return -1;
}


console.log(linearSearch(arr, target)) //arguments
// create a function for linear search and call it over arr



// create a function and give all the indexes in an array form for which the target
// existing
// create a function for finding the maximum value inside the array using traversal 
function largestNum(arr){
    let largest=-Infinity;
    let i=0;
    let index=-1;
    while(i<arr.length){
        if(arr[i]>largest){
            largest=arr[i];
            index=i;
        }
        i++;
    }
    return `${largest} at ${index}`;
}
console.log(largestNum(arr));
// 
let str="Obh15";
let char="g";
// Find the target character in the string
function findChar(str,target){
    let found=false;
    let index=-1;
    for(let i=0;i<str.length;i++){
        if(str[i]===target){
            found=true;
            index=i;
            break;
        }
    }
    return (found?`Found at ${index}`:`Not Found ${index}`);
}
console.log(findChar(str,char));
//create arr of objects ,search if id of value 45 is present in arr1 or not
let arr1 ={1:{id:2,b:3},2:{id:10,b:20},3:{id:45,b:21}};

function id1(arr1){

    for(let i = 0;i<arr1.length;i++){
        
    }
   

} 
id1(arr1);