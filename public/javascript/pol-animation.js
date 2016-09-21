var pol;
(function (pol) {
    var Animation = (function () {
        function Animation() {
        }
        Animation.carousel = function () {
            $('.carousel').eq(0).children().eq(0).addClass('show');
            setTimeout(function () {
                setInterval(function () {
                    $('.carousel span').each(function (i) {
                        if (this.classList.value.indexOf("show") > -1) {
                            $(this).removeClass("show");
                            if ($('.carousel').eq(0).children().length == i + 1) {
                                i = -1;
                            }
                            $('.carousel').eq(0).children().eq(i + 1).addClass('show animated fadeIn');
                            return false;
                        }
                    });
                }, 2000);
            }, 1000);
        };
        return Animation;
    }());
    pol.Animation = Animation;
})(pol || (pol = {}));
