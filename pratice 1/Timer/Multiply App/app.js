let num1=Math.ceil(Math.random()*10);
let num2=Math.ceil(Math.random()*10);
let ques=document.querySelector(".qf");
let ip=document.querySelector(".inp");
let fg=document.querySelector(".form");
let scoreE1=document.querySelector(".score")
let score=JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 8;
  }
  
scoreE1.innerText= `score: ${score} `;
ques.innerText=`What is ${num1} multiply by ${num2}?`;
let ff=num1*num2;
fg.addEventListener("submit",()=>{
const  answer=+ip.value;
if(answer===ff){
score++;

updateLocalStorage();
}
else{


    score--;
    updateLocalStorage();
}






});
function updateLocalStorage(){

localStorage.setItem("score",JSON.stringify(score));


}
