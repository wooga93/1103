$(document).ready(function(){
	//왼쪽 하위메뉴 보이기
	$("#left li>a").on("mouseenter  click" , function(){
		$("#left li>nav").stop().slideUp();
		$(this).next().stop().slideDown();
	});
	//하위메뉴 마지막 항목이 포커스를 잃을때
	$(".last").on("blur  mouseleave" , function(){
		$(this).parent().slideUp();
	});
	$("#left ol").mouseleave(function(){
		$(this).find("nav").slideUp();
	});	
	
	
	
	//오른쪽 위 이미지배너 자동 슬라이드
	const fade = setInterval( fading, 2800 );
	let i = 3;//항목의 개수(<a>가 3개)
	function fading(){
		i--;//i=i-1; 과 같다. (i 변수값을 재할당)
		if(i==0){
			//console.log( i==0 );//비교문은 "true/false"를 반환한다.
			$("#slide>a").fadeIn();//모두 보이게 된다.
			i = 3; //현재 i는 0인데, 3으로 재할당한다.
		}else{
			$("#slide>a").eq(i).fadeOut();
		}		
	}
	
	
	//팝업
	$("#notice li:first-child a").click(function(){
		$("#popup").fadeIn();
	});
	//팝업 닫기
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
	
	
});//end
