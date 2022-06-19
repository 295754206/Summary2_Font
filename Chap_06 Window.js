/* 窗口操作 */



// 打开新的连接窗口(不同域名)
oBtn.onclick = function(){
    window.open("https://www.google.com");
    window.open("https://www.google.com","_blank");     // 默认即为_blank,_self为本窗口打开
}

// 打开新的输出窗口(同域名)
let opener = window.open();
opener.document.write("这是一个新窗口");
opener.document.body.style.backgroundColor = "pink";

// 往空白窗口输出一个页面
let opener = window.open();
let strHtml = '<html>\
               <head>\
                <title></title>\
               </head>\
               <body>\
                <strong>新页面</strong>\
               </body>\
               </html>';
opener.document.write(strHtml);

// 操作新窗口
obtn[0].onclick = function(){
    let opener = window.open();
    let strHtml = '<html>\
               <head>\
                <title></title>\
               </head>\
               <body>\
                <strong>新页面</strong>\
               </body>\
               </html>';
    opener.document.write(strHtml);
}
obtn[1].onclick = function(){
    let odiv = opener.document.getElementsByTagName("div")[0];
    odiv.style.color = "hotpink";
    odiv.fontWeight = "bold";
}

// 关闭当前窗口
window.close();

// 关闭新窗口
opener.close();



/* 对话框 */



// confirm()
obtn.onclick = function(){
    if(confirm("确定要跳转到谷歌页面吗？")){
        window.location.href = "https://www.google.com";
    }else{
        document.write("你取消了跳转");
    }
}

// prompt()
let name = prompt("请输入你的名字");
document.write("欢迎来到<strong>"+name+"</strong>");



/* 定时器 */



// 一次性计时器setTimeout()
window.onload = function(){
    this.setTimeout('alert("welcom")',2000);// 代码当字符串表示
    this.setTimeout(alertMes,2000);         // 函数名表示
    this.setTimeout("alertMes()",2000);     // 函数名表示
}

// 取消一次性计时器clearTimeout()
timer = setTimeout(alertMes,2000); 
clearTimeout(timer);

// 重复性计时器setInterval()来实现倒计时效果(计时变换)
let n = 5;
window.onload = function(){
    let t = setInterval(countDown,1000);
}
function countDown(){
    if(n>0){
        n--;
        document.getElementById("num").innerHTML = n;
    }
}
<body>
    <p>倒计时：<span>5</span></p>
</body>

// clearInterval()
clearInterval(timer);



/* location对象 */



// 获取当前页面地址
let url = window.location.href;
document.write("当前页面地址是："+url);

// 设置当前页面地址
setTimeout(function(){
    window.location.href = "https://google.com";
},2000);

// 使用search进行当前页面数据库查询  url后?+... ?id=1
let t = window.location.search;
alert(t);

// 使用hash来定位当前页面位置  url后#+... #imgid
window.location.hash;

// 使用navigator来获取浏览器信息
if(window.navigator.userAgent.indexOf("MSIE")!=-1){
    alert("这是IE");
}else if(window.navigator.userAgent.indexOf("Chrome")!=-1){
    alert("这是chrome");
}else if(window.navigator.userAgent.indexOf("Firefox")!=-1){
    alert("这是火狐");
}



/* document操做 */



// document.URL
alert(document.URL);

// 获取先前链入网页document.referrer
alert(document.referrer);
