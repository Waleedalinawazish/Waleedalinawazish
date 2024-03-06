let speech=new SpeechSynthesisUtterance();


var voices=[];

let voicey=document.querySelector('select');

window.speechSynthesis.onvoiceschanged=()=>{

voices=window.speechSynthesis.getVoices();
speech.voice=voices[0];
voices.forEach((voice,i )=> (voicey.options[i]=new Option(voice.name,i)))
    
};


voicey.addEventListener('change',()=>{
speech.voice=voices[voicey.value];

})

document.querySelector('button').addEventListener('click',()=>{
speech.text=document.querySelector('textarea').value;
window.speechSynthesis.speak(speech);


})

let spech=new SpeechSynthesisUtterance();
document.querySelector('button').addEventListener('click',()=>{

speech.text=document.querySelector('textarea').value
window.speechSynthesis.speak('spech');

})

