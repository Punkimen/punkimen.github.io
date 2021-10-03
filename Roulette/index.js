(function ($) {
    $.fn.extend({
        roulette: function (options) {

            var defaults = {
                angle: 0,
                angleOffset: -45,
                speed: 5000,
                easing: "easeInOutElastic",
            };

            var opt = $.extend(defaults, options);

            return this.each(function () {
                var o = opt;

                var data = [
                    {
                        'text': 'Jackpot',
                        'color': '#ff152c'
                    },
                    {
                        'text': 'Lose',
                        'color': '#000'
                    },
                    {
                        'text': '100$',
                        'color': '#ff152c'
                    },
                    {
                        'text': '200$',
                        'color': '#1571f8'
                    },
                    {
                        'text': '300$',
                        'color': '#cf14f9'
                    },
                    {
                        'text': '400$',
                        'color': '#ffd93a'
                    },
                    {
                        'text': '500$',
                        'color': '#0080a3'
                    },
                    {
                        'text': '600$',
                        'color': '#fe441e'
                    },
                    {
                        'text': '700$',
                        'color': '#cf14f9'
                    },
                    {
                        'text': '800$',
                        'color': '#ffd93a'
                    },
                    {
                        'text': '900$',
                        'color': '#0080a3'
                    },
                    {
                        'text': '1000$',
                        'color': '#fe441e'
                    },
                ];

                var $wrap = $(this);
                var $roulette = $wrap.find(".roulette");
                var wrapW = $wrap.width();
                var angleOffset = o.angleOffset;
                var itemSize = data.length;
                var itemSelector = "item";
                var labelSelector = "label";
                var d = 360 / itemSize;
                var borderTopWidth = wrapW;
                var borderRightWidth = tanDeg(d);

                console.log($wrap);

                for (i = 1; i <= itemSize; i += 1) {
                    var idx = i - 1;
                    var rt = i * d + angleOffset;
                    var itemHTML = $('<div class="' + itemSelector + '">');
                    var labelHTML = '';
                    labelHTML += '<p class="' + labelSelector + '">';
                    labelHTML += '	<span class="text">' + data[idx].text + '<\/span>';
                    labelHTML += '<\/p>';

                    $roulette.append(itemHTML);
                    $roulette.children("." + itemSelector).eq(idx).append(labelHTML);
                    $roulette.children("." + itemSelector).eq(idx).css({
                        "left": wrapW / 2,
                        "top": -wrapW / 2,
                        "border-top-width": borderTopWidth,
                        "border-right-width": borderRightWidth,
                        "border-top-color": data[idx].color,
                        "transform": "rotate(" + rt + "deg)"
                    });

                    var textH = parseInt(((2 * Math.PI * wrapW) / d) * .5);

                    $roulette.children("." + itemSelector).eq(idx).children("." + labelSelector).css({
                        "height": textH + 'px',
                        "transform": 'translateX(' + (textH * 1.3) + 'px) translateY(' + (wrapW * -.3) + 'px) rotateZ(' + (90 + d * .5) + 'deg)'
                    });

                }

                function tanDeg(deg) {
                    var rad = deg * Math.PI / 180;
                    return wrapW / (1 / Math.tan(rad));
                }
            });
        }
    });
    let rotateDeg = 0
    const rotate = () => {
        rotateDeg += 15
        $('#roulette').css({
            "transform": `rotate(${rotateDeg}deg)`
        })
    }
    $('#btn-start').on('click', function () {
        rotate()
    })
})(jQuery);

$(function () {
    $('.box-roulette').roulette();
    $(window).on('resize', function () {
        $('.box-roulette').roulette();
    })
});