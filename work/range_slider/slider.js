var clicking = false;
function onReady() {
  
  $(".leftButton").bind('mousedown', function(e) {
    clicking = "left";
  });

  $(".rightButton").bind('mousedown', function(e) {
    clicking = "right";
  });
  
  $(".leftButton, .rightButton").bind('mouseup', function(e) {
    clicking = false;
  });
  
  $(".rightButton").bind('mousemove', function(e) {
    e.preventDefault();
    if(clicking == false){
      return ;
    } else if ( clicking == "right" ) {
      var curX = e.pageX - 105;
      var leftX = $('.leftButton').offset().left - 90;
      if (curX <= leftX) { 
        curX = leftX;
      }
      if (curX > 490) {
        curX = 490;
      }
      $("#currentRightValue").html(curX);
      this.style.left = curX + 'px';
    } 
    
  });


  $(".leftButton").bind('mousemove', function(e) {
    e.preventDefault();
    if(clicking == false){
      return ;
    } else if (clicking == "left") {
      var curX = e.pageX - 105;
      var rightX = $('.rightButton').offset().left - 110;
      if (curX <= 0) { 
        curX = 0;
      }
      if (curX > rightX) {
        curX = rightX;
      }
      $("#currentLeftValue").html(curX).offset();
      this.style.left = curX + 'px';  
    }
  });        
} 

