提供md转化为html预览(demo1)，效果图如下:
![预览图](http://v2.img.vyicoo.cn/Uploads/product/2019-04-23/5cbecd6064a5b.png)

引入JS/css
<pre>
jquery2.0.0.min.js  //jquery 库
marked.min.js     //markdown核心文件 
mdStyle.js    //目录定制JS文件
main.css      //目录定制样式css文件
</pre>
简单启动(参考demo1):
<pre>
(function(){
    $.get("demo.md",function(data){
        mdStyle.init().backFunc(data)
    })
})();
</pre>
控制台多页面启动(参考demo2):
<pre>
    (function(){
        mdStyle.init();
        function changeHash(mdName){
            let showNav = true;//是否显示导航栏
            let dir = "";   //md文件的目录
            if(mdName==""){
                mdName = "demo.md";
                showNav = false;
            }
            $.get(dir + mdName,function(data){
                mdStyle.backFunc(data,showNav)
            })
        }
        // console.log("1:"+window.location.hash+"string:"+typeof(window.location.hash));
        let mdNameHash = window.location.hash.replace("#","");
        changeHash(mdNameHash);
        $(window).bind("hashchange",function(){
            mdNameHash = window.location.hash.replace("#","");
            console.log(mdNameHash);
            changeHash(mdNameHash);
        });
    })();
</pre>
