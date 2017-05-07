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

			var randInt = Math.floor(Math.random() * data['quotes'].length);
			var quoteObj = data['quotes'][randInt];

			var anime = quoteObj.anime;
			var author = quoteObj.author;
			var quote = quoteObj.quote;

			var sQuote = encodeURIComponent(quote);
			$('#quote').text(quote);
			$('#author').text("-- " + author);
			$('#anime').text(anime);
			$('.btnTweet').attr('href', "https://twitter.com/intent/tweet?text=" + sQuote);

            keyword = anime;

            /*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                {
                    tags: keyword,
                    tagmode: "any",
                    format: "json"
                },
                function(data) {
                    var rnd = Math.floor(Math.random() * data.items.length);

                    var image_src = data.items[0]['media']['m'].replace("_m", "_b");

                    $('body').css('background-image', "url('" + image_src + "')");

                });*/
            var parameter = {
                "q": author
            };

            var url = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?";

            $.ajax({
                url: url + $.param(parameter),
                type: "GET",
                beforeSend: function(xhrObj) {
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","c960a1eea23a46059bbbaff5a8358656")
                },
                data: ""
            })
                .done(function(data) {
                	var image_src = data.value[0].contentUrl;
                    $('body').css('background-image', "url('" + image_src + "')");
                })
                .fail(function() {
                    alert("error");
                });

		});
	};
});