// slice -> extracts elemenets and doesn't modify the original array

// splice -> can insert, delete and replace elements and modifies the original array

// arry.splice(startIndex, deleteCount, item1, item2, .......)


//

// let result = arr.splice(2,3) // the removed elements are returned

// // if you call splice with two parameters so splice will only and only delete number of elements mentioned in the param starting from 
// // index mentioned in the first param

// arr.splice(2,3)
// console.log(arr)

// insert using splice

//  let arr = [10, 30, 50, 60, 90]

//  //arr.splice(1, 2, 100, 200) // at index 2 add 30 and the element present will automatically shift to the next index
//  let result = arr.splice(-5) // want to delete the last element
// console.log(result)
//  console.log()
