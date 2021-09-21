/*
	WEB 303
	Starting file for Assignment 1 
	Sanketkumar Patel
*/


$(document).ready(function(){
	$("#salary").keyup(function(){
		newfun();
	});
	$("#percent").keyup(function(){
		newfun();
	});

});

function newfun(){
	let salary = $("#salary").val();
	let percent = $("#percent").val();
	let totalspend = (salary * percent) / 100;
	let temp = totalspend.toFixed( 2 );
	$("#spend").text('$'+ temp);
}