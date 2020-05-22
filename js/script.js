$(window).scroll(function() {
    $('#second .title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+850) {
            $(this).addClass("flip");
        }
    });
});
$(window).scroll(function() {
    $('.blocks').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("slideInUp");
        }
    });
});
$(window).scroll(function() {
    $('#order .title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("tada");
        }
    });
});
$(window).scroll(function() {
    $('#order form').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("jello");
        }
    });
});
