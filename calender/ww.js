let df=document.querySelector('.date');
let fd=document.querySelector('.day');
let fm=document.querySelector('.month');
let fy=document.querySelector('.year');
let dd=new Date()
let ss=dd.getDate();
let aa=dd.getDay()
let qq=dd.getMonth();
let ee=dd.getFullYear()





let weekdays=["Sunday","Monday","Tuesday","Wendesday","Thursday","Friday","Saturaday"]

let monthf =["January","Feb","March","April","May","June","July","August","September","October","November","December"]
df.innerHTML=ss
fd.innerHTML=weekdays[dd.getDay()]
fm.innerHTML=monthf[dd.getMonth()]

fy.innerHTML=ee