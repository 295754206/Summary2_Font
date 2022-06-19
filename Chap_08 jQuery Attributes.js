/* jQuery4种表达语法 */

  $("p>div").addClass("mydiv");

  // 加入HTML
  $("<h1>I love you</h1>").appendTo("body"); // appendTo()是把语句加入选定的元素已经有的HTML内容之后
  // 加入单纯的文字内容
  $("#test").html("I love you $"); // 使用双引号，则特殊文本$可以显示，单纯的文本使用appendTo()是不可以的
  // 注意：加入<input>标签的时候，需要标明属性，否则ie会报错
  $("<input type="text"></input>").appendTo("#test");
  
  // DOM元件或者window物件
  $(document.form.input).addClass("myinput");

  // size()获取某标签的个数
  let a = $("div").size();
  let a = $("div").length; // 相同功能

  // get()选取一个符合定义物件的内容，如果这个内容被截取并放至另一个物件中，原内容会被清空
  let d = $(this).find("td").get();
  $("mypage").html("<h3>"+d[0].innerHTML+" "+d[1].innerHTML+"</h3>");
  
