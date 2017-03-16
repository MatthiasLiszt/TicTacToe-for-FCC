var playermode=NaN;
var playerColor='o';
var pheadmsg="Tic Tac Toe FCC demo";


var xsrc="x.png";
var osrc="o.png";
var esrc="empty.png";

var cGameOver=false,cWin='unknown';

var x1y1='.',x2y1='.',x3y1='.';
var x1y2='.',x2y2='.',x3y2='.';
var x1y3='.',x2y3='.',x3y3='.';

$("#oneplayer").click(function()
 {playermode="oneplayer";
  window.location.href = "#selectColor";
 });

$("#twoplayer").click(function()
 {playermode="twoplayer";
  window.location.href = "#selectColor";
 });

$("#tookX").click(function(){
            playerColor='x';
            window.location.href = "#playfield";
});

$("#tookO").click(function(){
            playerColor='o';
            window.location.href = "#playfield";  
});

function makeAutoMove(){
 var comColor;
 if(playermode=="twoplayer")
  {if(playerColor=='o'){playerColor='x';}else{playerColor='o';}}
 
 
 if(playermode=="oneplayer"&&cWin=='unknown')
  {comColor=oppositeColor(playerColor);
   comBrain(comColor);
  }
 

 console.log("makeAutoMove() exectued");
}


$("#fx1y1").click(function(){
 
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x1y1=='.'){x1y1=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx1y1 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});
$("#fx2y1").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x2y1=='.'){x2y1=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx2y1 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});
$("#fx3y1").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x3y1=='.'){x3y1=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx3y1 executed");
 checkGameOver();
 checkWin(); 
 makeAutoMove();
 EndMessage();
});

$("#fx1y2").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x1y2=='.'){x1y2=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx1y2 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});
$("#fx2y2").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x2y2=='.'){x2y2=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx2y2 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});
$("#fx3y2").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x3y2=='.'){x3y2=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx3y2 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});

$("#fx1y3").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x1y3=='.'){x1y3=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx1y3 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});
$("#fx2y3").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x2y3=='.'){x2y3=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx2y3 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});
$("#fx3y3").click(function(){
 var s;
 if(playerColor=='o'){s=osrc;}else{s=xsrc;}
 if(x3y3=='.'){x3y3=playerColor;$(this).attr("src",s);$(this).prop("src",s);}
 console.log("fx3y3 executed");
 checkGameOver();
 checkWin();
 makeAutoMove();
 EndMessage();
});


$("#gamereset").click(function(){
 x1y1='.';x2y1='.';x3y1='.';
 x1y2='.';x2y2='.';x3y2='.';
 x1y3='.';x2y3='.';x3y3='.';
 playermode=NaN;
 playerColor='o';
 cGameOver=false;
 cWin='unknown';
 window.location.href = "#initmenu";
 $("#fx1y1").attr("src",esrc);
 $("#fx2y1").attr("src",esrc);
 $("#fx3y1").attr("src",esrc);
 $("#fx1y2").attr("src",esrc);
 $("#fx2y2").attr("src",esrc);
 $("#fx3y2").attr("src",esrc);
 $("#fx1y3").attr("src",esrc);
 $("#fx2y3").attr("src",esrc);
 $("#fx3y3").attr("src",esrc);
 document.getElementById("phead").innerHTML=pheadmsg;
});


function checkWin(){
var r1,r2,r3,r4,r5,r6,r7,r8,x,p;

 p='o';

 r1=(x1y1==p) && (x2y1==p) && (x3y1==p);
 r2=(x1y2==p) && (x2y2==p) && (x3y2==p);
 r3=(x1y3==p) && (x2y3==p) && (x3y3==p); 

 r4=(x1y1==p) && (x1y2==p) && (x1y3==p);
 r5=(x2y1==p) && (x2y2==p) && (x2y3==p);
 r6=(x3y1==p) && (x3y2==p) && (x3y3==p);

 r7=(x1y1==p) && (x2y2==p) && (x3y3==p);
 r8=(x3y1==p) && (x2y2==p) && (x1y3==p);

 x=r1||r2||r3||r4||r5||r6||r7||r8;

 if(x&&cWin=='unknown'){cWin=p;}

 p='x';

 r1=(x1y1==p) && (x2y1==p) && (x3y1==p);
 r2=(x1y2==p) && (x2y2==p) && (x3y2==p);
 r3=(x1y3==p) && (x2y3==p) && (x3y3==p); 

 r4=(x1y1==p) && (x1y2==p) && (x1y3==p);
 r5=(x2y1==p) && (x2y2==p) && (x2y3==p);
 r6=(x3y1==p) && (x3y2==p) && (x3y3==p);

 r7=(x1y1==p) && (x2y2==p) && (x3y3==p);
 r8=(x3y1==p) && (x2y2==p) && (x1y3==p);

 x=r1||r2||r3||r4||r5||r6||r7||r8;

 if(x&&cWin=='unknown'){cWin=p;}

}

//is more a check for no more moves ... 
function checkGameOver(){
var r;

 r= (x1y1!='.') && (x2y1!='.') && (x3y1!='.');
 r= r && (x1y2!='.') && (x2y2!='.') && (x3y2!='.');
 r= r && (x1y3!='.') && (x2y3!='.') && (x3y3!='.');

 cGameOver=r;
}

function EndMessage(){
 var m=document.getElementById("phead");
 if(cGameOver||cWin!='unknown')
  {if(cWin=='o'){m.innerHTML="o has one !";}
   if(cWin=='x'){m.innerHTML="x has one !";}
   if(cWin=='unknown'){m.innerHTML="no one has one !";}
  }
 
}

 


function comXWin(p)
{
 var r1,r2,r3,r4,r5,r6,r7,r8,x;
 
 r1=(x1y1==p) && (x2y1==p) && (x3y1==p);
 r2=(x1y2==p) && (x2y2==p) && (x3y2==p);
 r3=(x1y3==p) && (x2y3==p) && (x3y3==p); 

 r4=(x1y1==p) && (x1y2==p) && (x1y3==p);
 r5=(x2y1==p) && (x2y2==p) && (x2y3==p);
 r6=(x3y1==p) && (x3y2==p) && (x3y3==p);

 r7=(x1y1==p) && (x2y2==p) && (x3y3==p);
 r8=(x3y1==p) && (x2y2==p) && (x1y3==p);

 x=r1||r2||r3||r4||r5||r6||r7||r8;

 return x;
}



function oppositeColor(p){
 if(p=='o'){return 'x';}else{return 'o';}
}



function comBrain(p){
  if(instantWinHum(p)==false)
   {if(instantWinCom(p)==false){anyMove(p);}}
 setPlayField(p);
}



function instantWinHum(h)
{var p=oppositeColor(h);

 if(x1y1=='.'){x1y1=p;if(comXWin(p)){x1y1=oppositeColor(p);return true;}else{x1y1='.';}}
 if(x2y1=='.'){x2y1=p;if(comXWin(p)){x2y1=oppositeColor(p);return true;}else{x2y1='.';}}
 if(x3y1=='.'){x3y1=p;if(comXWin(p)){x3y1=oppositeColor(p);return true;}else{x3y1='.';}}

 if(x1y2=='.'){x1y2=p;if(comXWin(p)){x1y2=oppositeColor(p);return true;}else{x1y2='.';}}
 if(x2y2=='.'){x2y2=p;if(comXWin(p)){x2y2=oppositeColor(p);return true;}else{x2y2='.';}}
 if(x3y2=='.'){x3y2=p;if(comXWin(p)){x3y2=oppositeColor(p);return true;}else{x3y2='.';}}

 if(x1y3=='.'){x1y3=p;if(comXWin(p)){x1y3=oppositeColor(p);return true;}else{x1y3='.';}}
 if(x2y3=='.'){x2y3=p;if(comXWin(p)){x2y3=oppositeColor(p);return true;}else{x2y3='.';}}
 if(x3y3=='.'){x3y3=p;if(comXWin(p)){x3y3=oppositeColor(p);return true;}else{x3y3='.';}}

 return false;
}



function instantWinCom(p)
{
 if(x1y1=='.'){x1y1=p;if(comXWin(p)){return true;}else{x1y1='.';}}
 if(x2y1=='.'){x2y1=p;if(comXWin(p)){return true;}else{x2y1='.';}}
 if(x3y1=='.'){x3y1=p;if(comXWin(p)){return true;}else{x3y1='.';}}
 
 if(x1y2=='.'){x1y2=p;if(comXWin(p)){return true;}else{x1y2='.';}}
 if(x2y2=='.'){x2y2=p;if(comXWin(p)){return true;}else{x2y2='.';}}
 if(x3y2=='.'){x3y2=p;if(comXWin(p)){return true;}else{x3y2='.';}}

 if(x1y3=='.'){x1y3=p;if(comXWin(p)){return true;}else{x1y3='.';}}
 if(x2y3=='.'){x2y3=p;if(comXWin(p)){return true;}else{x2y3='.';}}
 if(x3y3=='.'){x3y3=p;if(comXWin(p)){return true;}else{x3y3='.';}}

 return false;
}



function anyMove(pp)
{
 if(x1y1=='.'){x1y1=pp;return true;}
 if(x2y1=='.'){x2y1=pp;return true;}
 if(x3y1=='.'){x3y1=pp;return true;}

 if(x1y2=='.'){x1y2=pp;return true;}
 if(x2y2=='.'){x2y2=pp;return true;}
 if(x3y2=='.'){x3y2=pp;return true;}
 
 if(x1y3=='.'){x1y3=pp;return true;}
 if(x2y3=='.'){x2y3=pp;return true;}
 if(x3y3=='.'){x3y3=pp;return true;}

 return false;
}



function setPlayField(p)
{var s;

 if(p=='o')
  {s=osrc;}
 else
  {s=xsrc;}
 
 if(x1y1==p){$("#fx1y1").attr("src",s);}
 if(x2y1==p){$("#fx2y1").attr("src",s);}
 if(x3y1==p){$("#fx3y1").attr("src",s);}

 if(x1y2==p){$("#fx1y2").attr("src",s);}
 if(x2y2==p){$("#fx2y2").attr("src",s);}
 if(x3y2==p){$("#fx3y2").attr("src",s);}

 if(x1y3==p){$("#fx1y3").attr("src",s);}
 if(x2y3==p){$("#fx2y3").attr("src",s);}
 if(x3y3==p){$("#fx3y3").attr("src",s);}

}



