

//nav links clicked scroll down animation.
$( document ).ready(function() {
    // Nav-bar Scroll Function
    $(".navigation__link").click(function(){
        //toggles menu on and off.
        $(".navigation__checkbox")[0].checked = false;
        if($(this.hash).height() > $(window).height()) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-25
            }, 1000);
        } else {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-(($(window).height() - $(this.hash).innerHeight())/2)
            }, 1000);
        }
        return false;
    });
});
