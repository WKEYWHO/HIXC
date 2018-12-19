var t
var A = 0;
var idNum = 0
var onOff = true;
var arryText = ["人在塔在", "我也好想来现场啊", "！！！！", "瞬间爆炸", "6666", "IG牛逼", "卢本伟牛逼", "这现场够炫", "一波一波！！", "这投票不科学啊", "我亚索还没来呢，就开始了？", "我是第一吧！！", "假的吧！", "put you hands up!!", "死亡如风，常伴吾身。", "提莫队长来报道啦！！", "奶你一口", "要么拥抱暗影，要么死于黑暗。", "嗨起来！！！！", "welcome to Summoner's rift", "只有蠢货才会犹豫不决，你们倒是快投票啊！", "这不是我想要的结果", "这个网页做的不错啊，赞一个", "让弹幕来的更猛烈一些吧", "这节奏不错", "签到：老人卡！滴！", "为什么我VN票数最低", "哈哈欢迎来到德莱联盟", "老哥稳！", "无话可说"];
var imgArry = ["img/dm/1.jpg", "img/dm/2.jpg", "img/dm/3.jpg", "img/dm/4.jpg", "img/dm/5.jpg", "img/6.jpg", "img/dm/7.jpg", "img/dm/8.jpg", "img/dm/9.jpg", "img/dm/10.jpg", "img/dm/11.jpg", "img/dm/12.jpg", "img/dm/13.jpg", "img/dm/14.jpg", "img/dm/15.jpg", "img/dm/16.jpg", "img/dm/17.jpg", "img/dm/18.jpg", "img/dm/19.jpg", "img/dm/20.jpg", "img/dm/21.jpg", "img/dm/22.jpg", "img/dm/23.jpg", "img/dm/24.jpg", "img/dm/25.jpg", "img/dm/26.jpg", "img/dm/27.jpg", "img/dm/28.jpg", "img/dm/29.jpg", "img/dm/30.jpg"];
$(document).ready(function() {
    //添加方法
    $("#sw2").click(function() {
        if (onOff) {
            $("#sw2").attr("src", 'img/弹幕.png');
            onOff = false;
            timedCount2();
        } else {
            $("#sw2").attr("src", 'img/弹幕关.png');

            //弹幕清空方法
            $(".dmBox").remove();
            onOff = true;
            clearTimeout(t);
        }
    });

})

function timedCount2() {
    idNum = Math.ceil(Math.random() * 29)
    var domName = 'DM' + A;
    var syrD = '<div class="dmBox" id="' + domName + '">' +
        '<div class="img1" style="background-size: 100% 100%; background-image:url(' + imgArry[idNum] + ')">' +
        '</div>' +
        '<div id="txt1" align="center">' + arryText[idNum] + '</div></div>';
    A++;
    $("body").append(syrD);
    $("#" + domName).show();
    RndNum2(domName);
    for (var i = 0; i < $(".dmBox").length; i++) {
        var rightNum = parseInt($(".dmBox").eq(0).css("right")) / $(window).width() * 100;
        if (rightNum == 30) {
            $(".dmBox").eq(i).remove();
        }
    }
    t = setTimeout("timedCount2()", 300)
}
//弹幕的出现与隐藏

//弹幕按钮的图片切换
window.onload = function() {
        var sw2 = document.getElementById('sw2')
        var onOff = true;
        sw2.onclick = function() {
            if (onOff) {
                sw2.src = 'img/弹幕.png';
                onOff = false;
            } else {
                sw2.src = 'img/弹幕关.png';
                onOff = true;
            }
        }
    }
    //产生高度随机数函数
function RndNum2(n) {
    var IdName = n;
    var W = $(window).width();
    var H = $(window).height();
    var rnd = "";
    rnd += Math.floor(Math.random() * H - 100);
    $("#" + IdName).css("top", rnd + "px");
    $("#" + IdName).css("right", "-100%");
    $("#" + IdName).animate({
        right: "30%"
    }, 10000);
}