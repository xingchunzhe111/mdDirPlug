提供md转化为html预览，效果图如下:
![预览图](http://v2.img.vyicoo.cn/Uploads/product/2019-04-23/5cbecd6064a5b.png)

引入JS/css
<pre>
jquery2.0.0.min.js  //jquery 库
marked.min.js     //markdown核心文件 
mdStyle.js    //目录定制JS文件
main.css      //目录定制样式css文件
</pre>
启动
<pre>
(function(){
    $.get("demo.md",function(data){
        mdStyle.init().backFunc(data)
    })
})();
</pre>