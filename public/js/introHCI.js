'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

     $(".version_a").click(function(){
    woopra.track("a_version_click");
  });

  $(".version_b").click(function(){
    woopra.track("b_version_click");
  });


	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
        $('.btn-lg').text("Clicked!");
        $('.jumbotron p').toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
    $("#submitBtn").click(updateProject);

}

function projectClick(e) {
    // prevent the page from reloading
    //console.log("Project clicked");
    e.preventDefault();
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    // $(this).css("background-color", "#7fff00");

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    }
    else {
/*        description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>"); */
        description.toggle();
    }
}

function updateProject(e) {
    var projectID = $('#project').val();
    $(projectID).animate({
        width: $('#width').val()
    });
    var newText = $('#description').val();
    $(projectID + " .project-description").text(newText);
}
