//�ݴ�ű�
function ResumeError()
 {
        return true;
    }
window.onerror = ResumeError;

var ZDom={
	$:function(id){
		if (typeof(id) == "object") return(id);
		if (typeof(id) != "string" || id == "") return null;
		if (document.getElementById) return document.getElementById(id);
		if (document.all) return document.all(id);
		try {return eval(id);}
		catch(e){ return null;}}
	};
function cSize(size){
var obj=document.getElementById("article");obj.style.fontSize=size+"px";
}
function FilterHtmlString(obj){//����HTML����
	obj=(typeof(obj)=="string")?$(obj):obj;
	var val=obj.value.replaceHtml();
	obj.value=val;
	val=null;
}
String.prototype.replaceHtml=function(){
	return this.replace(/<\/?[^>]+>/gi, '');
}
function getUrl(uStr){//��ȡURL��ַ�д��ݵĲ���
	var retValue=null,aParam;
	if (typeof(uStr) != "string" || uStr == "") return null;
	var aParams = document.location.search.substr(1).split('&');
	for (i=0;i<aParams.length;i++) {
	aParam = aParams[i].split('=');
	if (aParam[0].toLowerCase() = uStr.toLowerCase()){
		retValue=aParam[1];
		break;
		}
	}
   return(retValue);
  }
function setPicRange(obj,maxW,maxH)
{
 if(obj.width>maxW || obj.height>maxH )
 {
  if(obj.width/obj.height>maxW/maxH  )
   obj.width=maxW;
  else 
   obj.height=maxH;
 }
}
function attach(a,b,c){//��ָ�������󶨵��¼�
	if (window.attachEvent) ZDom.$(a).attachEvent("on"+b,c);
	else {
		try{ZDom.$(a).addEventListener(b,c,false);}
		   catch(zhj){}
	}
}
function detach(a,b,c){// ���¼���ȡ��ָ�������İ�
	try{
		if (window.detachEven) {
			ZDom.$(a).detachEvent("on"+b,c);
		}
		else{
		   try{ZDom.$(a).removeEventListener(b,c,true);}
			   catch(zhj){
			}
	   }
	}
	catch(zhj){
  }
}
function IsDigit(){// ֻ������������ onkeypress="event.returnValue=IsDigit();"
  return (((event.keyCode >= 48) && (event.keyCode <= 57))||event.keyCode ==13);
}

/*S���ܺ�����*/
//���Բ�����֤
function checkmessage(){
	if (ZDom.$("MessageName").value.length<2){
		alert("��������Ϊ��!");
		ZDom.$("MessageName").focus();
        return false;
	}
	if (ZDom.$("MessageTitle").value.length<2){
		alert("���Ա��ⲻ��Ϊ��!");
		ZDom.$("MessageTitle").focus();
        return false;
	}
	if (ZDom.$("MessageWords").value.length<2 ||ZDom.$("MessageWords").value.length>500){
		alert("�������ݲ���Ϊ��,Ҳ���ܴ���500�ַ�!");
		ZDom.$("MessageWords").focus();
        return false;
	}
	if (ZDom.$("MessagevalidateCode").value.length<2){
		alert("��������֤��!");
		ZDom.$("MessagevalidateCode").focus();
        return false;
	}
return true;
}

/*E���ܺ�����*/
