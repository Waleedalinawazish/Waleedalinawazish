let bodyEl=document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
let opx=event.offsetX;
let opy=event.offsetY;
let sp1=document.createElement("span");
sp1.style.left=opx+"px";
sp1.style.top=opy+"px";
let size=Math.random()*100;
sp1.style.width=size+"px"
sp1.style.height=size+"px"
bodyEl.appendChild(sp1);
setTimeout(()=>{
sp1.remove()

},3000)


})