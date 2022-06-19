/*  <字符串>  */

// 字符串转换为数字
Number(str);
// 数字转换为字符串
num+"";
num.toString();
// 字符串取数
let x = "3.14";
let int = parseInt(x);
let y = "3.14abc";
let float = parseFloat(y);
//字符串长度
str.length;
//转换大小写
str.toUpperCase();
str.toLowerCase();
//取字符
str.charAt(6);
//截取片段
str.substring(5,7);
str.substring(5);
//替换字符串
str.replace(/loser/g,"hero");
str.replace("loser","hero");
//分割字符串
str.split(",");
str.split("");
//检索字符串位置
str.indexOf("Love");
str.indexOf("L");
str.lastIndexOf("e");
//判断是否是非数字
isNaN(char);



/*  <数组>  */
//创建数组
var arr = [];
var arr = ["A","B","C"];
//数组长度
arr.length;
//截取数组
arr.slice(0,5);
//头插法增加元素
arr.unshift(str1,str2,str3); //是整体头插而不是一个一个头插
//尾插法增加元素
arr.push(str1,str2,str3);
//shift第一个元素
arr.shift();
//pop最后一个元素
arr.pop();
//数字数组大小排序
function up(a,b){
    return a-b;
}
function down(a,b){
    return b-a;
}
arr.sort(up);
arr.sort(down);
//反转数组
arr.reverse();
//将数组元素连接成字符串
arr.join(); //默认用，来连接
arr.join("*");
str1.split("*").join("#");



/*  <日期>  */
//获得和设置时间
var d = new Date();
var onlyDay = d.getDate();
var onlyMonth = d.getMonth()+1;
var onlyYear = d.getFullYear();
getHours();
getMinutes();
getSeconds();
d.setFullYear(year,month,day); //后两个为可选参数
d.setMonth(month,day);
d.setDay(day);
setHours(h,m,s,ms);
setMinues(m,s,ms);
setSeconds(s,ms);
//获取星期几
d.getDay(); //0表示周日，1...6表示周一到周六



/*  <数学>  */
//度数表示法
120*Math.PI/180;
//最大值最小值
Math.max(1,2,3,9,8,7);
Math.min(2,1,3);
//向下取整、向上取整
Math.floor(3.14);
Math.ceil(3.14);
//三角函数
Math.sin(30*Math.PI/180);
Math.cos();
Math.tan();
//生成随机数
Math.random()*10; //生成0-10之间随机数
Math.random()*2+8; //生成8-10之间随机数
Math.random()*18-8; //生成-8-10之间的随机数
Math.floor(Math.random()*6+2); //生成2-8的随机整数
//生成随机验证码
var str = "abcdefg1234567";
var arr = str.split("");
var result = "";
for(let i=0;i<4;i++){
    let n = Math.floor(Math.random()*arr.length);
    result += arr[n]; 
}
//生成随机颜色值
let r = Math.floor(Math.random()*256+1);
let g = Math.floor(Math.random()*256+1);
let b = Math.floor(Math.random()*256+1);
let color = "rgb("+r+","+g+","+b+")";
return color;


//其他

document.write("hello");

window.onload = function(){
    this.alert("欢迎打开网页");
}
window.onbeforeunload = function(){
    var e = event || window.event;
    e.returnValue("记得下次再来");
}

var e = null //表示系统没有给这个变量分配内存空间
var e //e为undefined

document.write("写完这句话后换行"+"<br/>");


// 换行
document.write("<br/>");    //html
alert("\n");    //js

// switch
switch(x){
    case 1:
        x++;break;
    case 2:
        x--;break;
    default:
        n = 0;
}

// 简单页面变换操作
for(let i=2;i<5;i++){
    documnet.write("<p style='font-size:"+i*5+"px'>词汇</p>");
}

// 判断整数还是小数
let n = 3.14;
parseInt(n.toString()) == parseFloat(n.toString());

// 在超链接、事件中调用函数
function x(){
    alert("1\n2");
}
<a href="javascript:x()">函数点击按钮</a>
<input type="button" onclick="x()" value="点击"/>


// ------------------supply part---------------------


// PERL

console.log()   // 标准输出

.help           // 取得协助讯息
.editor         // 编辑器模式

node -e "console.log('Hello')"  // 不进入PERL下执行js程式; 双引号也可不加
node -e "1+1"                   // 不显示结果
node -p "1+1"                   // 显示结果：2

node --use_strict   // 使用严格模式
function foo(){     // 片段中使用严格模式
    'use strict'
    // other code ...
}

node hello.js       // 需要先找到文件位置（当前文件页面下）; 由于node.js读取文档是使用utf-8所以文本编辑时尽量
                    // 使用utf-8编码否则会导致汉字无法正常显示

// Number

0xA         // 16进位的10 （0x开头）
0o12        // 8进位的10 （0o开头）
0b1010      // 2进位的10 （0b开头）

1.2e13      // 科学计数法
1.3e-10

Number('10')    // 使用Number()将字符串剖析为数字
Number('0x12')
Number('10.9')
Number('1.2e-3')

Number.MAX_SAFE_INTEGER                 // 获得最大安全整数范围
Number.MIN_SAFE_INTEGER
Number.isSafeInteger(9007199254740922)  // 判断是否为安全范围内的数字

let n = 65535
n.toExponential()         // 转化为科学计数法表示：'6.5535e+4'
(4096).toExponential(2)   // 4.1e+3,直接用数字来做的话需要外面包上()

0.1+0.1+0.1          // 0.300000000000004
1.0-0.8              // 0.199999999999996
0.1*3                // 0.300000000000004
0.1+0.1+0.1 === 0.3  // false

2**3        // 8
9**0.5      // 3

'10'-'5'    // 5
'10'*'5'    // 50
Number('10')-Number('5')    // 5, 应当使用这种显式转换后再进行数字运算

let count = 0       // 计算0-360度循环
count = (count+1)%360

1/0                 // Infinity
1/0 === Infinity    // true
Infinity === Number.POSITIVE_INFINITY   // true
-Infinity === Number.NEGATIVE_INFINITY  // true

// NaN不等于任何值，也是唯一不等于自身的值
0/0                 // NaN
typeof NaN          // 'number'
NaN === NaN         // false
NaN === Number.NaN  // false

// String

console.log('\'')               // 转义为原来的'字符

'\x41'  // 'A' 码元表示方式
'\uD834\uDD1E'.length                         // 码元数量：2
'\u{1D11E}'.length                            // 2
'\u{1D11E}'.charAt(0) === '\u{1D11E}'         // false
'\u{1D11E}'.charAt(0) === '\uD834'            //true
'\u{1D11E}'.codePointAt(0)                    // 获取指定位置的字符的码点
String.fromCharCode(119070) === '\u{1D11E}'   // 指定码点获得对应的字符

'abcd'.toUpperCase()    // 'ABCD'

'ABC'+'DE'  // 'ABCDE'
'ABC'+1     // 'ABC1'

'AAC'<'ABC' // true

// type

typeof 10                   // 'number'
typeof 'string'             // 'string'
typeof new Number(10)       // 'object',使用new的时候会直接建立物件
typeof new String('string') // 'object'

// Object

let man = {         // 设定物件，物件实字为：{}
    name = 'justin',
    age = 44
}
man.name                // justin
man.age                 // 44
man['name']             // justin 这种方式是把物件当作字典结构,但是要求键的部分必须是字符串
man['age']              // 44
man.nickname = 'tommy'  // 增加特性
delete man.nickname     // 删除特性

// array

typeof []   // 'object'
[].length   // 0

let arr = [10,20,30]    // a[0]：10  a['0']：10
arr.length      // 3
arr[0] = 6      // 修改元素
arr[3] = 40     // 增加元素

arr.length = 10     // 修改数组长度  arr：[10,20,30,40,<6 empty items>]  arr[5]：undifined 
                    // 注意：数组的空项目并不是没有元素值，而是连索引都没有
arr.length = 3      // 修改数组长度  arr：[10,20,30]

Array.from('abcd')              // 接收字符串，返回一个数组['a','b','c','d']
Array.from('\u{1D11E}').length  // 1 

// arrayLike

let arrLike = {
    '0':10,
    '1':20,
    '2':30,
    length:3
}
Array.from(arrLike) // [10,20,30]

// let, const

// let：变数-动态定型（Dynamically-typed）  const：常量-静态定型（Statically-typed）
let r = 1
const PI = 3.14  
console.log("圆周长：",2*PI*r)

// const和let区别在于：const宣告后产生的物件不可以再去参考别的整列（地址），而let可以再去参考别的阵列（地址）
let c = [1,2,3]
const p = [4,5,6,7]
c = p       // success, c：[4,5,6,7]
p = c       // TypeError, 不可更改p的参考对象（位置）, 但是const宣告的p的元素值还是可以改变的：p[1] = 10 -- OK

// let下=会导致参考同一个阵列
let c = [1,2,3]
let c2 = c
c[1] = 10   // 会导致2个array一起变： c：[1,20,3] c2：[1,10,3]

//let, var

console.log(a)  // 错误 ReferenceError：x is not defined

console.log(b)
var b
b = 10          // row1：undefined row2：10  使用var宣告的变数，在其位置前后都是有效的，未指定值前被给予undefined 

console.log(c)
let c
c = 10          // Throw ERROR： 第一行就出错了，使用let宣告c前，c连undefined都没有给，从形式上看只对后文有效 

/* 另外使用var来宣告变数，若该变数已经存在，并不会有任何错误，而let则会报错 */

// void和null

typeof (void 0)     // undefined

let obj = {x:10}    // null用来转移参考对象
obj = null

// judge

// 预设值：判断到那个单元，就回传到哪个单元
let name = ''
console.log(name||'Not give name')
let name = 'Justin'
console.log(name||'Not give name')

// 不应使用==和!=因为这两个运算会将左右两边转换为同一型态再比较是否相等
// 而用===比较时两边运算型态若不相同则一定是false

// 如果是在操作物件，=是将名称参考某个物件，而===是用来比较2个名称是否参考同一物件
let x = new Number(10)
let y = new Number(10)
let z = x
z === x    // true 
z === y    // false

// 如果是用于基本型态，=和===就是一般的正常的比较作用
let x = 10
let y = 10
let z = x
z === x    // true 
z === y    // true

/* JS中除了 0、 NaN、 ''、 null、 undefined 这5个值是假的，其他全是真的 */

// compute

0&1 // 0 AND
0|1 // 1 OR
0^1 // 1 XOR
~0  // 1 NOT

// 位元运算是逐位元运算
0b0010 & 0b1111 // 2
~0b0010         // 0b1101: -5
0b1111          // 15
~0b1111         // 0b0000，而更左边的0变成1，且为负，所以是-16

// << 左位移：左边挤出去抛弃，右边补0
1 << 1  // 2
1 << 2  // 4
1 << 3  // 8
// >> 右位移： 右边挤出去抛弃，左边原来是0补0，原来是1补1
// >>> ：左边一定是补0

