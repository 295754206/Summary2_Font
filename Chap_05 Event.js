/* 事件函式调用方式 */

// 在元素标签中直接调用事件函式
<input type="button" onclick="alert(' ')" value="弹出"/>

// script调用
oDiv.onclick = function(){};



/* 事件类型 */

// 鼠标事件
e.onclick = function(){};       // 点击
e.onmouseover = function(){     // 移入
    e.style.color = "red";
};   
e.onmouseout = function(){};    // 移出
e.onmousedown = function(){};   // 按下
e.onmouseup = function(){};     // 松开
e.onmousemove = function(){};   // 移动

// 键盘事件
e.onkeydown = function(){};     // 键盘按下
e.onkeyup = function(){};       // 键盘松开

// 统计字符串长度 (或用于输入键盘抬起时候的验证)
oTxt.onkeyup = function(){
    let str = oTxt.value;
    oTxt.innerHTML = str.length;
}

// 光标聚焦
oSearch.onfocus = function(){
    if(this.value == "百度一下，你就知道"){
        this.value = "";
    }
}
oSearch.onblur = function(){
    if(this.value == ""){
        this.value = "百度一下，你就知道";
    }
}

// 光标预先定位
window.onload = function(){
    let c = getElementById("txt");
    c.focus();
}

// 选中文本事件
c.onselect = function(){};

// 单选框选项选中事件
for(let i=0;i<oFruit.length;i++){
    oFruit[i].onchange = function(){
        if(this.checked){
            open.innerHTML = "你选择的是"+this.value;
        }
    }
}

// 多选框的全选与反选
oSelectAll.onchange = function(){
    if(this.checked){
        for(let i=0;i<ofruit.length;i++){
            oFruit[i].checked = true;
        }
    }else{
        for(let i=0;i<oFruit.length;i++){
            oFruit[i].checked = false;
        }
    }
}

// 下拉列表的选择
<script>
    window.onload = function(){
        let oList = document.getElementById("list");
        oList.onchange = function(){
            let link = this.options[selectedIndex].value;
            window.open(link);
        };
    }
</script>
<body>
    <select id="list">
        <option value="www.google.com">谷歌</option>
        <option value="www.baidu.com">百度</option>
    </select>
</body>

// 禁止复制、禁止选取文本
window.onload = function(){
    this.document.body.oncopy = function(){
        return false;
    }
    this.document.body.onselectstart = function(){
        return false;
    }
}

// 禁用鼠标右键菜单
window.onload = function(){
    this.document.oncontextmenu = function(){
        return false;
    }
}

// 禁用Shift,Alt,Ctrl键
window.onload = function(){
    this.document.onkeydown = function(){
        if(e.shiftKey||e.altKey||e.ctrlKey){
            alert("禁止使用这三个键");
        }
    }
}

// 离开页面触发事件
window.onbeforeunload = function(e){
    e.returnValue = "记得下次再来";
}

// 获取上下左右方向键
window.addEventListener("keydown",function(e){
    if(e.keyCode == 38 || e.keyCode == 87){
        oDiv.innerHTML = "上";
    }else if(e.keyCode == 39 || e.keyCode == 68){
        oDiv.innerHTML = "右";
    }else if(e.keyCode == 40 || e.keyCode == 83){
        oDiv.innerHTML = "下";
    }else if(e.keyCode == 37 || e.keyCode == 65){
        oDiv.innerHTML = "左";
    }else{
        oDiv.innerHTML = "";
    }
})

// 点击<li>元素改变css
window.onload = function(){
    for(let i=0;i<oLi.length;i++){
        oLi[i].onclick = function(){
            this.style.color = "red";   // 这一句改成oLi[i].style.color = 'red'就不可以了
        }
    }
}

// 添加事件监听器   事件监听器可以为同一元素同一事件添加不同函式,而单独的.onclick/.onload为事件处理器只,会执行最后一个同名函式
oBtn.addEventListener("click",alertMes,false);
function alertMes(){
    alert("something");
}
oBtn.addEventListener("click",function(){   // 匿名函数表示法
    alert("something");
},false);

// window.onload打包成监听器
// 1
window.addEventListener("load",function(){},false);
// 2
function addLoadevent(func){
    let oldload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldload();
            func();
        }
    }
}
addLoadevent(function(){/*........*/});

// 解除事件监听器
oDiv.removeEventListener("click",changeColor,false);

// 解除事件处理器
e.onclick = changeColor;
oBtn.addEventListener("click",function(){
    e.onclick = null;
},false);

// event的类型
e.onclick = function(){
    alert(e.type);
}
