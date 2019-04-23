let mdStyle = (function(){
    return {
        init:function(){
            $("body").append("<div id=\"markdown-content\" ></div>");
            return this;
        },
        backFunc:function(response){
            $("#markdown-content").html(marked(response));

            //是否显示导航栏
            let showNavBar = true;
            //是否展开导航栏
            let expandNavBar = true;
            let body = $("body");
            body.prepend('<div class="BlogAnchor">' +
                '<span style="color:red;position:absolute;top:-6px;left:0;cursor:pointer;" onclick="$(\'.BlogAnchor\').hide();">×</span>' +
                '<p>' +
                '<b id="AnchorContentToggle" title="收起" style="cursor:pointer;">目录▲</b>' +
                '</p>' +
                '<div class="AnchorContent" id="AnchorContent"> </div>' +
                '</div>');
            let anchorContentDom = $("#AnchorContent");
            body.find("h1,h2,h3,h4,h5,h6").each(function (i, item) {
                let tag = $(item).get(0).tagName.toLowerCase();
                let className = 'item_' + tag;
                let index = $(tag).index($(this));
                let id = tag + "_" + index;
                $(item).attr("id", "wow" + id);
                $(item).addClass("wow_head");
                anchorContentDom.css('max-height', ($(window).height() - 180) + 'px');
                anchorContentDom.append('<li><a class="nav_item ' + className + ' anchor-link" onclick="return false;" href="#" data-link="#wow' + id + '">' + $(this).text() + '</a></li>');
            });
            $("#AnchorContentToggle").click(function () {
                let text = $(this).html().toString();
                if (text == "目录▲") {
                    $(this).html("目录▼");
                    $(this).attr({"title": "展开"});
                } else {
                    $(this).html("目录▲");
                    $(this).attr({"title": "收起"});
                }
                anchorContentDom.toggle();
            });
            $(".anchor-link").click(function () {
                let dataLinkDom = $(this).attr("data-link");
                let top = parseInt($(dataLinkDom).offset().top);
                $("html,body").animate({scrollTop: top}, 0);
            });
            let headerNaves = $(".BlogAnchor li .nav_item");
            let headerTops = [];
            $(".wow_head").each(function (i, n) {
                headerTops.push($(n).offset().top);
            });
            $(window).scroll(function () {
                let scrollTop = $(window).scrollTop;
                $.each(headerTops, function (i, n) {
                    let distance = n - scrollTop;
                    if (distance >= 0) {
                        $(".BlogAnchor li .nav_item.current").removeClass('current');
                        $(headerNaves[i]).addClass('current');
                        return false;
                    }
                });
            });
            if (!showNavBar) {
                $('.BlogAnchor').hide();
            }
            if (!expandNavBar) {
                $(this).html("目录▼");
                $(this).attr({"title": "展开"});
                anchorContentDom.hide();
            }
            return this;
        }
    };
})();