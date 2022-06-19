
/* jQuery Selectors */

    // ID、标签、类、全部、多个选择器

    $("#01").addClass('mc');
    $("a").addClass('mc');
    $(".myclass").addClass('mc');
    $("*").addClass('mc');
    $("p,div,span.myclass").addClass('mc');


    // 总结： $("ul li:empty").addClass('myclass');
    //             ↑   ↑
    //     所有  sth1下sth2 adj:什么样的
    //           sth1没有就是document下的           
   

    // 层次选择(下)

    $("form input").addClass('showme');         // form下所有input标签
    $("form>input").addClass('showme');         // form下第一层input标签
    $("label+input").addClass('showme');        // 与lable标签为兄弟关系的后面第一个input标签
    $("label~input").addClass('showme');        // 与lable标签为兄弟关系的后面所有input标签


    // 条件选择（的）

    // 顺序+有没有
    
        // 序列
        $("tr:first").addClass("showme");           // tr的第一个(第一个tr)
        $("tr:last").addClass("showme");            // tr最后一个
        $("tr:eq(0)").addClass("showme");           // tr的第一个   注：eq从0开始计算
        $("tr:gt(1)").addClass("showme");           // gt：大于(不包含)
        $("tr:lt(1)").addClass("showme");           // lt：小于(不包含)

        // 奇偶
        $("tr:even").addClass("showme");            // 偶数
        $("tr:odd").addClass("showme");             // 奇数

        // not
        $("tr:not(:first)").addClass("showme");     // not使用(第一个冒号的后面使用)
        $("tr:not(:last)").addClass("showme");

        // 内容empty或parent(有没有)
        $("td:empty").addClass("mydiv");            // empty
        $("td:not(:empty)").addClass("mytd");
        $("td:parent").addClass("parent")           // parent（有内容）
        $("td:not(:parent)").addClass("notparent");

        // 内容有没有指定物件
        $("tr:has(th)").addClass('myth');           // has
        $("tr:not(:has(th))").addClass('mytd');

        // 双结构下的顺序（不单是li,还要求是ul下的li）
        $("ul li:first-child").addClass('mc');      // 所有ul下的第一个li元素
        $("ul li:last-child").addClass('mc');
        $("ul li:nth-child(1)").addClass('mc');     // nth-child(seq)  注：nth从1开始
        $("ul li:not(:nth-child)").addClass('mc');
        $("ul li:only-child").addClass('mc');       // only-child

    // 复杂的属性选择

        $("td[id]").addClass('myclass');            // 有无ID属性
        $("td[@class='test']").addClass('class');   // 选择指定class
        $("a[href^='y']").addClass('mc');           // 开头是y
        $("a[href$='y']").addClass('mc');           // 结尾是y
        $('a[@href$=".pdf"]').addClass('pdf'); 
        $('a[@href$=".pdf"]').css({                 // 直接设置css
            border:"1px solid #ABABAB",
            "background-color":"green",
            color:"green",
            "font-family":'Verdana,"Courier New"'
        });
        $("a[href*='y']").addClass('mc');           // 包含y
        $("a[id][href*='y']").addClass('mc');       // 有ID且包含y的


    // 其他特殊的

        // 有隐藏属性的物件淡出和淡入
        $("tr:hidden").addClass('mytd').fadeIn("slow");
        $("table:not(:hidden)").hide("slow");
        $("table:visible").fadeIn("slow");

        // 包含
        $("a:contains('.pdf')").addClass("mycolor");

        // header
        $(":header").addClass("showme");

        // 动画
        $(document).ready(function(){
            $("#show").click(function(){
                $("div：not(:animated)").animate(
                    {width:"50%"},
                    {queue:false,duration:5000}
                ).animate(
                    {fontSize:'2em'},
                    1000
                ).animate(
                    {borderWidth:5},
                    1000
                );
            });
            $("#stop").click(function(){
                $(":animated").stop();
            });
        });
 

    // 表单下的标签选择

        $(":input").addClass('mc');
        $(":text").addClass('mc');
        $(":input:not(:password)").addClass('mc');
        $(":password").addClass('mc');
        $(":radio").addClass('mc');
        $(":checkbox").addClass('mc');
        $(":image").addClass('mc');

    // 表单下的功能选择

        // 输入栏输入后不可改变，点击按键后可再次更改
        $(document).ready(function(){
            $(":input:enabled").change(function(){
                // jquery设置物件的属性sttr
                $(this).attr({disabled:"disabled"});
            });
            $("#btn").click(function(){
                // 解除disabled的方法
                $(":input:disabled").attr({disabled:""});
            });
        });

        // checkbox中checked和没有checked的物件不同展示
        $(":input:checked").attr({disabled:"disabled"});
        $(":input:not(:checked)").addClass('mc');

        // select被选中后的不同展示
        $(document).ready(function(){
            $("select").change(function(){
                $("select option:selected").addClass('mc');
                $("select").css({
                    "font-family":"Arial",
                    "width":"200px"
                });
            });
        });






/* jQuery with CSS */


// 更改css样式

let mycolor = $('p').css('background-color');
$('#001').css('background-color',mycolor);
$('#002').css({'font':'120%','color':'red'});


// 获取到屏幕边缘距离

let myoffset = $('p').offset();       
$('#001').html(myoffset.left);
$('#002').html(myoffset.top);


// 获取物件宽高

let mywidth = $('p').width();
let myheight = $('p').height();
$('p').width(100);
$('p').height(40);



/* jQuery with List and Dictionary */


// jquery遍历

$(document).ready(function(){
    let station = ["台北","台中","嘉义"];               
    let ticket = {台北:50,台中:300,嘉义:200};  
    // 遍历列表（直接取元素遍历）
    $.each(station,function(){                          
        $("#"+this).text("前往"+this+"的票价：");
    });
    // 遍历字典
    $.each(ticket,function(k,val){                     
        $("#"+k).append(val);
    });
});


// jquery数组更新

$(document).ready(function(){
    let a = ['yahoo','google','youtube'];
    // 遍历列表（直接取元素，并携带元素序列的遍历）
    a = $.map(a,function(n,i){
        i = i+1;
        return (i+':<a href=http://www.'+val+'.com>'+n.toUpperCase()+'</a>');
    });
    $("div").html(a.join("|"))
});
    // result->
    // 1:YAHOO|2:GOOGLE|3:YOUTUBE


// jquery数组过滤

$(document).ready(function(){
    let a = [1,2,3,3,4,5,6,8,7,1];
    $("p").text(a.join(","));
    // format 1
    a = $.grep(a,function(n,i){
        return(n!=3&&i>2);
    });
    // format 2
    a = $.grep(a,"x!=7");
});


// jquery数组除重、物件除重
$.unique(array);

$(document).ready(function(){
        // get()用于获得该物件,单纯的$("")是寻找到某物件
    let dis = $('div').get();
    $('p').text(dis.length);
        // concat()用于串联物件
    dis = dis.concat($(".class").get());
    $('p').append(","+dis.length);
    dis = $.unique(dis);
    $('p').append(","+dis.length);
});


// jquery字典简单继承

$(document).ready(function(){
    let obj1 = {a:1,b:25,c:"Alex"};
    let obj2 = {a:2,b:30,c:"Bob"};
    let obj3 = {a:3,c:"no-one"};
    // extend后obj1与新结果一样，是迭代后的最终结果，而obj2和obj3作为中间数据不会发生改变
    let result = $.extend(obj1,obj2,obj3);
    let dis1 = 'a:'+obj1.a+'    b:'+obj1.b+'    c:'+obj1.c+'<br>';
    let dis2 = 'a:'+obj2.a+'    b:'+obj2.b+'    c:'+obj2.c+'<br>';
    let dis3 = 'a:'+obj3.a+'    b:'+obj3.b+'    c:'+obj3.c+'<br>';
    let res = 'a:'+result.a+'    b:'+result.b+'    c:'+result.c+'<br>';
    $("p").append(dis1).append(dis2).append(dis3).append(res);
    // result->
    // a:3    b:30    c:no-one
    // a:2    b:30    c:Bob
    // a:3    b:undefined    c:no-one
    // a:3    b:30    c:no-one
});






/* jQuery with String Operation */


// 字符串除前后空白

$(document).ready(function(){
    $('#01').click(function(){
        let str = $(":input[name=test]").val();   // str:"          i am here.      "
        str = $.trim(str);                        // str:"i am here."
    });  
});






/* jQuery events */


    $("#dd").click(function(){});
    $("#div").select(function(){}); // 文本被选中
    $("#dd").mousedown(function(){});// 鼠标按下
    $("#dd").mouseup(function(){}); //  鼠标放开
    $("#dd").click(function(){});

    // 绑定事件
    $("div").bind("click",function(){});
    $("div").bind("blur",function(){}); // 失焦
    $("div").bind("change",function(){});   // 改变（内容发生改变后并失焦）
    $("div").bind("dblclick",function(){}); // 双击
    $("div").bind("mousedown",function(){}); // 鼠标按下
    $("div").bind("mouseup",function(){});  // 鼠标放开


    // mousemove()事件--获得鼠标位置

        $(document).ready(function(){
            $(document).mousemove(function(e){
                let myX = e.pageX;
                let myY = e.pageY;
                $(":input[name=x]").val(myX);
                $(":input[name=y]").val(myY);
                return true;
            });
        });
        /* <body>
               x:<input type="text" size=20 name=x><br>
               y:<input type="text" size=20 name=y><br>
               <br>
          </body> */
    

    // resize()事件-改变视窗大小

        $(document).ready(function(){
            $(window).one("resize",function(){
                alert("你已改变视窗大小");
            })
        });


    // 按键事件

        $(document).ready(function(){       
            $(document).keydown(function(e){        // 按键定义：http://unixpapa.com/js/key.html
                if(e==null){    //ie
                    keycode = event.KeyCode;
                }else{  //mozilla
                    keycode = e.which;
                };
                if(keycode == 27){ //esc键隐藏
                    $("#myform").hide("slow");
            });
        });
            
            
    // 当error事件发生时触发的function

        $(window).error(function(){
            return true;
        });

    
    // unload()事件--离开网页触发的行为
            
        $(document).unload(function(){
            alert("记得经常回来");
        });
               
                
    // 网页输入后游标停在第一个栏位

        $(document).ready(function(){
            $(":input[name=name]").focus();
        });


    // 鼠标移入移出效果 hover(over,out)2个函式

        $("div").hover(
            function(){
                $(this).addClass("class1");
            };
            function(){
                $(this).removeClass("class1");
            };
        );
            
            
    // 只执行一次的事件

        $(document).ready(function(){
            $("#dd").one('click',function(){
                $("#dis").append("你只可按键出现此讯息一次而已");
            });
        });
            
      
     // scroll()事件--上下滑动

        $(document).ready(function(){
            $(window).one("scroll",function(){
                alert("请先输入名字");
                $(":input").focus();
            });
        });   
     
            
    // select()事件--物件内文本被选中

        $(document).ready(function(){
            $(":input").select(function(){
                $(this).addClass("myselect");
            });
            $(document).click(function(){
                $(":input").removeClass("myselect");
            });
        });
    
 
    // submit()事件--表单提交检查

        $(document).ready(function(){
            $("#myform").submit(function(){
                $("#myform :input:not('#submit')").each(function(){
                    let text = $(this).val();
                    if(text==""){
                        alert($(this).attr('name')+"不可空白");
                    }
                    if(text!=""){
                        $("#dis").append($(this).attr('name')+"="+text);
                    }
                });
                return false;
            });
        });
            
            
    // trigger()触发器

        $(document).ready(function(){
            $("#myform :input").change(function(){
                $("#myform").trigger("submit");
            });
            $("#myform").submit(function(){
                let text = $("#myform :input").val();
                $("#dis").html("你搜索的是："+text);
                return false;
            });
        });
        /* <body>
               <form id="myform">
                   <input type="text" name="name" size=20>
               </form>
               <div id="dis"></div>
           </body> */
           
            
     // triggerHandler()触发器  与trigger不同，triggerHandler触发时不会引起浏览器默认发生的行为 

        $(document).ready(function(){
            $("input").focus(function(){  // 获得焦点时执行函式
                $("#mydis").remove();
                $("<span id='mydis'>Focused!</span>").appendTo("body").fadeOut(1000); // 淡入效果
            });
            $("#aa").click(function(){
                $("input").trigger("focus");
            });
            $("#bb").click(function(){
                $("input").triggerHandler("focus");
            });
        })


    // 解除绑定的函式
            
        $('p').unbind();            // 将P所绑定的所有事件解除
        
        $('p').unbind("click");     // 将P所绑定的click事件解除
          
        let a = function(){};       // 将P所绑定的自定义事件解除
        $("p").unbind("click",a);
   
            
            
//------------------------  
$("#somediv").hide();
alert($(this).text());
$("#dis").text($(this).attr("name")+"="+$(this).val());
   
$("#dd").toggle(); //
//-------------------------
