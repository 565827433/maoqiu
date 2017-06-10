/**
 * Created by 汤梓寅 on 2017/5/16.
 */
$(function() {
    var $toTop = $('.toTop');
    var $bar=$("nav");
    var	$backToTop = function () {
        var docS = $(document).scrollTop(),winH = $(window).height();
        (docS > 300) ? $toTop.fadeIn('slow'): $toTop.fadeOut('slow');
        (docS > 500) ? $bar.fadeOut('slow'): $bar.fadeIn('slow');
        if(!window.XMLHttpRequest) {
            $toTop.css("top", docS + winH - 166);
        }
    };
    $toTop.click( function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
    $toTop.hide();
    $backToTop();
    $(window).bind("scroll", $backToTop);
});
