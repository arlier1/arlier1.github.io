
$(function  () {

	var siz=0;
	var flag=true;
	    flag1=true;
		hi=$(window).height();
	var le=$('#content li').length;
		$('html,body').mousewheel(function(event, delta, deltaX, deltaY){

		        if (delta<0&&flag) {="" flag="false;" siz="$(window).scrollTop()">hi*(le-1)?hi*(le-1):hi+$(window).scrollTop();

					$('html,body').stop().animate({scrollTop:siz},time,function  () {
						flag=true;
					})
		        }else{
					if (flag) {
						flag=false;
                       siz=$(window).scrollTop()<hi*2?0:$(window).scrolltop()-hi; $('html,body').stop().animate({scrolltop:siz},time,function="" ()="" {="" flag="true;" })="" }="" return="" false;="" $('html,body').keydown(function="" (event)="" if(event.keycode="=40&&flag){" siz="$(window).scrollTop()">hi*(le-1)?hi*(le-1):hi+$(window).scrollTop();

					$('html,body').stop().animate({scrollTop:siz},time,function  () {
						flag=true;
					})
				 }else if(event.keyCode==38&&flag) {
					if (flag) {
						flag=false;
                       siz=$(window).scrollTop()<hi*2?0:$(window).scrolltop()-hi; $('html,body').stop().animate({scrolltop:siz},time,function="" ()="" {="" flag="true;" })="" }="" return="" false;="" $(window).resize(function="" $(window).scrolltop((siz="" hi)*$(window).height());="" siz="$(window).scrollTop();" hi="$(window).height();" .scroll(function="" if="" ($(window).scrolltop()="">0&&flag1) {
						flag1=false;
						$('#back').show().mouseover(function(){$(this).animate({bottom:'30'},200)})
						.mouseout(function(){$(this).animate({bottom:'20'},200)})

						.stop().animate({borderRadius:'50%',opacity:1},1000).click(function  () {
								$('html,body').animate({scrollTop:0},500,function  () {
									flag1=true;
									siz=0;
								})
						});
					}else {
                        if ($(window).scrollTop()==0) {
							$('#back').stop().animate({opacity:0},500,function  () {
								flag1=true;
							$('#back').css({borderRadius:0}).hide();
							})
                        }

					}
				})
				//翻页事件
				.scroll(function  () {
					if (siz==0) {$(".page1_bg").addClass("animated rollIn").show()}
						else {
                     if (siz!=0) {$(".page1_bg").removeClass("animated rollIn").fadeOut(500)}
						     }
						             })


				//翻页事件
				.scroll(function  () {
					if (siz==0) {$(".page1_cxx").addClass("animated bounceInLeft").show(200)}
						else {
                     if (siz!=0) {$(".page1_cxx").removeClass("animated bounceInLeft").fadeOut(500) }
					}
			        })
				//翻页事件
				.scroll(function  () {
					if (siz==0) {$(".page1_cc").addClass("animated bounceInRight").show(200)}
						else {
                     if (siz!=0) {$(".page1_cc").removeClass("animated bounceInRight").fadeOut(500) }
					}
			        })
					//翻页事件
				.scroll(function  () {
					if (siz==0) {$(".page1_right").addClass("animated fadeInUp").show(200)}
						else {
                     if (siz!=0) {$(".page1_right").removeClass("animated fadeInUp").fadeOut(500) }
					}
			        })
					//翻页事件
				.scroll(function  () {
					if (siz==0) {$(".page1_left").addClass("animated fadeInUp").show(200)}
						else {
                     if (siz!=0) {$(".page1_left").removeClass("animated fadeInUp").fadeOut(500) }
					}
			        })
			//翻页事件page2
			.scroll(function  () {
					if (siz>30&&siz<hi*1+30) {$(".page2_bg").addclass("animated="" rotatein").show()}="" else="" {="" if="" (siz!="hi)" {$(".page2_bg").removeclass("animated="" rotatein").fadeout(500)}="" }="" })="" 翻页事件page3="" .scroll(function="" ()="" (siz="">hi*1+30&&siz<hi*2+30) {$(".page3_bg").addclass("animated="" lightspeedin").show()}="" else="" {="" if="" (siz!="hi*2)" {$(".page3_bg").removeclass("animated="" rotatein").fadeout(500)}="" }="" })="" 翻页事件page5="" .scroll(function="" ()="" (siz="">hi*2+30&&siz</hi*2+30)></hi*1+30)></hi*2?0:$(window).scrolltop()-hi;></hi*2?0:$(window).scrolltop()-hi;></0&&flag)>