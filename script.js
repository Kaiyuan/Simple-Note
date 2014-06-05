jQuery(document).ready(function($) {
	// buttom
	var bockBut 	= $('#Note-back-icon');
	var addBut 		= $('#Note-Add-icon');
	var menuBut 	= $('#Note-Menu-icon');
	var anchorBut 	= $('#Anchor-icon');
	var setBut 		= $('#Note-Settings-icon');
	var timeListBut = $('#Note-list-time-icon');
	var listBut 	= $('#Note-list-icon');
	var starListBut = $('#Note-list-star-icon');
	var tagListBut 	= $('#Note-list-tag-icon');
	var editBut 	= $('.Note-list-Edit');
	var starBut 	= $('.Note-list-star');
	var statusBarButs 	= $('#Note-Status>span');
	var timeListBox	= $('#Time-List>li');

	// Box
	var mainBox 	= $('#Note-Main');
	var sliteBox 	= $('#Note-Slites');
	var searchBox 	= $('#Note-Search-Box');
	var listSlite 	= $('#Note-List-Slite');
	var listSliteBox = $('.Note-list-slite-box');
	var listPost 	= $('.Note-list-post');
	var statusBar	= $('#Note-Status');

	// addBut
	addBut.click(function() {
		sliteBox.css('left', '-380px');
	});

	//bockBut
	bockBut.click(function(event) {
		sliteBox.css('left', 0);
	});

	// function sliteBoxLeft (argument) {
	// 	if (sliteBox.css('left') != 0) {};
	// }

	menuBut.click(function(event) {
		alert(sliteBox.css('left'));
	});

	//Time But
	timeListBut.click(function(event) {
		sliteBox.css('left', 0);
		statusBarButs.removeClass('op1');
		$(this).addClass('op1');

		if (sliteBox.css('left') != '0px' && listSliteBox.css('left')!='0px') {
			setTimeout(function(){
				listSliteBox.css('left', 0);
			},400);
		} else {
			listSliteBox.css('left', 0);
		}
	});
	
	//listBut
	function gotoList () {
		statusBarButs.removeClass('op1');
		listBut.addClass('op1');

		if (sliteBox.css('left') != '0px' && listSliteBox.css('left')!='-380px') {
			setTimeout(function(){
				listSliteBox.css('left', '-380px');
			},400);
		} else {
			listSliteBox.css('left', '-380px');
		}
	}

	listBut.click(function(event) {
		sliteBox.css('left', 0);
		gotoList();
	});
	
	//starListBut
	starListBut.click(function(event) {
		sliteBox.css('left', 0);
		statusBarButs.removeClass('op1');
		$(this).addClass('op1');

		if (sliteBox.css('left') != '0px' && listSliteBox.css('left')!='-760px') {
			setTimeout(function(){
				listSliteBox.css('left', '-760px');
			},400);
		} else {
			listSliteBox.css('left', '-760px');
		}
	});
	
	//tagListBut
	tagListBut.click(function(event) {
		sliteBox.css('left', 0);
		statusBarButs.removeClass('op1');
		$(this).addClass('op1');

		if (sliteBox.css('left') != '0px' && listSliteBox.css('left')!='-1140px') {
			setTimeout(function(){
				listSliteBox.css('left', '-1140px');
			},400);
		} else {
			listSliteBox.css('left', '-1140px');
		}
	});

	//timeListBox 
	timeListBox.click(function(event) {
		gotoList();
	});

	$('.Note-list').on('click', 'Note-list-Edit', function(event) {
		event.preventDefault();
		/* Act on the event */
	});
});