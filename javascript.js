var d=new Array(9);
var w=new Array(9);
var check,index,id,win=1;
var myparam1;
var myParam2;
d[0]=0,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=0,d[6]=0,d[7]=0,d[8]=0;
w[0]=0,w[1]=0,w[2]=0,w[3]=0,w[4]=0,w[5]=0,w[6]=0,w[7]=0,w[8]=0;

function in1(index,id)
{
	if(win&&!d[index]){
	d[index]=1;
	check=d[0]+d[1]+d[2]+d[3]+d[4]+d[5]+d[6]+d[7]+d[8];
	var circle=document.getElementById(id);
	if(check%2!=0){
	circle.innerHTML="<div class='circle'></div>";
	w[index]=11;
	winCircle[0]=w[0]+w[1]+w[2]==33;
	winCircle[1]=(w[3]+w[4]+w[5])==33;
	winCircle[2]=(w[6]+w[7]+w[8])==33;
	winCircle[3]=(w[0]+w[4]+w[8])==33;
	winCircle[4]=(w[0]+w[3]+w[6])==33;
	winCircle[5]=(w[4]+w[1]+w[7])==33;
	winCircle[6]=(w[5]+w[8]+w[2])==33;
	winCircle[7]=(w[2]+w[4]+w[6])==33;
	winner();
	}
	else if(check%2==0){
		circle.innerHTML="<div class='cross'><div class='cro'></div></div>";
		w[index]=7;
		winCross[0]=(w[0]+w[1]+w[2]==21);
		winCross[1]=(w[3]+w[4]+w[5]==21);
		winCross[2]=(w[6]+w[7]+w[8]==21);
		winCross[3]=(w[0]+w[4]+w[8]==21);
		winCross[4]=(w[0]+w[3]+w[6]==21);
		winCross[5]=(w[4]+w[1]+w[7]==21);
		winCross[6]=(w[5]+w[8]+w[2]==21);
		winCross[7]=(w[2]+w[4]+w[6]==21);
		winner();
	}
	}
	else{
		winner();
	}	
}
var winCircle = new Array(8);


var winCross = new Array(8);


function winner(){
if(
winCircle[0]||winCircle[1]||winCircle[2]||winCircle[3]||winCircle[4]||winCircle[5]||winCircle[6]||winCircle[7]
)
{
	tick();
		var winner=document.getElementById("fix").innerHTML=myparam1.toUpperCase()+"<br/><br/>WINS";
	var flip=
	document.getElementById("card");
	flip.style.transform="rotateY(180deg)";
	win=0;
	
	
}
else if(
 winCross[0]||winCross[1]||winCross[2]||winCross[3]||winCross[4]||winCross[5]||winCross[6]||winCross[7]
 )
{
	tick();
	var winner=document.getElementById("fix").innerHTML=myParam2.toUpperCase()+"<br/><br/>WINS";
	var flip=
	document.getElementById("card");
	flip.style.transform="rotateY(180deg)";
	win=0;
}
}
function reload()
{
	location.reload();
}

function tick()
{	var tic=document.getElementById("tick");
	if(winCircle[0]||winCross[0])
	{
		tic.style.right="105";
		tic.style.top="145";
		tic.style.transform="rotate(90deg)";
		tic.style.opacity="1";
	}
	else if(winCircle[1]||winCross[1])
	{
		tic.style.left="5";
		tic.style.top="145";
		tic.style.transform="rotate(90deg)";
		tic.style.opacity="1";
	}
	else if(winCircle[2]||winCross[2])
	{
		tic.style.left="105";
		tic.style.top="145";
		tic.style.transform="rotate(90deg)";
		tic.style.opacity="1";
	}
		
	else if(winCircle[3]||winCross[3])
	{
		tic.style.top="135";
		tic.style.transform="rotate(45deg)";
		tic.style.opacity="1";
	}
		
	else if(winCircle[4]||winCross[4])
	{
		tic.style.left="5";
		tic.style.top="45";
		tic.style.opacity="1";
	}
		
	else if(winCircle[5]||winCross[5])
	{
		tic.style.left="5";
		tic.style.top="145";
		tic.style.opacity="1";
	}
		
	else if(winCircle[6]||winCross[6])
	{
		tic.style.left="5";
		tic.style.top="245";
		tic.style.opacity="1";
	}
		
	else if(winCircle[7]||winCross[7])
	{
		tic.style.top="145";
		tic.style.transform="rotate(-45deg)";
		tic.style.opacity="1";
	}
}
function validate(){

	var t1=document.forms["form"]["t11"].value;
	var t2=document.forms["form"]["t21"].value;
	if(t1!=''&& t2!=''){
		return true;
	}
	
		alert("please enter player name");
		return false;
	
	
}
function load()
{
	
	var urlParams=new URLSearchParams(window.location.search);
	myparam1=urlParams.get('t11');
	myParam2=urlParams.get('t21');
	var p1=document.getElementById("p1").innerHTML=myparam1.toUpperCase()+"<br/><div class='fix'><div class='circle'></div></div>";
	var p2=document.getElementById("p2").innerHTML=myParam2.toUpperCase()+"<br/><div class='fix'><div class='cross' ><div class='cro'></div></div></div>";
	}
	