$(document).ready(function(){

	$('#plain').click(function(){		
		shake();
	var size=prompt("how big of a grid would you like?");
	grid(size);
	black();
	});
	$('#random').click(function(){
		shake();
	var size=prompt("how big of a grid would you like? Also click to change the color!");
	grid(size);
	rand();
	$(".main").click(function(){
		rand();
	});
	});
	

	$('#shake').click(function(){
		
		shake();
	});
	$('#change').click(function(){
		rand();
	});
	


function grid(size){
	var i=1;
	var j=1;
	side = Math.floor(Math.sqrt((960*960) / (size * size)));
	while (i<=size){	
		$('.main').append('<div class="up'+i+'" style="display:inline-block;">');
			while(j<=size){
				$(".up" + i).append('<div class="cell" style="width:' + side +'px; height:' + side + 'px">');
					j++;
			}
		i++;
		j=1;
		}
}
function black(){
	$('.cell').hover(function(){
			$(this).css('background-color','black');

	});
}
function rand(){
	var r =Math.floor((Math.random()*255)+1);
	var g =Math.floor((Math.random()*255)+1);
	var b =Math.floor((Math.random()*255)+1);
	$('.cell').hover(function(){
		$(this).css("background-color","rgb("+ r + "," +g + "," + b + ")") ;
	});

}
function shake(){
	$('.main').empty();
}

});