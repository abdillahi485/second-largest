
  function secondLargest(arr){
        let max=arr[0];
        let secondMax=arr[0];
        for (let i=0;i<arr.length;i++){
        if (arr[i] > max){
            secondMax=max;
            max=arr[i]
        }else if(arr[i]> secondMax){
            secondMax=arr[i]
        }
    }
    return secondMax;
  }
  let result1 =secondLargest([23,66, 50, 12, 6])
  let result2=secondLargest([65, 34, 100, 22, 85])
  let result3=secondLargest([67, 22, 19, 12, 80]) 
  console.log(result1)
  console.log(result2)
  console.log(result3)



