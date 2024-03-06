  let textutils=document.querySelector
       (".text");

   let int=document.querySelector
       (".inp");

      int.addEventListener
      ("input",()=>{

     textutils.style.fontSize=int.value
     textutils.style.color=int.value

   })