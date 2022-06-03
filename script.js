const arr = ["one","two","three","four",'five']
const sliceArr = arr.splice(3)
arr.splice(2,0,...sliceArr)  
console.log(arr)
var nestArr = arr.reduce((a, c, i) => {
    return i % 2 === 0 ? a.concat([arr.slice(i, i + 2)]) : a;
  }, []);

var result = nestArr.reduce((a,c,i)=>{
    a[i+3] = c;
    return a
},{})

console.log(result)


  
