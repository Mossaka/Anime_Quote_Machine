$(document).ready(function() {
	

	$("#button").on('click', function() {
		setQuote();
	});

	/*var setQuote = function() {
		$.ajax({
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
		headers: {
				"X-Mashape-Key": "MUzqdeOSo1mshCuear7hljNznBWrp1N5SPTjsngfXZ9xvMJ9dv"
			},
		method: "POST",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json"
		}).done(function(data) {
			var sQuote = encodeURIComponent(data.quote);
			$('#quote').text(data.quote);
			$('#author').text("-- " + data.author);
			$('.btnTweet').attr('href', "https://twitter.com/intent/tweet?text=" + sQuote)
		});
	}*/

	//setQuote();

	var setQuote = function() {
		$.getJSON('quotes.json').done( function(data) {

			var randInt = Math.floor(Math.random() * data['quotes'].length)
			var quoteObj = data['quotes'][randInt]
			var anime = quoteObj.anime
			var author = quoteObj.author
			var quote = quoteObj.quote

			var sQuote = encodeURIComponent(quote)
			$('#quote').text(quote)
			$('#author').text(author)
			$('#anime').text(anime)
			$('.btnTweet').attr('href', "https://twitter.com/intent/tweet?text=" + sQuote)
		});
	};
});