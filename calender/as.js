let fd=document.querySelector('.date');
let df=document.querySelector('.day');
let mf=document.querySelector(".month");
let fy=document.querySelector(".year");
let ww=new Date()

let weekdays=["Sunday","Monday","Tuesday","Wendesday","Thursday","Friday","Saturaday"]
let yy=["January","Feb","March","April","May","June","July","August","September","October","November","December"]

let datef=ww.getDate()
let dayf=ww.getDay()
let monthy=ww.getMonth()
let yearf=ww.getFullYear()
fd.innerHTML=datef
df.innerHTML=weekdays[ww.getDay()]
mf.innerHTML=yy[ww.getMonth()]
fy.innerHTML=yearf 