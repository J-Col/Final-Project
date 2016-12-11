//Taken from http://jsfiddle.net/jfriend00/rnWa2/
function startMoving(img) {
    var img$ = $(img);
    var imgWidth = img$.width();
    var screenWidth = $(window).width();
    var amount = screenWidth - (parseInt(img$.css("left"), 10) || 0);
    // if already past right edge, reset to
    // just left of left edge
    if (amount <=0 ) {
        img$.css("left", -imgWidth);
        amount = screenWidth + imgWidth;
    }
    var moveRate = 300;   // pixels per second to move
    var time = amount * 1000 / moveRate;
    img$.stop(true)
        .animate({left: "+=" + amount}, time, "linear", function() {
            // when animation finishes, start over
            startMoving(this);
        })
}

$(document).ready(function() {
    // readjust if window changes size
    $(window).resize(function() {
        $(".mover").each(function() {
            startMoving(this);
        });
    });
});
