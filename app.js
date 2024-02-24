var ful=document.getElementById('yy')
function foor(){
 var a=document.getElementById('inp')

var li=document.createElement('li')
var litext=document.createTextNode(a.value)
li.appendChild(litext)
ful.appendChild(li)
a.value=''
var m= document.createElement('button')
var mtext=document.createTextNode('delete')
m.appendChild(mtext)
li.appendChild(m)
m.setAttribute('onclick','del(this)')
var editbt=document.createElement('button')
var edittext=document.createTextNode('edit')
editbt.appendChild(edittext)
li.appendChild(editbt)
editbt.setAttribute('onclick','edi(this)')
m.setAttribute('class','btn btn-danger m-3 bh')
editbt.setAttribute('class','btn btn-info m-3 bh')
}


function xxp(){

    document.getElementById('yy').innerHTML=''
}
function del(e){
e.parentNode.remove()


}
function edi(e){
    var a= prompt( 'Enter your value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=a

}