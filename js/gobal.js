// 商品thumbnail
$(function() {
    // 商品頁相簿
    $('.thumbnail-sub').click(function() {
            var _src_thumbnail = $(this).attr('src');
            console.log(_src_thumbnail);
            $(this).parents().find('ul').siblings('img').attr('src', _src_thumbnail);
        })
        // 
    $('#additem').click(function() {
        $('.member-sotre-lightbox').addClass('active');
        $('body').addClass('active');
        $('html').addClass('active');
        $('#wrap').addClass('active');
    })

    $('.member-sotre-lightbox').click(function() {
        $(this).removeClass('active');
        $('body').removeClass('active');
        $('html').removeClass('active');
        $('#wrap').removeClass('active');

    })
    $('.list').click(function() {
        event.stopPropagation();
    })
});


//數字input
(function() {

    window.inputNumber = function(el) {

        var min = el.attr('min') || false;
        var max = el.attr('max') || false;

        var els = {};

        els.dec = el.prev();
        els.inc = el.next();

        el.each(function() {
            init($(this));
        });

        function init(el) {

            els.dec.on('click', decrement);
            els.inc.on('click', increment);

            function decrement() {
                var value = el[0].value;
                value--;
                if (!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment() {
                var value = el[0].value;
                value++;
                if (!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();