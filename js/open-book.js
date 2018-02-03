
function nextPage(whichGroup,whichDirection) {
  for (var i = 0 ; i < whichGroup.length ; i++) {
      if ($(whichGroup[i]).css("flex-basis") == "100%" && whichDirection == "next") {
        /*is(":visible") && whichDirection == "next") {*/
        console.log("You are here (next)");
        thisDiv = $(whichGroup[i]);
        if (i != whichGroup.length-1) {
          nextDiv = thisDiv.next();
        } else {
          return(false);
        }
        showDirection = "right";
        hideDirection = "left";
      } 
    if ($(whichGroup[i]).css("flex-basis") == "100%" && whichDirection == "prev") {
      console.log("You are here (prev)");
        thisDiv = $(whichGroup[i]);
        if (i != 0) {
            nextDiv = thisDiv.prev()
          } else {
            return(false);
          }
        showDirection = "left";
        hideDirection = "right";
      }    
  } 
  
  thisDiv.addClass("hide").delay(400).removeClass("show");
  nextDiv.addClass("show").delay(400).removeClass("hide");
}  

$(document).ready( function() {
    $('.fa-arrow-left').click(function() {
    nextPage($('.box'),'prev');
    });
    $('.fa-arrow-right').click(function() {
    nextPage($('.box'),'next');
    });
});

