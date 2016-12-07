$(function(){
	var index = sessionStorage.getItem("id");
//	console.log(index)
	
	var i=0;
	$.ajax({
		
		type:"get",
		url:"json/shows.json",
		success:function(res){
				$(".photoimgbox img").attr("src","image/"+res[index]["content"][0].img)
//				console.log("zzz")
//				$(".curtitle").text(res[index].title)
//				console.log(res[index].title)
				$(".left").click(function(){
				
					i--;
					
					if (i<0) {
						i=(res[index]["content"].length-1);
						
					}
//					console.log(i)
					$(".photoimgbox img").attr("src","image/"+res[index]["content"][i].img)
					
				})
//				
//				
				$(".right").click(function(){
				
					i++;
					
					if (i>res[index]["content"].length-1) {
						i=0;
						
					}
					
					$(".photoimgbox img").attr("src","image/"+res[index]["content"][i].img)
					
				})
			
			
		}
	});
	
	
	
	var index1 = sessionStorage.getItem("id1");
//	console.log(index1)
	
	var j=0;
	$.ajax({
		
		type:"get",
		url:"json/shows1.json",
		success:function(res){
				$(".photoimgbox img").attr("src","image/"+res[index1]["content"][0].img)
//				console.log("zzz")
//				$(".curtitle").text(res[index].title)
//				console.log(res[index1].title)
				$(".left").click(function(){
				
					j--;
//					console.log(j)
					if (j<0) {
						j=(res[index1]["content"].length-1);
						
					}
					
					$(".photoimgbox img").attr("src","image/"+res[index1]["content"][j].img)
					
				})
//				
//				
				$(".right").click(function(){
				
					j++;
					
					if (j>res[index1]["content"].length-1) {
						j=0;
						
					}
					
					$(".photoimgbox img").attr("src","image/"+res[index1]["content"][j].img)
					
				})
			
			
		}
	});
	
})