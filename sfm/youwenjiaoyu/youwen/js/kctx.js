		$(function(){
   			//微信二维码
    	$("#fuwu li:eq(0)").hover(function(){
    		$("#weixin").toggle();
    	})
    		//返回顶部	
    	$("#fuwu li:eq(2)").mouseenter(function(){
    		$("#fuwu li:eq(2) a img").attr({"src":"images/gotop.png"})
    	})
    	$("#fuwu li:eq(2)").mouseleave(function(){
    		$("#fuwu li:eq(2) a img").attr({"src":"images/backtop.png"})
    	})
     	
	//特色
		$("#img1").mouseenter(function(){
			$("#img1").attr({"src":"images/headico2.png"})
		})
		$("#img1").mouseleave(function(){
			$("#img1").attr({"src":"images/headico.png"})
		})
		$("#img2").mouseenter(function(){
			$("#img2").attr({"src":"images/server2.png"})
		})
		$("#img2").mouseleave(function(){
			$("#img2").attr({"src":"images/server.png"})
		})
		$("#img3").mouseenter(function(){
			$("#img3").attr({"src":"images/teach2.png"})
		})
		$("#img3").mouseleave(function(){
			$("#img3").attr({"src":"images/teach.png"})
		})
		
		
	
		$(".grade_a").mouseover(function(){
			$(this).addClass("ahover").siblings().removeClass("ahover")
		})
		$("#grade_1").mouseenter(function(){
			$("#list_1").show().siblings().hide();
		});
		$("#grade_2").mouseenter(function(){
			$("#list_2").show().siblings().hide();
		});
		$("#grade_3").mouseenter(function(){
			$("#list_3").show().siblings().hide();
		});
		$("#grade_4").mouseenter(function(){
			$("#list_4").show().siblings().hide();
		});
		$("#shutu_a1").mouseover(function(){
			$("#shutu1").show().siblings().hide();
		});
		$("#shutu_a2").mouseover(function(){
			$("#shutu2").show().siblings().hide();
		});
		$("#shutu_a3").mouseover(function(){
			$("#shutu3").show().siblings().hide();
		});
		$("#shutu_a4").mouseover(function(){
			$("#shutu4").show().siblings().hide();
		});
		$("#shutu_a5").mouseover(function(){
			$("#shutu5").show().siblings().hide();
		});
		$("#shutu_a6").mouseover(function(){
			$("#shutu6").show().siblings().hide();
		});
		$("#shutu_a7").mouseover(function(){
			$("#shutu7").show().siblings().hide();
		});
		$("#shutu_a8").mouseover(function(){
			$("#shutu8").show().siblings().hide();
		});
		$("#shutu_a9").mouseover(function(){
			$("#shutu9").show().siblings().hide();
		});
		$("#shutu_a10").mouseover(function(){
			$("#shutu10").show().siblings().hide();
		});
		$("#shutu_a11").mouseover(function(){
			$("#shutu11").show().siblings().hide();
		});
		$("#shutu_a12").mouseover(function(){
			$("#shutu12").show().siblings().hide();
		});
		$("#shutu_a13").mouseover(function(){
			$("#shutu13").show().siblings().hide();
		});
		$("#shutu_a14").mouseover(function(){
			$("#shutu14").show().siblings().hide();
		});
		$("#shutu_a15").mouseover(function(){
			$("#shutu15").show().siblings().hide();
		});
		$("#shutu_a16").mouseover(function(){
			$("#shutu16").show().siblings().hide();
		});
		$(".last").scroll(function(){
			$(".footer").attr({"bottom":"72px"})
		});
		
		

	});
	
