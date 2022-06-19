
/* Filtering */


//     <body>
//         <div id="myimg">
//             <img src="" width="" height="" class="fade">
//             <img src="" width="" height="">
//             <img src="" width="" height="">
//         </div>
//     </body>

$(document).ready(function(){
    
    /* 选择某个图片 */
    $("#myimg img:eq(1)").addClass("myimg");     // index是0，第二张图片被加入框类型
    $("#myimg img").eq(1).addClass("myimg");     // 等价写法
    
    /* 过滤某些图片 */
    $("myimg img").each(function(){                // 写法一
        if($(this).hasClass("fade")){
        // if($(this).is(".fade"))                 // 写法二
            $(this).fadeOut(1000);
        }
    })
    
    $("#myimg img").filter(".fade").fadeOut(1000); // 写法三
    
    $("#myimg img").filter(function(){             // 写法四
        $(".fade").fadeOut(1000);
    })
    
    $("#myimg img").not(".fade").fadeOut(1000);    // 反向not
    
    /* 截取图片片段 */
    $("#myimg img").slice(1,3).fadeOut(1000);     // [1,3),片段序号为index,即index为1和2的两张图片消失
    
})



/* Finding */

$(document).ready(function(){
    $("#myimg img").css("width","200").add("div").css("border","2px solid #D4D0C8"); // 选择img加上css后并上div元素一齐加上css
    
});





