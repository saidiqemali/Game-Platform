//nall mit mouse
$('.ball-cover').on('mousemove', function() {
    var x = event.clientX;
    var y = event.clientY;

    $('.ball').css({
        top: y,
        left: x
    });
})