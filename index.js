$(document).ready(function($) {
    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');

            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -1.55,
                    value: percent / 100,
                    thickness: 14,
                    size: 200,
                    fill: {
                        color: '#ff5c5c'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('div').text(String((stepValue * 100).toFixed()) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
});

$('#circle-a').circleProgress({
    value: 90,
    fill: {
        color: '#ff5c5c'
    }
});

$('#circle-b').circleProgress({
    value: 80,
    fill: {
        color: '#ff5c5c'
    }
});

$('#circle-c').circleProgress({
    value: 55,
    fill: {
        color: '#ff5c5c'
    }
});
$('#circle-d').circleProgress({
    value: 75,
    fill: {
        color: '#ff5c5c'
    }
});
$('#circle-e').circleProgress({
    value: 50,
    fill: {
        color: '#ff5c5c'
    }
});
$('#circle-f').circleProgress({
    value: 70,
    fill: {
        color: '#ff5c5c'
    }
});