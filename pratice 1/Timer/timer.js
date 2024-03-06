let count=0;
let aa=document.querySelector(".value");
document.querySelector(".inbut") .onclick=function(){
count ++ ;

document.querySelector  (".value").innerHTML=count;

}
document.querySelector(".rebut").onclick=function(){

count=0
document.querySelector(".value").innerHTML=count;


}
document.querySelector(".debut" ) .onclick=function(){

count --;
document.querySelector(".value").innerHTML=count;

}
aa.textContent=count
if(count  <0){

    aa.style.color="green"
}
else if(count >0){

    aa.style.color="red"
}
else{

    aa.style.color="black"
}