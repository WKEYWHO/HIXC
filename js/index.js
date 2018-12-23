 //全局变量
 var typeNum = 0;
 
 
 //投票函数
 //产生随机数函数
 function RndNum(){
    var rnd="";
    rnd+=Math.floor(Math.random()*10);
    return rnd;
}
var f
var pNUM = 0;
var numsH = 0;
function countSecond() 
{　
    for(var i = 0;i<$(".pNUM").length;i++){
        var addNums = RndNum();
        pNUM = parseInt($(".pNUM").eq(i).html()) + parseInt(addNums);
        $(".pNUM").eq(i).html(pNUM);
        $(".z2").eq(i).css("width",parseFloat(pNUM/150)*100+"%")
    }
    if(parseInt($(".pNUM").eq(9).html()) >= 100){
        clearTimeout(f)
    }else{
        f=setTimeout("countSecond()",400)
    }
}


//投票方法

    //签到
    var t
    var A = 0;
    function changeState() {

        var txNum = Math.ceil(Math.random() * 21);
        var arry = ["img/1.gif", "img/2.jpg", "img/3.png", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.png", "img/8.png", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.gif", "img/16.jpg", "img/17.gif", "img/18.jpg", "img/19.jpg", "img/20.jpg", "img/21.jpg", "img/22.jpg"];
        var arry2 = ["****", "我慌了", "吃瓜吃瓜", "厉害姐", "lei了", "暴躁老哥", "长者", "正义的伙伴", "人生艰难", "？？？？", "你说这谁懂啊！", "尔康生气了！", "黄毛", "管理员", "？？！", "某远东魔术名门", "这戏真棒！", "安啦", "大侦探", "告辞", "把你喂饱的人", "看我脸色"];

        var txD = "<div class='box1'><div class='box2' style='background-image:url(" + arry[txNum] + "' id='a" + A + "'></div><h2 id='b" + A + "' align='center' style='margin:0px;'>" + arry2[txNum] + "</h2></div>";
        $("#Box").append(txD);
        $("#a" + A).animate({ "width": "180px", "height": "180px" }, 1500)
        $("#a" + A).animate({ "width": "130px", "height": "130px" }, 1500)
        $("#b" + A).animate({ "width": "180px" }, 1000)
        $("#b" + A).animate({ "width": "150px" }, 1000)
        /*txNum++*/
        A++

        t = setTimeout("changeState()", 2500);
    }  
//音乐控制
function bf(){
    var audio = document.getElementById('music1'); 
    if(audio!==null){             
       //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
        console.log(audio.paused);
     if(audio.paused){
        audio.currentTime = 0;                                      
         audio.play();//audio.play();// 这个就是播放  
     }else{
      audio.pause();// 这个就是暂停
     }
    } 
}
//全屏功能
document.getElementById("FullSurt").onclick = function() {
    var dateS = $("#FullSurt").attr("date");
   if(dateS == 0){
       requestFullScreen(document.documentElement); // 整个网页
       $("#FullSurt").attr("date",1);
   }else{
        exitFull();
        $("#FullSurt").attr("date",0);
   }
    
};

function requestFullScreen(element) {
        // 判断各种浏览器，找到正确的方法
        var requestMethod = element.requestFullScreen || //W3C
            element.webkitRequestFullScreen || //FireFox
            element.mozRequestFullScreen || //Chrome等
            element.msRequestFullScreen; //IE11
        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
    //退出全屏 判断浏览器种类

function exitFull() {
    // 判断各种浏览器，找到正确的方法
    var exitMethod = document.exitFullscreen || //W3C
        document.mozCancelFullScreen || //FireFox
        document.webkitExitFullscreen || //Chrome等
        document.webkitExitFullscreen; //IE11
    if (exitMethod) {
        exitMethod.call(document);
    } else if (typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }

}


//功能菜单控制

$("#buttom1").click(function () {
    if (typeNum == 0) {
        $("#bottom").animate({ bottom: "0px" }, 800)
        $("#buttom1").css("background-image", "url(img/消失.png)")
        typeNum = 1
    } else {
        $("#bottom").animate({ bottom: "-70px" }, 800)
        $("#buttom1").css("background-image", "url(img/弹出.png)")
        typeNum = 0;
    }
})

//声音控制
window.onload = function () {
    var music = document.getElementById('music')
    var onmusic = true;
    music.onclick = function () {
        if (onmusic) {
            music.src = 'img/声音关.png';
            onmusic = false;
        } else {
            music.src = 'img/声音.png';
            onmusic = true;
        }
    }
}

//功能控制
$("#qiandao").click(function () {
    $("#bigBox").show(3000);
    $("#toupiaoMain").hide(1000);
    $("#xxcontainer").hide(1000);
    changeState();
});
$("#toupiao").click(function () {
    $("#toupiaoMain").show(3000);
    $("#bigBox").hide(1000);
    $("#xxcontainer").hide(1000);
    countSecond();
});
$("#xiaoxi").click(function () {
    $("#xxcontainer").show(3000);
    $("#bigBox").hide(1000);
    $("#toupiaoMain").hide(1000);
});

