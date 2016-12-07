$(function(){
		var x=800;
		$(".list li").children("a").click(function(){
			$(this).closest("li").addClass("active").children(".content").show().closest("li").siblings("li").removeClass("active").children(".content").hide();
			x = $(this).closest("li").children(".content").outerHeight()+$(this).closest("li").children(".content").offset().top+$(".footer").height();
			console.log(x)
			$("body").css("height",x+20+"px")
		})
		
})