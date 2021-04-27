function alertsoul(alert){
if(alert.title!=undefined){
document.querySelectorAll(".titleb").forEach(t => {
    t.innerText = alert.title;
})
}

if(alert.desc!=undefined){
document.querySelectorAll(".descb").forEach(d => {
    d.innerText = alert.desc;
})
}

if(alert.title!=undefined){
document.querySelectorAll(".titlea").forEach(t => {
    t.innerText = alert.title;
})
}

if(alert.desc!=undefined){
document.querySelectorAll(".desca").forEach(d => {
    d.innerText = alert.desc;
})
}
 
if(alert.buttonc!=undefined){
document.querySelectorAll(".abtn").forEach(b => {
    b.innerText = alert.buttonc;
})
}

if(alert.buttonc!=undefined){
document.querySelectorAll(".bbtn").forEach(b => {
    b.innerText = alert.buttonc;
})
}

if(alert.buttonf!=undefined){
document.querySelectorAll(".abtn2").forEach(f => {
    f.innerText = alert.buttonf;
})
}

if(alert.buttonf!=undefined){
document.querySelectorAll(".bbtn2").forEach(f => {
    f.innerText = alert.buttonf;
})
}

if(alert.mode!="dark"){
darkalert.style.display="none";
}

if(alert.mode!="light"){
lightalert.style.display="none";
}


if(alert.buttonc==0){
document.querySelector(".abtn").style.display="none"
}

if(alert.buttonf==0){
document.querySelector(".abtn2").style.display="none"
}

if(alert.buttonc==0){
document.querySelector(".bbtn").style.display="none"
}

if(alert.buttonf==0){
document.querySelector(".bbtn2").style.display="none"
}

if(alert.animation === "fadein")
    {
        darkalert.classList.add("fadein")
        darkalert.classList.add("rotatein")
    }
    
    if(alert.animation === "slidein")
    {
        darkalert.classList.add("slideinx")
    }
   
   if(alert.animation === "fadein")
    {
        lightalert.classList.add("fadein")
    }
    
    if(alert.animation === "slidein")
    {
        lightalert.classList.add("slideinx")
    }
   
if(alert.timer == true){
setTimeout("jsanim()",6000);    
}  
  
}

function jsanim(){
darkalert.style.animation="fadeal 1.35s forwards"    
}

if(alertsoul == undefined){
darkalert.style.display="none"    
lightalert.style.display="none";
}
</script>
<!DOCTYPE html>
<html>
    <head>
        
    </head>
    <body>
      
      <center>
      
      <div id="darkalert">
       <h1 class="titleb">Title</h1>   
          <h3 class="descb">Description</h3>
      <button class="abtn" onclick='    jsanim()'>Confirm</button>  
      <button class="abtn2" onclick='    darkalert.style.animation="fadea 2.35s forwards"'>Exit</button>  
      
      </div>
      
       <div id="lightalert">
       <h1 class="titlea">Title</h1>   
          <h3 class="desca">Description</h3>
      <button class="bbtn" onclick='    lightalert.style.animation="fadeal 1.35s forwards"'>Confirm</button>  
      <button class="bbtn2" onclick='    lightalert.style.animation="fadea 2.35s forwards"'>Exit</button>  
      
      </div>
      
      </center>
      <style>
      *{
user-select:none;    
outline:none;
}
::selection{
opacity:0%;
}
body {
background-color:black;    
}

.abtn{
background:#00fc4c;
width:70px;
height:30px;
border-radius:10px;
border:none;
transition:90ms;
color:white;
margin-top:150px;
margin-left:84px;
overflow:scroll;
}

.abtn2{
background:#f52c2c;
width:70px;
height:30px;
border-radius:10px;
border:none;
transition:90ms;
color:white;
margin-top:150px;
margin-left:8px;
overflow:scroll;
}

.abtn:active{
transform:scale(0.9);
transition:90ms;
}

.abtn2:active{
transform:scale(0.9);
transition:90ms;
}

.bbtn{
background:#3df258;
width:70px;
height:30px;
border-radius:10px;
border:none;
transition:90ms;
color:white;
margin-top:150px;
margin-left:84px;
overflow:scroll;
}

.bbtn2{
background:#f52c2c;
width:70px;
height:30px;
border-radius:10px;
border:none;
transition:90ms;
color:white;
margin-top:150px;
margin-left:8px;
overflow:scroll;
}

.bbtn:active{
transform:scale(0.9);
transition:90ms;
}

.bbtn2:active{
transform:scale(0.9);
transition:90ms;
}
.fadein{
animation:1890ms darkal forwards;
}
#darkalert{
background:#0d0d0d; 
border-radius:18px;
width:300px;
height:190px;
text-align:center;
margin-top:60%;
align-items:center;
overflow:scroll;

transition:2s;
/*display:none;
transition:320ms;*/
}
.rotatein{
animation:2s rotatein forwards;
}
@keyframes rotatein {
0%{
transform:rotate(0deg);    
} 
50%{
transform:rotate(720deg);        
}  
100%{
transform:rotate(0deg);    
}
 
}
@keyframes fadeal{
from{
transform:scale(1);
opacity:100%;
transition:40ms;
}
to{
transform:scale(0);
transition:40ms;
opacity:0%;
}
}

@keyframes darkal{
from{
transform:scale(0.1);
opacity:0;
transition:40ms;
}
to{
transform:scale(1);
transition:40ms;
opacity:100%;
}
}

.titleb{
position:absolute;
color:white;
display:inline-block;
overflow:scroll;
}

.titlea{
position:absolute;
color:black;
display:inline-block;
overflow:scroll;
}

.descb{
position:absolute;
color:white;
display:inline-block;
overflow:scroll;
margin-top:70px;
}

.desca{
position:absolute;
color:black;
display:inline-block;
overflow:scroll;
margin-top:70px;
}


#lightalert{
background-color:white; 
border-radius:16px;
width:290px;
height:190px;
text-align:center;
margin-top:60%;
align-items:center;
overflow:scroll;
}
.fadein{
animation:1620ms lightal forwards;
}
@keyframes lightal{
from{
transform:scale(0.1);
opacity:0;
transition:40ms;
}
to{
transform:scale(1);
transition:40ms;
opacity:100%;
}
}

.slideinx{
animation:2s slideinx forwards;  
animation-play-state:forwards;      
}



@keyframes slideinx{
from{
transform:translateX(-103px);
opacity:0%;
}
to{
transform:translateX(2px); 
opacity:100%;
}    
}

.slideiny{
animation:1.5s slideiny forwards;  
animation-play-state:forwards;      
}

@keyframes slideiny{

0%{
transform:translateY(-103px);    
opacity:0%;  
}   

50%{
opacity:50%; 
transform: rotate(120deg);     
}

70%{
opacity:60%;
}

100%{
transform: rotate(0deg);    
opacity:100%;      
transform:translateY(180px); 
} 

}

.extradesc{
color:grey;    
font-size:0.9em;
}

.desc{
font-size:1.2em;    
}

.title{
font-size:1.9em;    
color:red;
}

@keyframes fadea{
from{
opacity:100%;
transition:1s;
transform:rotate(0deg);
}
to{
opacity:0%;
transition:1s;
transform:rotate(180deg);
}
}
</style>
    </body>
</html>
