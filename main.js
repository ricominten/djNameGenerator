/*
	DJ Name Generator
	Concept & Design by: Michael Kleinman
	Development: Rico Minten
*/


$( document ).ready(function() {

	var sound = true
	$('.js-audio-controls').click(function(){
		$('.audio_on').toggle();
		$('.audio_off').toggle();
		if (sound)
			sound = false;
		else
			sound = true;
		console.log(sound)
	})

    
	$('.js-start').click(function(){
		$('.intro').hide();
		$('.generate').show();
	})

	$('.js-generate').click(function(){

		var dj = 'DJ';
		var firstName = $('.js-first-name').val();
		var lastName = $('.js-last-name').val();
		if (firstName !== '' || lastName !== '') {
			var djName = dj + ' ' + firstName + ' ' + lastName;

			$('.result-name').html(djName);
			$('.generate').hide();
			$('.result').show();
			if (sound) {
				var song = $('audio').get(0);
				song.play();
			};
			$('.js-first-name').val('')
			$('.js-last-name').val('');
			$('.js-first-name').attr('placeholder',' ');
			$('.js-last-name').attr('placeholder',' ');
		} 
		else {
			$('.js-first-name').attr('placeholder','Please enter here');
			$('.js-last-name').attr('placeholder','Please enter here');

		}
	})

	$('.js-retry').click(function(){
		$('.result').hide();
		$('.intro').show();
	})

   	$(function() {
     	$(".playback").click(function(e) {
       		e.preventDefault();

      		// This next line will get the audio element
       		// that is adjacent to the link that was clicked.
       		
       		if (song.paused)
         		song.play();
       		else
         		song.pause();
     	});
   	});



	/************************ Twitter Share ************************/
    // We bind a new event to our link
    $('.tweet').click(function(e){
     
        //We tell our browser not to follow that link
        e.preventDefault();
     
        //We get the URL of the link
        var loc = $(this).attr('href');
     
        //We get the title of the link
        var title  = encodeURIComponent($(this).attr('title'));
     
        //We trigger a new window with the Twitter dialog, in the middle of the page
        window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
     
    });


    

});