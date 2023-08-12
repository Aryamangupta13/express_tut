const { name } = require("ejs");

const arr=[[1,2,3,4,5],[6,7,8,9,10],[9,8,7,6,5]];
const objarr=[];
let i=0;
arr.forEach((ele)=>{
    const objarr2=[];
    i=0;
    ele.forEach((ele2)=>{
        objarr2.push({name:i,studet:ele2});
        i+=1;
    })
    
    objarr.push(objarr2);
})
console.log(objarr);