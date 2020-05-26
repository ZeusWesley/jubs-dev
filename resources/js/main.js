$(document).on('click', '.mainmenu .close', function() {
    $('.mainmenu').fadeOut(200);
})
$(document).keyup(function(e) {
    if (e.key === "Escape") {
    $('.mainmenu').fadeOut(200);
   }
});