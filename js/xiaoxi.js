
 //计时器
 var t1
 var time1 = 1;
 var i = ["img/xx/1.jpg", "img/xx/2.jpg", "img/xx/3.jpg", "img/xx/4.jpg",
     "img/xx/5.jpg", "img/xx/6.jpg", "img/xx/7.jpg", "imgxx//8.jpg", "img/xx/9.jpg",
     "img/xx/10.jpg", "img/xx/11.jpg", "img/xx/12.jpg", "img/xx/13.jpg",
     "img/xx/14.jpg", "img/xx/15.jpg", "img/xx/16.jpg", "img/xx/17.jpg", "img/xx/18.jpg", "img/xx/19.jpg",
     "img/xx/20.jpg", "img/xx/21.jpg", "img/xx/22.jpg"];
 var arry = [ "6666666", "ig牛逼,法老复活", 
      "9999999", "好hi呦",  "感觉人生到达了巅峰",
      "真香警告", "火钳刘明", "是兄弟就来砍我", "嘤嘤嘤",
     "这就是弟弟行为", "绝地科学家八倍不平息", "上香", "王者上号", "我就是个弟中弟中弟中弟",
     "这种感觉跟吃了屎一样难受", "我好像在哪里见过你",
     "请把你嘴巴里的屎咽下去再说话",  "我猴子无敌", "我cf贼6",
     "高价回收暖宝宝", "舔狗舔到最后一无所有", 
     "锤爆嘤嘤怪",  "蛇皮东西", "向我开炮"];
 function timedCount1() {
    
     if (time1 == 1) {
         var moveBoxNum = $(".dmbox");
         var hz = $(".right").children();
         for (var j = 0; j < 3; j++) {
             var indexs = RndNum1();
             $(".circle").eq(j).css("background","url(" + i[indexs] + ")")
         }
         for (var q = 0; q < 3; q++) {
             
             var s = RndNum1();
             $(".text").eq(q).html("<h2>"+ arry[s] +"</h2>");
          
         }
         $(".listbox").delay(500).animate({ "height": "170px", "opacity": "1" }, 1000);
         $(".circle").delay(500).animate({ "height": "130px", "opacity": "1" }, 1000);
         $(".text").delay(500).animate({ "height": "100px", "opacity": "1" }, 1000);
         $(".listbox").delay(500).animate({ "height": "0px", "opacity": "0" }, 1000);
         $(".circle").delay(500).animate({ "height": "0px", "opacity": "0" }, 1000);
         $(".text").delay(500).animate({ "height": "0px", "opacity": "0" }, 1000);
         $(".listbox").animate({ "height": "170px", "opacity": "0" }, 300);
         $(".circle").animate({ "height": "130px", "opacity": "0" }, 300);
         $(".text").animate({ "height": "100px", "opacity": "0" }, 300);
         
     } else {
         var moveBoxNum = $(".dmbox");
         var hz = $(".right").children();
         
         time1 = 1;
         $(".listbox").animate({ "height": "170px", "opacity": "1" }, 1000);
         $(".circle").animate({ "height": "130px", "opacity": "1" }, 1000);
         $(".text").animate({ "height": "100px", "opacity": "1" }, 1000);
     }

     t1 = setTimeout("timedCount1()", 4300)
 }
 timedCount1();
 //产生随机数
 function RndNum1() {
     var rnd = "";
     rnd += Math.floor(Math.random() * i.length);
     return rnd;
 }