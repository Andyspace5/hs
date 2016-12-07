lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}
suspendcode12="<DIV id=\"lovexin12\" style='right:2px;POSITION:absolute;TOP:100px;z-index:100'>";
var recontent='<table align="left" style="margin-right:10px;width:90px" border="0" cellpadding=0 cellspacing=0 height="32">' + 
'<tr>' + 
'<td style="padding:0;font-size:13px" height="32" ><table style="width:90px" border="0" cellspacing="0" cellpadding="0" height="1">' + 
'<tr>' + 
'<td style="padding:0;font-size:13px;background:none;" height="20"><img src="images/qqonline/kefu_up.gif"  border="0" usemap="#MapMapMap"></td>' + 
'</tr>' + 
'<tr>' + 
'<td style="padding:0;font-size:13px;padding-left:1px" background="images/qqonline/kefu_middle.gif" height="19">' + 
'<table style="width:100px"  border="0" align="center" cellpadding="0" cellspacing="0" height="1">' + 
'<tr>' + 
'<td style="padding:0;font-size:13px" height="6" colspan="2"></td>' + 
'</tr>'

for(var sqc=0;sqc<serQQ.length;sqc+=2){

	recontent+='<tr><td height="1" align="right" width="25"><a target=blank href="tencent://message/?uin='+serQQ[sqc]+'&Site=www.hnjuhui.com&Menu=yes" style="color:#FF0000;"><img border="0" SRC=http://wpa.qq.com/pa?p=1:'+serQQ[sqc]+':4 alt="'+serQQ[sqc+1]+'" align="absbottom"></a></td><td align="left" style="padding:2px 0;font-size:12px" >&nbsp;<a target=blank href="tencent://message/?uin='+serQQ[sqc]+'&Site=www.hnjuhui.com&Menu=yes" style="color:#FF0000;">'+(serQQ[sqc+1]?serQQ[sqc+1]:serQQ[sqc])+'</a></td></tr>'  

}

recontent+='</table></td>' + 
'</tr>' + 
'<tr>' + 
'<td style="padding:0;font-size:13px" height="1"><img src="images/qqonline/kefu_down.gif"></td>' + 
'</tr>' + 
'</table>' + 
'</td>' + 
'</tr>' + 
'</table>' + 
'<map name="MapMapMap" onclick="far_close()" style="cursor:handle">' + 
'<area shape="rect" coords="71,8,102,30" href="#">' + 
'</map>';

document.write(suspendcode12); 
document.write(recontent); 
document.write("</div>"); 
window.setInterval("heartBeat()",1);

function far_close()
{
	document.getElementById("lovexin12").innerHTML="";
}

function setfrme()
{
	var tr=document.getElementById("lovexin12");
	var twidth=tr.clientWidth;
	var theight=tr.clientHeight;
	var fr=document.getElementById("frame55la");
	fr.width=twidth-1;
	fr.height=theight-30;
}
//setfrme()
