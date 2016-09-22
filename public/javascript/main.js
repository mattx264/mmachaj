"use strick";
function CreateRating(techInfo, index) {
    this.techInfo = techInfo;
    var ratingHolder = Raphael(this.techInfo.id, '100%', '100%');
    var x = 100, y = 100;
   
    ratingHolder.setViewBox(0, 0, x * 2, y * 2, true);

    ratingHolder.customAttributes.segment = function (x, y, r, a1, a2) {
        var flag = (a2 - a1) > 180,
            clr = (a2 - a1) / 360,
            rotate = 90;
        a1 -= rotate;
        a2 -= rotate
        a1 = ((a1) * Math.PI / 180);
        a2 = ((a2) * Math.PI / 180);

        return {
            path: [["M", x, y], ["l", r * Math.cos(a1), r * Math.sin(a1)], ["A", r, r, 0, +flag, 1, x + r * Math.cos(a2), y + r * Math.sin(a2)], ["z"]],
            fill: "hsb(" + clr + ", .75, .8)"
        }
    };

    CreateRating.prototype.showRating = (function () {
        this.animate(1000);
    });
    CreateRating.prototype.animate = function (ms) {
        
        this.paths.animate({ segment: [x, y, 100, 0, this.techInfo.knowledge * 3.6] }, ms || 1500, "bounce");
    }

    this.paths = ratingHolder.path().attr({ segment: [x, y, 100, 0, 0], stroke: "#fff", 'stroke-width': 5 });




    var bg = ratingHolder.circle(x, y, 65).attr({ fill: '#fff', stroke: "#fff", "stroke-width": 4 });
    var img = ratingHolder.image('/images/logo/' + this.techInfo.id + '.png', x / 2, y / 2, 100, 100);

    var hoverBG = ratingHolder.circle(x, y, 100).attr({ fill: '#000', 'fill-opacity': 0, stroke: "#fff", "stroke-width": 4 });

    $('#' + this.techInfo.id).find('.text-wraper').hide();
  
    $('#' + techInfo.id).hover(function () {
        hoverBG.animate({ 'fill-opacity': .5 }, 500, 'easy-in-out', function () {
            $('#' + techInfo.id).find('.text-wraper').show();

        });
    }, logoUnhover)
    function logoHover() {
        hoverBG.animate({ 'fill-opacity': .5 }, 500, 'easy-in-out', function () {
            $('#' + techInfo.id).find('.text-wraper').show();

        });
    }
    function logoUnhover() {
        setTimeout(function () {
            hoverBG.animate({ 'fill-opacity': 0 }, 200, 'easy-in-out', function () {
                $('#' + techInfo.id).find('.text-wraper').hide();
            });
        }, 500)
    };

};

$(document).ready(function () {
    new WOW().init();
    var controller = new ScrollMagic.Controller();
    //
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 1000);
                    return false;
                }
            }
        });
    });
    allSectionId=['home','profile','technology','resume','portfolio','certifications'];
    for(var j=0;j<allSectionId.length;j++){
        (function (id,id2) {
        new ScrollMagic.Scene({
              triggerElement: id
        }).addTo(controller)
             .on("enter ", function (e) {
                 for(var k=0;k<allSectionId.length;k++){
                      $("#"+allSectionId[k]+'Nav').removeClass("active");
                 }
                $(id+'Nav').addClass("active");
             })
            .on("leave ", function (e) {
                for(var k=0;k<allSectionId.length;k++){
                    $("#"+allSectionId[k]+'Nav').removeClass("active");
                }
            $(id2+'Nav').addClass("active");
            
            })
        })('#'+allSectionId[j],'#'+allSectionId[j-1]);
    }


    //home section;
    pol.Animation.carousel();
    $('.scroll-down-wraper').hide();
    var initTextTween = new TweenLite.to('.welcome-text', 0.7,
        {
            top: '50%',
            onComplete: function () {
                new TweenLite.to('.welcome-text .ja', 1, {
                    transform: 'rotate(90deg)',
                    onComplete: function () {
                        $('.eye').addClass('action-eyeblink');
                        setTimeout(function () {
                            $('.scroll-down-wraper').show();
                            new TweenLite.to('#scroll-down-svg-1', 1.5, {
                                top: 20,
                                onComplete: function () {
                                    this.restart();
                                }
                            });
                            new TweenLite.to('#scroll-down-svg-2', 1.5, {
                                top: 40,
                                onComplete: function () {
                                    this.restart();
                                }
                            });
                        }, 1000)

                    }
                })

            }

        });

    new ScrollMagic.Scene({
        triggerElement: '#home'
    })
      //  .setTween(initTextTween)
    .addTo(controller);
    
    //tech section;
    //modal

    var logoList = [{ id: 'csharp', knowledge: 90 }, { id: 'js', knowledge: 85 }, { id: 'html5', knowledge: 90 }, { id: 'sql', knowledge: 75 },
        { id: 'vs2015', knowledge: 85 }, { id: 'vs2013', knowledge: 85 }, { id: 'vs2010', knowledge: 85 }, { id: 'vs2008', knowledge: 85 },
        { id: 'css3', knowledge: 73 }, { id: 'sass', knowledge: 75 }, { id: 'less', knowledge: 70 }, { id: 'bootstrap', knowledge: 90 },
        { id: 'ecma6', knowledge: 30 }, { id: 'typescript', knowledge: 75 },
        { id: 'dotnet', knowledge: 60 }, { id: 'mvc', knowledge: 93 }, { id: 'entityframework', knowledge: 70 }, { id: 'netcore', knowledge: 30 },
        { id: 'angular', knowledge: 89 }, { id: 'angular2', knowledge: 20 }, { id: 'react', knowledge: 20 }, { id: 'ui-bootstrap', knowledge: 95 },
        { id: 'node', knowledge: 40 }, { id: 'mongodb', knowledge: 30 }, { id: 'npm', knowledge: 80 }, { id: 'gulp', knowledge: 69 },
        { id: 'tfs', knowledge: 70 }, { id: 'github', knowledge: 75 },
        { id: 'cpp', knowledge: 55 }, { id: 'java', knowledge: 50 }

    ];
    var techLogoList = [];
    for (var i = 0; i < logoList.length; i++) {
        techLogoList[logoList[i].id] = new CreateRating(logoList[i], i);
    }

    for (var i = 1; i < 10; i++) {
        var elementId = "#row" + i;
        new TechScene(elementId)
    }
    function TechScene(elementId) {
        this.elementId = elementId;
        new ScrollMagic.Scene({
            triggerElement: this.elementId,
            triggerHook: 0.8,
            duration: '30%',
            reverse: false
        })
            .on("enter ", function (e) {
                $(elementId).addClass("fadeIn");
            })
            .on("leave", function (e) {
                $(elementId).addClass("fadeIn")
                $(elementId + " .tech-logo").each(function () {
                    techLogoList[this.id].showRating() //console.log(this.id);
                });
                if(getCookie('modal')==null||getCookie('modal')==''){
                    setCookie('modal',true,365)
                    $('.modal').attr('style','display:block');
                    $('.modal-backdrop').attr('style','display:block');
                }
            })
            .addTo(controller)
            //.addIndicators()
    }
    $("#modelIgotit").click(function(){
        $('.modal').attr('style','display:none');
        $('.modal-backdrop').attr('style','display:none');
    })
    TechScene.prototype = {
        elementId,
        enterScene: function (e) {
            $(this.elementId).addClass("fadeIn");
        }
    }

});
function Infobox(r, options, attrs) {
    options = options || {};
    attrs = attrs || {};
    this.paper = r;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || this.paper.width;
    this.height = options.height || this.paper.height;
    this.rounding = options.rounding || 0;
    this.show_border = options.with_border || false;
    this.container = this.paper.rect(this.x, this.y, this.width, this.height, this.rounding).attr(attrs);
    var container_id = this.container.node.parentNode.parentNode.id;
    container_id = container_id || this.container.node.parentNode.parentNode.parentNode.id;
    this.raph_container = jQuery('#' + container_id);

    if (!this.show_border) { this.container.hide(); }

    this.div = this.raph_container; //jQuery('<div style="position: absolute; overflow: auto; width: 0; height: 0;"></div>').insertAfter(this.raph_container);
    //this.raph_container.append('<div style="position: absolute; overflow: auto; width: 0; height: 0;"></div>');

    jQuery(document).bind('ready', this, function (event) { event.data.update(); });
    jQuery(window).bind('resize', this, function (event) { event.data.update(); });
}

Infobox.prototype.update = function () {
    var offset = this.raph_container.offset();
    this.div.css({
        'top': (this.y + (this.rounding) + (offset.top)) + 'px',
        'left': (this.x + (this.rounding) + (offset.left)) + 'px',
        'height': (this.height - (this.rounding * 2) + 'px'),
        'width': (this.width - (this.rounding * 2) + 'px')
    });
}

// Note that the fadein/outs for the content div are at double speed. With frequent animations, it gives the best behavior
Infobox.prototype.show = function () {
    this.container.animate({ opacity: 1 }, 400, ">");
    this.div.fadeIn(200);
}

Infobox.prototype.hide = function () {
    this.container.animate({ opacity: 0 }, 400, ">");
    this.div.fadeOut(200);
}

Infobox.prototype.remove = function () {

    $(this.div).find('div').remove();
}