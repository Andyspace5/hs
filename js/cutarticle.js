var currentSet,CutFlag,TotalByte,PageCount,key,tempText,tempPage;
	key=""; 
	currentSet=0;
	var Text=document.getElementById("xmlArticle").value;
	TotalByte=Text.length;
	
	if (flag==1)
	{
		PageCount=Math.round(TotalByte/PageSize);
		if(parseFloat("0."+TotalByte%PageSize)>0){
			if(parseFloat("0."+TotalByte%PageSize)<0.5){
				PageCount=PageCount+1;
				}
		}
		var PageNum=new Array(PageCount+1);
		var PageTitle=new Array(PageCount+1);
		PageNum[0]=0;
		PageTitle[0]="";
			
		var sDrv1,sDrv2,sDrv3,sDrv4,sFlag;
		var sDrvL,sTemL;
		var sTem1,sTem2,k;
		sFlag=0;
			
		for(j=1;j<PageCount+1;j++){
			PageNum[j]=PageNum[j-1]+PageSize;
			PageTitle[j]="";
			sDrv1="<br>";
			sDrv2="<BR>";
			sDrv3="<Br>";
			sDrv4="<bR>";
			sDrvL=sDrv1.length;
			for(k=PageNum[j];k<=TotalByte;k++){
				sTem1=Text.substring(PageNum[j]-sDrvL,k);
				sTemL=sTem1.length;
				sTem2=sTem1.substring(sTemL-sDrvL,sTemL)
				if (sTem2==sDrv1 || sTem2==sDrv2 || sTem2==sDrv3 || sTem2==sDrv4)
				{
					sFlag=sFlag+1;
					PageNum[j]=k;
					break;
				}
			}
			if (PageNum[j]>TotalByte)
			{
				break;
			}
		}
		if (j<PageCount)
		{
			PageNum.length=j;
			PageCount=j
		}
		if (PageCount>1&&sFlag>1&&PageCount<sFlag)
		{
			PageCount=sFlag+1;
		}
	}
	else{
		//手动分页
		var j,sFlag,PageCount,sText;
		var sTitleFlag;
		var PageNum=new Array();
		var PageTitle=new Array();

		PageSize=0;
		j=1;
		PageNum[0]=-10;
		PageTitle[0]=""; 
		sFlag=0;
		sText=Text;

		do
		{
			sText=Text.substring(PageNum[j-1]+10,TotalByte);

			sFlag=sText.indexOf("[NextPage");

			if (sText.substring(sFlag+9,sFlag+10)=="=")
			{
				sTitleFlag=sText.indexOf("]",sFlag);
				PageTitle[j]=sText.substring(sFlag+10,sTitleFlag);
			}
			else{
				PageTitle[j]="";
			}

			if (sFlag>0)
			{
				PageNum[j]=sFlag+PageNum[j-1]+10;
			}
			else{
				PageNum[j]=TotalByte;
			}

			j+=1;
		}
		while (PageNum[j-1]<TotalByte);

		PageCount=j-1;
	}

	function text_pagination(Page){
		var Output,Byte;

		if(Page==null){Page=1;}	

		Output="";
		//显示正文
		if(Page==0)	{
		//不分页
			tempText=Text.replace(/\[NextPage\]/g,"");
		}
		else{
		//分页
			if (flag==1)
			//自动分页
			{
				tempText=Text.substring(PageNum[Page-1],PageNum[Page]);	
			}
			else{
			//手动分页
				if (PageTitle[Page-1].length==0)
				{
					tempText=Text.substring(PageNum[Page-1]+10,PageNum[Page]);
				}
				else{
					tempText=Text.substring(PageNum[Page-1]+11+PageTitle[Page-1].length,PageNum[Page]);
				}
			}
		}
		Output=Output+tempText;
		Output=Output+"<br>";
		Output=Output+"<div align=center>";
		Output=Output+Article_PageNav(DownShowStyle,Page);
		Output=Output+"</div>";
		
		article.innerHTML = Output;
		if (Page>1){document.location.href='#';}
	}
	function Article_PageNav(ShowStyle,Page){
	//分页码显示函数
	//参数为调用样式，0=简单样式，1=标准样式
		var temp="",isHavePage=true;

		if (ShowStyle==0)
		//简单样式
		{
			tempPage=Page;
			if(TotalByte>PageSize){	
				if (Page-4<=1){
					temp=temp+"<font face=webdings color=#999999>9</font>";
					if (Page<=1){temp=temp+"<font face=webdings color=#999999>7</font>";}else{temp=temp+"<a href=javascript:text_pagination("+(Page-1)+")><font face=webdings>7</font></a>";}
					if (PageCount>10){
						for(i=1;i<8;i++){
							if (i==Page){
								temp=temp+"<font color=red>"+i+"</font> ";
							}else{
								temp=temp+"<a href=javascript:text_pagination("+i+") >"+i+"</a>"+" ";
							}
						}
					temp=temp+" ...";
					}
					else{
						for(i=1;i<PageCount+1;i++){
							if (i==Page){
								temp=temp+"<font color=red>"+i+"</font> ";
							}
							else{
								temp=temp+"<a href=javascript:text_pagination("+i+") >"+i+"</a>"+" ";
							}
						}
					}

					if (Page==PageCount){temp=temp+"<font face=webdings color=#999999>8</font>";}else{temp=temp+"<a href=javascript:text_pagination("+(Page+1)+")><font face=webdings>8</font></a>";}
					if(PageCount<10){temp=temp+"<font face=webdings color=#999999>:</font>";}else{temp=temp+"<a href=javascript:text_pagination("+PageCount+")><font face=webdings>:</font></a>";}
				}
				else if(Page+4<=PageCount){
				temp=temp+"<a href=javascript:text_pagination(1)><font face=webdings>9</font></a>";
				temp=temp+"<a href=javascript:text_pagination("+(Page-1)+")><font face=webdings>7</font></a>";
					if (PageCount>10){
						temp=temp+"..";
						for(i=Page-4;i<Page+4;i++){
							if (i==Page){
								temp=temp+"<font color=red>"+i+"</font> ";
							}
							else{
							temp=temp+"<a href=javascript:text_pagination("+i+") >"+i+"</a>"+" ";
							}
						}
						temp=temp+" ..";
					}
					else{
						for(i=1;i<PageCount+1;i++){
							if (i==Page){
								temp=temp+"<font color=red>"+i+"</font> ";
							}
							else{
							temp=temp+"<a href=javascript:text_pagination("+i+") >"+i+"</a>"+" ";
							}
						}
					}
			
					if (Page==PageCount){temp=temp+"<font face=webdings color=#999999>8</font>";}else{temp=temp+"<a href=javascript:text_pagination("+(Page+1)+")><font face=webdings>8</font></a>";}
					temp=temp+"<a href=javascript:text_pagination("+PageCount+")><font face=webdings>:</font></a>";

				}
				else{
					temp=temp+"<a href=javascript:text_pagination(1)><font face=webdings>9</font></a>";
					temp=temp+"<a href=javascript:text_pagination("+(Page-1)+")><font face=webdings>7</font></a>";
					temp=temp+".."

					for(i=Page-2;i<PageCount+1;i++){
						if (i==Page){
							temp=temp+"<font color=red>"+i+"</font> ";
						}
						else{
							temp=temp+"<a href=javascript:text_pagination("+i+") >"+i+"</a>"+" ";
						}
					}

					if (Page==PageCount){temp=temp+"<font face=webdings color=#999999>8</font>";}else{temp=temp+"<a href=javascript:text_pagination("+(Page+1)+")><font face=webdings>8</font></a>";}
					temp=temp+"<font face=webdings color=#999999>:</font>";
				}
			}
			else{
				isHavePage=false
				temp=temp+" ";
			}
			if(isHavePage){	temp=temp+" <a href=javascript:text_pagination(0)>显示全部</a>"}
		}
		else if (ShowStyle==1)
		//标准样式
		{
			if(TotalByte>PageSize){if(Page!=0){if(Page!=1){temp=temp+"<a href='#top' onclick=javascript:text_pagination("+(Page-1)+")><font color=3366cc>[上一页]</font></a>&nbsp;&nbsp;";}}}
			for (i=1;i<PageCount+1 ;i++ )
			{
				if (Page==i)
				{
					temp=temp+"<font color=800000>["+i+"]</font>&nbsp;&nbsp;";
				}
				else{
					temp=temp+"<a href='#top' onclick=javascript:text_pagination("+i+")><font color=3366cc>["+i+"]</font></a>&nbsp;&nbsp;";
				}
			}
			temp=temp+"<a name='foot'></a>";
			if(TotalByte>PageSize){if(Page!=0){if(Page!=PageCount){temp=temp+"<a href='#top' onclick=javascript:text_pagination("+(Page+1)+")><font color=3366cc>[下一页]</font></a>";}}}

			temp=temp+" <a href=javascript:text_pagination(0)><font color=3366cc>显示全部</font></a>"
		}
		else if (ShowStyle==2)
		//下拉菜单样式
		{
			temp=temp+'<select onchange="text_pagination(this.value)">'
			for (i=1;i<PageCount+1 ;i++ )
			{
				if (Page==i)
				{
					temp=temp+"<option value='"+i+"' selected style='color:red'>第 "+i+" 页"
						
				}
				else{
					temp=temp+"<option value='"+i+"'>第 "+i+" 页";
				}
				if (PageTitle[i].length!=0)
				{
					temp=temp+'：'+PageTitle[i];
				}
				temp=temp+"</option>";
			}
			temp=temp+"</select>";
		}

		return (temp);
	}
	