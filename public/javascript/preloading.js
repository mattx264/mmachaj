(function (namespace) {
    "use strick";
    namespace.initLoading = function (pageInit) {
        var loadingCount = 0;
        var image = new Image();
           loadingCount++;
        image.onload = function () {
            loadingCount--;
            if (loadingCount === 0) {
                $('.main').removeClass('hide');
                $('.loader-wraper').remove();
                pageInit();
            }
        };
        image.src = location.protocol + "//" + location.host + "/" + "images/top.jpg";
        $("img").each(function (index, ele) {
            // ele.onLoad=function(){
            //     console.log("ADS");
            // }
            loadingCount++;
            var image = new Image();
            image.onload = function () {
                loadingCount--;
                if (loadingCount === 0) {
                    $('.main').removeClass('hide');
                    $('.loader-wraper').remove();
                }
            };
            image.src = location.protocol + "//" + location.host + "/" + $(ele).attr('src');
        });
    }
    //re= /"(.*?)"/;
    function getStyle(className) {
        for (var j = 0; j < document.styleSheets.length; j++) {
            var css = document.styleSheets[j].rules;
            for (var i = 0; i < css.length; i++) {
                if (css[i].cssText.indexOf('background-image') > -1) {
                    console.log(css[i]);
                }
            }
        }
    }
    getStyle('.test');
})(window.namespace = window.namespace || {});