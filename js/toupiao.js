//投票
$("#z2").animate({width:"49.7px"},9000)
$("#z4").animate({width:"53.3px"},9000)
$("#z6").animate({width:"43.94px"},9000)
$("#z8").animate({width:"37.82px"},9000)
$("#z10").animate({width:"22.88px"},7000)
$("#z12").animate({width:"27.92px"},9000)
$("#x2").animate({width:"31.88px"},9000)
$("#x4").animate({width:"22.52px"},9000)
$("#x6").animate({width:"41.96px"},9500)
$("#x8").animate({width:"37.64px"},9000)
$("#x10").animate({width:"25.94px"},9000)
$("#x12").animate({width:"24.5px"},9000)
    x = 0
    z = 0
    z1 = 0
    z2 = 0
    z3 = 0
    z4 = 0
    z5 = 0
    z6 = 0
    z7 = 0
    z8 = 0
    z9 = 0
    z10 = 0
    z11 =0
function countSecond() 
{　
    if(x<999) {
        x = x+66
        document.getElementById("displayBox").value=x 
        setTimeout("countSecond()", 1000)}
    if(z<157) {
        z = z+9
        document.getElementById("displayBox1").value=z 
        setTimeout("countSecond()", 8000)
    }
    if(z1<175) {
        z1 = z1+13
        document.getElementById("displayBox2").value=z1 
        setTimeout("countSecond()", 8000)
    }
    if(z2<133) {
        z2 = z2+9
        document.getElementById("displayBox3").value=z2 
        setTimeout("countSecond()", 8000)
    }
    if(z3<60) {
        z3 = z3+8
        document.getElementById("displayBox4").value=z3 
        setTimeout("countSecond()", 8000)
    }
    if(z4<40) {
        z4 = z4+7
        document.getElementById("displayBox5").value=z4 
        setTimeout("countSecond()", 8000)
    }
    if(z5<40) {
        z5 = z5+6
        document.getElementById("displayBox6").value=z5 
        setTimeout("countSecond()", 8000)
    }
    if(z6<56) {
        z6 = z6+7
        document.getElementById("displayBox7").value=z6 
        setTimeout("countSecond()", 8000)
    }
    if(z7<20) {
        z7 = z7+3
        document.getElementById("displayBox8").value=z7
        setTimeout("countSecond()", 8000)
    }
    if(z8<120) {
        z8 = z8+3
        document.getElementById("displayBox9").value=z8
        setTimeout("countSecond()", 8000)
    }
    if(z9<90) {
        z9 = z9+6
        document.getElementById("displayBox10").value=z9
        setTimeout("countSecond()", 8000)
    }
    if(z10<50) {
        z10 = z10+7
        document.getElementById("displayBox11").value=z10
        setTimeout("countSecond()", 8000)
    }

    if(z11<60) {
        z11 = z11+8
        document.getElementById("displayBox12").value=z11
        setTimeout("countSecond()", 8000)
    }
}

countSecond()