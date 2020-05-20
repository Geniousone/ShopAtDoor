$(document).on('click', '.qty-plus', function () {
   $(this).prev().val(+$(this).prev().val() + 1);
});
$(document).on('click', '.qty-minus', function () {
   if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

// loader 

$(window).load(function() {
    $(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");
});
$(window).load(function() {
    $(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");
});


// Off Canvas Menu Open & Close
$('#offCanvas').on('click', function () {
    $('.nav-offcanvas').addClass('open');
    $('.offcanvas-overlay').addClass('on');
});
$('#offCanvasClose, .offcanvas-overlay').on('click', function () {
    $('.nav-offcanvas').removeClass('open');
    $('.offcanvas-overlay').removeClass('on');
});


$(".request_door_click").click(function(){
	$(".process_complete").hide();
});

$(".request_door_click").click(function(){
	$(".last_step").show();
});