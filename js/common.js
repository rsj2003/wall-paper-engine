var hexcl,time=new Date(),blsp,bltf,bg
$(document).ready(function(){
    // console.log(time)
    setInterval(function(){
        time=new Date()
        $(".clock>span").eq(0).html(num(time.getHours(),2))
        $(".clock>span").eq(2).html(num(time.getMinutes(),2))
        $(".clock>span").eq(4).html(num(time.getSeconds(),2))
        $(".date>span").eq(0).html(time.getFullYear())
        $(".date>span").eq(2).html(num(time.getMonth()+1,2))
        $(".date>span").eq(4).html(num(time.getDate(),2))
    })
    setTimeout(function(){
        $(".alert").animate({"opacity":0},500,function(){
            $(".alert").css({"display":"none"})
        })
    },2000)
    function setime(){
        var tms=Math.floor(Math.random()*10)
        if($(".time span").eq(tms).is(".cl_sp")){
            setime()
            return
        }
        if($(".time").is(".nobl"))return
        setTimeout(function(){
            $(".time span").eq(tms).css({"opacity":"0.5"})
            console.log("sdfsdf")
            setTimeout(function(){
                if($(".time span").eq(tms).is(".cl_sp")){
                    setime()
                    return
                }
                $(".time span").eq(tms).css({"opacity":""})
                setime()
            },(Math.floor(Math.random()*7)+3)*10)
        },(Math.floor(Math.random()*(blsp-(blsp/10)))+(blsp/10))*100)
    }
    setime()
    setime()
    setime()
    $(document).on("mousedown",".time span",function(){
        var tms_cl=$(this)
        $(tms_cl).css({"opacity":"0.5"}).addClass("cl_sp")
    })
    $(document).on("mouseup",function(){
        $(".cl_sp").css({"opacity":""}).removeClass("cl_sp")
    })
    // menu
    $("#text-color").on("change keyup paste mouseup",function(){
        $("#text-color-text").val($(this).val())
        $(".time").css({"color":$(this).val()})
        localStorage.setItem("text-color",[$(this).val(),localStorage.getItem("text-color")==null?"t":localStorage.getItem("text-color").substr(-2,2)==",t"||",f"?localStorage.getItem("text-color").substr(-1,1):"t"])
    })
    $("#text-color-text").on("change keyup paste mouseup",function(){
        hexcor($(this).val(),$("#text-color"),"text-color")
        $(".time").css({"color":hexcl})
    })
    $("#text-color-text").on("blur",function(){
        $("#text-color-text").val($("#text-color").val())
    })
    $("#text-shadow").on("change keyup paste mouseup",function(){
        $("#text-shadow-text").val($(this).val())
        $(".time").css({"text-shadow":`${$(this).val()} 0 0 5px,${$(this).val()} 0 0 5px,${$(this).val()} 0 0 5px`})
        localStorage.setItem("text-shadow",[$(this).val(),localStorage.getItem("text-shadow")==null?"t":localStorage.getItem("text-shadow").substr(-2,2)==",t"||",f"?localStorage.getItem("text-shadow").substr(-1,1):"t"])
    })
    $("#text-shadow-text").on("change keyup paste mouseup",function(){
        hexcor($(this).val(),$("#text-shadow"),"text-shadow")
        $(".time").css({"text-shadow":`${hexcl} 0 0 5px,${hexcl} 0 0 5px,${hexcl} 0 0 5px`})
    })
    $("#text-shadow-text").on("blur",function(){
        $("#text-shadow-text").val($("#text-shadow").val())
    })
    $("#circle-color").on("change keyup paste mouseup",function(){
        $("#circle-color-text").val($(this).val())
        $(".c_line").css({"border-color":$(this).val()})
        localStorage.setItem("circle-color",[$(this).val(),localStorage.getItem("circle-color")==null?"t":localStorage.getItem("circle-color").substr(-2,2)==",t"||",f"?localStorage.getItem("circle-color").substr(-1,1):"t"])
    })
    $("#circle-color-text").on("change keyup paste mouseup",function(){
        hexcor($(this).val(),$("#circle-color"),"circle-color")
        $(".c_line").css({"border-color":hexcl})
    })
    $("#circle-color-text").on("blur",function(){
        $("#circle-color-text").val($("#circle-color").val())
    })
    $("#circle-shadow").on("change keyup paste mouseup",function(){
        $("#circle-shadow-text").val($(this).val())
        $(".c_line").css({"box-shadow":`${$(this).val()} 0 0 20px 5px,${$(this).val()} 0 0 20px 5px inset`})
        localStorage.setItem("circle-shadow",[$(this).val(),localStorage.getItem("circle-shadow")==null?"t":localStorage.getItem("circle-shadow").substr(-2,2)==",t"||",f"?localStorage.getItem("circle-shadow").substr(-1,1):"t"])
    })
    $("#circle-shadow-text").on("change keyup paste mouseup",function(){
        hexcor($(this).val(),$("#circle-shadow"),"circle-shadow")
        $(".c_line").css({"box-shadow":`${hexcl} 0 0 20px 5px,${hexcl} 0 0 20px 5px inset`})
    })
    $("#circle-shadow-text").on("blur",function(){
        $("#circle-shadow-text").val($("#circle-shadow").val())
    })
    
    $("#blink_speed").on("change keyup paste mouseup",function(){
        $("#blink_speed_ran").val($(this).val())
        blsp=$(this).val()
        localStorage.setItem("blsp",[blsp,localStorage.getItem("blsp")==null?"t":localStorage.getItem("blsp").substr(-2,2)==",t"||",f"?localStorage.getItem("blsp").substr(-1,1):"t"])
    })
    $("#blink_speed_ran").on("change keyup paste mouseup",function(){
        $("#blink_speed").val($(this).val())
        blsp=$(this).val()
        localStorage.setItem("blsp",[blsp,localStorage.getItem("blsp")==null?"t":localStorage.getItem("blsp").substr(-2,2)==",t"||",f"?localStorage.getItem("blsp").substr(-1,1):"t"])
    })
    $("#circle_wh").on("change keyup paste mouseup",function(){
        if($(this).val()<0){
            $("#circle_wh").val(0)
            $("#circle_wh_ran").val(0)
            $(".c_line").css({"width":`0px`,"height":`0px`})
            localStorage.setItem("circle-wh",0)
        }else{
            $("#circle_wh_ran").val($(this).val())
            $(".c_line").css({"width":`${$(this).val()}px`,"height":`${$(this).val()}px`})
            localStorage.setItem("circle-wh",$(this).val())
        }
    })
    $("#circle_wh_ran").on("change keyup paste mouseup",function(){
        $("#circle_wh").val($(this).val())
        $(".c_line").css({"width":`${$(this).val()}px`,"height":`${$(this).val()}px`})
        localStorage.setItem("circle-wh",$(this).val())
    })
    $("#bg_blur").on("change keyup paste mouseup",function(){
        if($(this).val()<0){
            $("#bg_blur").val(0)
            $("#bg_blur_ran").val(0)
            $(".c_line").css({"width":`0px`,"height":`0px`})
            localStorage.setItem("bg-blur",0)
        }else{
            $("#bg_blur_ran").val($(this).val())
            $(".bg").css({"filter":`blur(${$(this).val()}px)`})
            localStorage.setItem("bg-blur",$(this).val())
        }
    })
    $("#bg_blur_ran").on("change keyup paste mouseup",function(){
        $("#bg_blur").val($(this).val())
        $(".bg").css({"filter":`blur(${$(this).val()}px)`})
        localStorage.setItem("bg-blur",$(this).val())
    })
    $("#bg-color").on("change keyup paste mouseup",function(){
        $("#bg-color-text").val($(this).val())
        $("body").css({"background-color":$(this).val()})
        localStorage.setItem("bg-color",[$(this).val(),localStorage.getItem("bg-color")==null?"t":localStorage.getItem("bg-color").substr(-2,2)==",t"||",f"?localStorage.getItem("bg-color").substr(-1,1):"t"])
    })
    $("#bg-color-text").on("change keyup paste mouseup",function(){
        hexcor($(this).val(),$("#bg-color"),"bg-color")
        $("body").css({"background-color":`${hexcl}`})
    })
    $(".bg-img").on("click",function(){
        bg=$(this).index()
        $(".bg,.bg-image").css({"background-image":`url(./images/bg-${bg}.jpg)`})
        localStorage.setItem("bg",[$(this).index(),localStorage.getItem("bg")==null?"t":localStorage.getItem("bg").substr(-2,2)==",t"||",f"?localStorage.getItem("bg").substr(-1,1):"t"])
    })
    // toggle
    $(document).on("click",".toggle",function(){
        if($(this).is(".toggle_false")){
            $(this).removeClass("toggle_false")
            switch($(this).index()){
                case 0:
                    $("#rain").css({"display":"block"})
                    settf("flakeCount",2000,"t")
                    break
                case 7:
                    $(".time").css({"display":""})
                    settf("text-color","#ffffff","t")
                    break
                case 10:
                    hexcl=$("#text-shadow").val()
                    $(".time").css({"text-shadow":`${hexcl} 0 0 5px,${hexcl} 0 0 5px,${hexcl} 0 0 5px`})
                    settf("text-shadow","#77ffbb","t")
                    break
                case 12:
                    $(".time").removeClass("nobl")
                    setime()
                    setime()
                    setime()
                    settf("blsp",10,"t")
                    break
                case 14:
                    $(".c_line").css({"display":""})
                    settf("circle-color","#ffffff","t")
                    break
                case 19:
                    hexcl=$("#circle-shadow").val()
                    $(".c_line").css({"box-shadow":`${hexcl} 0 0 20px 5px,${hexcl} 0 0 20px 5px inset`})
                    settf("circle-shadow","#77ffbb","t")
                    break
                case 21:
                    $(".bg").css({"display":`block`})
                    settf("bg","0","t")
                    break
            }
        }else{
            $(this).addClass("toggle_false")
            switch($(this).index()){
                case 0:
                    $("#rain").css({"display":"none"})
                    settf("flakeCount",2000,"f")
                    break
                case 7:
                    $(".time").css({"display":"none"})
                    settf("text-color","#ffffff","f")
                    break
                case 10:
                    $(".time").css({"text-shadow":"none"})
                    settf("text-shadow","#77ffbb","f")
                    break
                case 12:
                    $(".time").addClass("nobl")
                    settf("blsp",10,"f")
                    break
                case 14:
                    $(".c_line").css({"display":"none"})
                    settf("circle-color","#ffffff","f")
                    break
                case 19:
                    $(".c_line").css({"box-shadow":"none"})
                    settf("circle-shadow","#77ffbb","f")
                    break
                case 21:
                    $(".bg").css({"display":"none"})
                    settf("bg","0","f")
                    break
            }
        }
    })
    .on("click",".reset",function(){
        if(confirm("설정한 값을 초기화 하시겠습니까?")){
            var num_p=$(".menu .num"),color_p=$(".menu .color")
            $(num_p[0]).children("input").val(2000)
            $(num_p[1]).children("input").val(1.5)
            $(num_p[2]).children("input").val(200)
            $(color_p[0]).children("input").val("#ffffff")
            $(color_p[1]).children("input").val("#77ffbb")
            $(num_p[3]).children("input").val(10)
            $(num_p[4]).children("input").val(700)
            $(color_p[2]).children("input").val("#ffffff")
            $(color_p[3]).children("input").val("#77ffbb")
            $(color_p[4]).children("input").val("#ffffff")
            $(num_p[5]).children("input").val(5)
            flakeCount=2000
            snowSpeed=1.5
            mouseMoveR=200
            $(".time").css({"color":"#ffffff"})
            $(".time").css({"text-shadow":`#77ffbb 0 0 5px,#77ffbb 0 0 5px,#77ffbb 0 0 5px`})
            blsp=10
            $(".c_line").css({"width":`700px`,"height":`700px`})
            $(".c_line").css({"border-color":"#ffffff"})
            $(".c_line").css({"box-shadow":`#77ffbb 0 0 20px 5px,#77ffbb 0 0 20px 5px inset`})
            $("body").css({"background":"#ffffff"})
            $(".bg").css({"filter":`blur(5px)`})
            localStorage.clear()
            $(".toggle").removeClass("toggle_false")
            $(".blink_t").addClass("toggle_false")
            $("#rain").css({"display":`block`})
            $(".time").css({"display":`block`})
            $(".c_line").css({"display":`block`})
            $(".bg").css({"display":`block`})
            $(".bg,.bg-image").css({"background-image":`url(./images/bg-0.jpg)`})
        }
    })
})
function num(n,w){
    n=n+""
    return n.length>=w?n:new Array(w-n.length+1).join("0")+n
}
$(document).keydown(function(key){
    if(key.keyCode==9){
        key.preventDefault();
        $(".menu").toggleClass("tab")
        $("#sub_menu").toggleClass("toggletab")
        $(".sub_menu").removeClass("tab")
    }
})
.on("click",".bg-image",function(){
    $(".sub_menu").toggleClass("tab")
})
function hexcor(c,r,l){
    if(c.length==7&&c[0]=="#"){
        sethexcor(c,r,l)
    }else if(c.length==6&&c[0]!="#"){
        c="#"+c
        sethexcor(c,r,l)
    }else if(c.length==4&&c[0]=="#"){
        var hex=["#",c[1],c[1],c[2],c[2],c[3],c[3]]
        c=hex.join("")
        sethexcor(c,r,l)
    }else if(c.length==3&&c[0]!="#"){
        var hex=["#",c[0],c[0],c[1],c[1],c[2],c[2]]
        c=hex.join("")
        sethexcor(c,r,l)
    }
}
function sethexcor(c,r,l){
    r.val(c)
    hexcl=c
    localStorage.setItem(l,[c,localStorage.getItem(l)==null?"t":localStorage.getItem(l).substr(-2,2)==",t"||",f"?localStorage.getItem(l).substr(-1,1):"t"])
}
function settf(l,c,t){
    localStorage.setItem(l,[localStorage.getItem(l)==null?c:localStorage.getItem(l).substr(-2,2)==",t"||",f"?localStorage.getItem(l).substr(0,localStorage.getItem(l).length-2):localStorage.getItem(l),t])
}