// 标签
        $("#01").addClass('mc');
        $("a").addClass('mc');
        $(".myclass").addClass('mc');
        $("*").addClass('mc');
        $("p,div,span.myclass").addClass('mc');

        // 下
        $("form input").addClass('showme');     // form下所有input标签
        $("form>input").addClass('showme');     // form下第一层input标签
        $("label+input").addClass('showme');    // 与lable标签为兄弟关系的后面第一个input标签
        $("label~input").addClass('showme');    // 与lable标签为兄弟关系的后面所有input标签

        // 的
        $("tr:first").addClass("showme");       // tr的第一个(第一个tr)
        $("tr:last").addClass("showme");        
        $("tr:eq(0)").addClass("showme");  // tr的第一个   注：eq从0开始计算
        $("tr:gt(1)").addClass("showme");  // gt：大于(不包含)
        $("tr:lt(1)").addClass("showme");  // lt：小于(不包含)

        $("tr:even").addClass("showme");  // 偶数
        $("tr:odd").addClass("showme");  // 奇数

        $("tr:not(:first)").addClass("showme"); // not使用(第一个冒号的后面使用)
        $("tr:not(:last)").addClass("showme");

        // 综合
        $("ul li:first-child").addClass('mc');  // 所有父系下的第一个child
        $("ul li:last-child").addClass('mc');  
        $("ul li:only-child").addClass('mc');    // li元素只有一个的
        $("ul li:nth-child(1)").addClass('mc'); // ul下li的第一个child   注：nth-child从1开始计算

        $("ul li:not(:nth-child)").addClass('mc');  

