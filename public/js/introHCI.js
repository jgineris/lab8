'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	$('.likeBtn').click(recordLike);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

function recordLike() {
	ga("send", "event", "like", "click");
}