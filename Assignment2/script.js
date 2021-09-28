// WEB303 Assignment 2
// Name: Sanketkumar Arvindbhai Patel
// Student No: 0776059

$(document).on("click", '#vprospect', function(event) { 
	let firstPage = new XMLHttpRequest;
    firstPage.open('GET', 'prospect.html', true);
    $('#vprospect').load('prospect.html #vprospect');
});
$(document).on("click", '#vconvert', function(event) { 
	let secondPage = new XMLHttpRequest;
    secondPage.open('GET', 'convert.html', true);
    $('#vconvert').load('convert.html #vconvert');
});
$(document).on("click", '#vretain', function(event) { 
	let thirdPage = new XMLHttpRequest;
    thirdPage.open('GET', 'retain.html', true);
    $('#vretain').load('retain.html #vretain');
});

