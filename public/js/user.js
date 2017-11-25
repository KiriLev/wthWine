$(document).ready(function(){
	$('.j-show-new-color').change(function(){
		var vineColor = $('input[name="vine"]:checked').val();
		var bottleColor = $('input[name="bottle"]:checked').val();
		var image = 'images/' + vineColor + '-' + bottleColor + '.jpg';
		$('.j-result-image').attr('src', image);
	});

	$('.j-generate').click(function(){

		$.ajax({
		  url: "/api/generate",
		  // context: document.body
			method: 'get'
		}).done(function(data) {
			console.log(data);

			const img = document.createElement('img');
			img.src = data;

			document.body.append(img);
		  // $( this ).addClass( "done" );
		});

		$('.wrapper').fadeOut(600);
		setTimeout(function(){
			$('.second-step').fadeIn(600);
		}, 600);
		return false;
	});

	$('.j-dislike').click(function(){
		$('.second-step').fadeOut(600);
		setTimeout(function(){
			$('.wrapper').fadeIn(600);
		}, 600);
	});
});
