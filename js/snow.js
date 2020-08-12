(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("rain"),
    ctx = canvas.getContext("2d"),
    flakeCount = 5000,
    mX = -10000,
    mY = -10000,
    snowSpeed=localStorage.getItem("snowSpeed")==null?1.5:localStorage.getItem("snowSpeed"),
    mouseMoveR

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],  //flake 를 flakes에 i번째로 지정
            x = mX,  //x를 마우스 위치로 지정
            y = mY,  //y를 마우스 위치로 지정
            minDist = mouseMoveR,  //minDist를 마우스 범위로 지정
            x2 = flake.x,  //x2를 flake의 x로 지정
            y2 = flake.y;  //y2를 flake의 y로 지정

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),  //sqrt == root dist를 √((flakeX - mouseX)^2 + (flakeY - mouseY)^2) 로 지정
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {  //마우스 범위보다 dist가 적을경우 실행
            var force = minDist / (dist * dist),  //force를 마우스 범위/(dist^2)로 설정
                xcomp = (x - x2) / dist,  //xcomp를 (mouseX - flakeX)/dist로 설정
                ycomp = (y - y2) / dist,  //ycomp를 (mouseY - flakeY)/dist로 설정
                deltaV = force / 2;  //deltaV를 force/2로 설정

            flake.velX -= deltaV * xcomp;  //flake의 x속도를 -=deltaV*xcomp로 변경
            flake.velY -= deltaV * ycomp;  //flake의 y속도를 -=deltaV*xcomp로 변경

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * snowSpeed) + (snowSpeed / 2);
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * snowSpeed) + (snowSpeed / 2),
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            opacity: opacity
        });
    }

    snow();
};

// canvas.addEventListener("mousemove", function(e) {
//     mX = e.clientX,
//     mY = e.clientY
// });
$(document).on("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();

$(document).ready(function(){
    flakeCount=2000
    $("#rain").css({display:"block"})
    $("#snow_cnt").on("change keyup paste mouseup",function(){
        if($(this).val()>5000){
            $("#snow_cnt").val(5000)
            $("#snow_cnt_ran").val(5000)
            flakeCount=5000
            // localStorage.setItem("flakeCount",5000)
            localStorage.setItem("flakeCount",[5000,localStorage.getItem("flakeCount")==null?"t":localStorage.getItem("flakeCount").substr(-2,2)==",t"||",f"?localStorage.getItem("flakeCount").substr(-1,1):"t"])
        }else{
            $("#snow_cnt_ran").val($(this).val())
            flakeCount=$(this).val()
            // localStorage.setItem("flakeCount",$(this).val())
            localStorage.setItem("flakeCount",[$(this).val(),localStorage.getItem("flakeCount")==null?"t":localStorage.getItem("flakeCount").substr(-2,2)==",t"||",f"?localStorage.getItem("flakeCount").substr(-1,1):"t"])
        }
    })
    $("#snow_cnt_ran").on("change keyup mouseup",function(){
        $("#snow_cnt").val($(this).val())
        flakeCount=$(this).val()
        // localStorage.setItem("flakeCount",$(this).val())
        localStorage.setItem("flakeCount",[$(this).val(),localStorage.getItem("flakeCount")==null?"t":localStorage.getItem("flakeCount").substr(-2,2)==",t"||",f"?localStorage.getItem("flakeCount").substr(-1,1):"t"])
    })
    $("#snow_speed").on("change keyup paste mouseup",function(){
        if($(this).val()<0.5){
            $("#snow_speed").val(0.5)
            $("#snow_speed_ran").val(0.5)
            snowSpeed=0.5
            localStorage.setItem("snowSpeed",0.5)
        }else{
            $("#snow_speed_ran").val($(this).val())
            snowSpeed=$(this).val()
            localStorage.setItem("snowSpeed",$(this).val())
        }
    })
    $("#snow_speed_ran").on("change keyup paste mouseup",function(){
        $("#snow_speed").val($(this).val())
        snowSpeed=$(this).val()
        localStorage.setItem("snowSpeed",$(this).val())
    })
    $("#snow_mouse").on("change keyup paste mouseup",function(){
        $("#snow_mouse_ran").val($(this).val())
        mouseMoveR=$(this).val()
        localStorage.setItem("mouseMoveR",$(this).val())
    })
    $("#snow_mouse_ran").on("change keyup paste mouseup",function(){
        $("#snow_mouse").val($(this).val())
        mouseMoveR=$(this).val()
        localStorage.setItem("mouseMoveR",$(this).val())
    })
})