$(function(){
	
	$("#list1 .nimgb22").click(function(){
		sessionStorage.clear();
		sessionStorage.setItem("id","data"+$(this).index()) 
	})
	


	$("#list2 .nimgb22").click(function(){
		sessionStorage.clear();
		sessionStorage.setItem("id1","data"+$(this).index()) 
	})
	
})