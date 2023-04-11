let arr=[7,8,9,6,9,9,6,5,7,6,9,8]
let arr1=[]
let arr2=[]

for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            arr[i]=null
            arr[j]=null
        }
    }
}

console.log(arr);

console.log(arr);
let arr3=arr.filter((x)=>{
    return x!=null
})
console.log(arr3);