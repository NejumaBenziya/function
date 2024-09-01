let arr = [4, 6, 2];

console.log("Array is", arr);


const doubleArray = function (arr) {
    let dArr = [0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
      dArr[i] = 2 * arr[i];
    }
    return dArr;
  }

  
function processArray(arr,doubleArray)
{
    console.log("doubleArray is ",doubleArray(arr));

};

console.log(processArray(arr,doubleArray));
