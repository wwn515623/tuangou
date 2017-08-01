// 下拉列表
$(function(){
	$(".select").css("display","none");
	var state=0;
	$(".city").click(function(){
		if(state==0){
			$(".select").show();
			$(".down").css("transform","rotate(180deg)");
			state=1;
		}else{
			$(".select").hide();
			$(".down").css("transform","rotate(360deg)");
			state=0;
		}
	})
	$(".select li").click(function(){
		$(".text").html($(this).html());
	});

});
// 轮播图swiper
$(function(){
	var swiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",//出现圆点，注意加div
		paginationClickable:true,//点击时切换
		spaceBetween:20,
		mousewheelControl:true,
		loop:true,
		autoplay:1500,
		autoplayDisableOnInteraction:true,
		});
})
// 倒计时
window.onload=function(){
	var timer=document.getElementById("timer");
	clock();
	setInterval(clock,1000);
	function clock(){
		var nowTime = new Date();
		var newTime = new Date(2017,4,20,00,00,00);
		var onlyTime = Math.floor((newTime-nowTime)/1000);
		var strTime = Math.floor(onlyTime/3600)+":"+Math.floor(onlyTime%3600/60)+":"+onlyTime%60;
		timer.innerHTML = strTime;
	}
}
// 查看更多
var state=0;
function checkAll(){
	if(state==0){
		$("#likeMore").slideDown(200);
		$("#open").css("display","none");
		$("#close").css("display","block");
		state=1;
	}else{
		$("#likeMore").slideUp(200);
		$("#open").css("display","block");
		$("#close").css("display","none");
		state=0;
	}
}