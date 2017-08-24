// 商品thumbnail
$(function() {
    // 商品頁相簿
    $('.thumbnail-sub').click(function() {
            var _src_thumbnail = $(this).attr('src');
            console.log(_src_thumbnail);
            $(this).parents().find('ul').siblings('img').attr('src', _src_thumbnail);
        })
        // 

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



$(function() {
    // 個人友善商店

    // 選擇時段勾選後 才出現填寫時間
    $('.my-settings ul li input[type="checkbox"]').change(function() {
        if (this.checked) {
            $(this).parents('li').find('input[type="text"]').css('display', 'inline-block');
        } else {
            $(this).parents('li').find('input[type="text"]').css('display', 'none');
        }

    });
    // 點開光箱
    $('.open-lightbox.receive').click(function() {
        $('.member-sotre-lightbox.receive').addClass('active');
    });
    $('.open-lightbox.donate').click(function() {
        $('.member-sotre-lightbox.donate').addClass('active');
    });
    $('.open-lightbox.additem').click(function() {
        $('.member-sotre-lightbox.additem').addClass('active');
    });

    // 關閉商品光箱
    $('.member-sotre-lightbox').click(function() {
        $(this).removeClass('active');

    });
    // 防止內容關閉光箱
    $('.lightbox-inner').click(function() {
        event.stopPropagation();
    })



});

//  訂單管理 出貨中
$(function() {
    // 團友名單展開
    $('.group-list-title i').each(function() {
            $(this).click(function() {
                if ($(this).hasClass('fa-plus')) {
                    $(this).addClass('fa-minus').removeClass('fa-plus');
                } else {
                    $(this).addClass('fa-plus').removeClass('fa-minus');
                }

                $(this).parents('.group-list-title').siblings('.group-list-content').slideToggle();
            })
        })
        // 如果進度是已到貨 則button可以使用
    $('.checkarrived').each(function() {
        var schedulebar = $(this).parents('.share').siblings('.percent50').find('ol li:last-child');
        if (schedulebar.hasClass('now')) {
            $(this).removeClass('disable').css('background', 'RGB(153, 195, 85)');
        }
    })


});