// put in a document ready
	// Make a submit event listener 
		// We need to get the text that the user submits in the form. 
		// We need to do a word count on the text. 
		// Then a unique word count. 
		// Average word length in Characters
		// We need to make sure that the results are displayed. 

$(function () {

	$('form').submit(function (event){
		event.preventDefault()
		var words = $('textarea').val()
 		var scrubbedWords = words.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(' ')

		var wordCount = scrubbedWords.length
		var avgWord = scrubbedWords.join('').length / wordCount
		
		var uniques = {}

		for(var i = 0; i < scrubbedWords.length; i++) {
        	var word = scrubbedWords[i]
        	if(!uniques[word]) {
        		uniques[word] = word 
        	}
		}

		var numUniqueWords = Object.keys(uniques).length

		$(".text-report").removeClass("hidden")
		$(".count").text(wordCount)
		$(".unique").text(numUniqueWords)
		$(".average").text(avgWord)
	})
})