//your JS code here. If required.
/*  your css code here. If applicable */
let count=0;
let btn=document.getElementById("incrementBtn");
btn.addEventListener("click",()=>{
alert("count is"+count);
count+=1;
let re=document.getElementById("counter");
re.innerHTML=count;
});
