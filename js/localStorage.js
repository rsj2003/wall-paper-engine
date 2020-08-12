$(document).ready(function(){
    flakeCount=lotf("flakeCount",2000)
    mouseMoveR=localStorage.getItem("mouseMoveR")==null?200:localStorage.getItem("mouseMoveR")
    blsp=lotf("blsp",10)
    bg=lotf("bg",0)
    let winw=window.innerWidth,winh=window.innerHeight
    var num_pa=$(".menu .num"),color_pa=$(".menu .color")
    $(num_pa[0]).children("input").val(flakeCount)
    $(num_pa[1]).children("input").val(snowSpeed)
    $(num_pa[2]).children("input").val(mouseMoveR)
    $(color_pa[0]).children("input").val(lotf("text-color","#ffffff"))
    $(color_pa[1]).children("input").val(lotf("text-shadow","#77ffbb"))
    $(num_pa[3]).children("input").val(blsp)
    $(num_pa[4]).children("input").val(localStorage.getItem("circle-wh")==null?Math.floor((winw/100)*40):localStorage.getItem("circle-wh"))
    $(color_pa[2]).children("input").val(lotf("circle-color","#ffffff"))
    $(color_pa[3]).children("input").val(lotf("circle-shadow","#77ffbb"))
    $(num_pa[5]).children("input").val(localStorage.getItem("bg-blur")==null?5:localStorage.getItem("bg-blur"))
    $(color_pa[4]).children("input").val(lotf("bg-color","#ffffff"))
    $(".time").css({"color":$("#text-color").val()})
    $(".time").css({"text-shadow":`${$("#text-shadow").val()} 0 0 5px,${$("#text-shadow").val()} 0 0 5px,${$("#text-shadow").val()} 0 0 5px`})
    $(".c_line").css({"width":`${$("#circle_wh").val()}px`,"height":`${$("#circle_wh").val()}px`})
    $(".c_line").css({"border-color":$("#circle-color").val()})
    $(".c_line").css({"box-shadow":`${$("#circle-shadow").val()} 0 0 20px 5px,${$("#circle-shadow").val()} 0 0 20px 5px inset`})
    $(".bg").css({"filter":`blur(${$("#bg_blur").val()}px)`})
    $("body").css({"background":$("#bg-color").val()})
    $(".bg,.bg-image").css({"background-image":`url(./images/bg-${bg}.jpg)`})

    $("#rain").css({"display":lotrfa("flakeCount")})
    $(".time").css({"display":lotrfa("text-color")})
    $(".time").css({"text-shadow":lotrfa("text-shadow")})
    if(lotrfa("blsp")){
        $(".time").addClass("nobl")
    }
    $(".c_line").css({"display":lotrfa("circle-color")})
    $(".c_line").css({"box-shadow":lotrfa("circle-shadow")})
    if(lotrfa("flakeCount")=="none"){
        console.log($(".toggle").eq(0))
        $("#rain").css({"display":lotrfa("flakeCount")})
        $(".toggle").eq(0).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    if(lotrfa("text-color")=="none"){
        console.log($(".toggle").eq(7))
        $(".time").css({"display":lotrfa("text-color")})
        $(".toggle").eq(1).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    if(lotrfa("text-shadow")=="none"){
        console.log($(".toggle").eq(10))
        $(".time").css({"text-shadow":lotrfa("text-shadow")})
        $(".toggle").eq(2).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    if(lotrfa("blsp")=="none"){
        $(".time").addClass("nobl")
        console.log($(".toggle").eq(12))
        $(".toggle").eq(3).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    if(lotrfa("circle-color")=="none"){
        console.log($(".toggle").eq(14))
        $(".c_line").css({"display":lotrfa("circle-color")})
        $(".toggle").eq(4).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    if(lotrfa("circle-shadow")=="none"){
        console.log($(".toggle").eq(19))
        $(".c_line").css({"box-shadow":lotrfa("circle-shadow")})
        $(".toggle").eq(5).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    if(lotrfa("bg")=="none"){
        console.log($(".toggle").eq(19))
        $(".bg").css({"display":lotrfa("bg")})
        $(".toggle").eq(6).css({"background":"#aaaa","border-color":"#aaaa"}).addClass("toggle_false")
    }
    $(".time").css({"font-size":`${Math.floor(winh/10)}px`,"width":`${winw}px`})
})

function lotf(l,n){
    return localStorage.getItem(l)==null?n:localStorage.getItem(l).substr(-2,2)==",t"||",f"?localStorage.getItem(l).substr(0,localStorage.getItem(l).length-2):localStorage.getItem(l)
}
function lotrfa(l){
    // console.log(localStorage.getItem(l)==null?"block":localStorage.getItem(l).substr(-2,2))
    return localStorage.getItem(l)==null?"block":localStorage.getItem(l).substr(-2,2)==",t"?"block":"none"
}
function fn(s){
    let result
    result = s.replace(/[^0-9]/g,"")
    return result
}