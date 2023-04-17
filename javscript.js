function ClearDisplay(){
    document.getElementById("screen").value=""
}
function Numberclick(val){
   
    document.getElementById("screen").value=document.getElementById("screen").value+val
}
function EqualsTo(){
var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result }