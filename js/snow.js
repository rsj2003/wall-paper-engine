(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("snow"),
    ctx = canvas.getContext("2d"),
    flakeCount = 5000,
    mX = -10000,
    mY = -10000,
    snowSpeed = localStorage.getItem("snowSpeed") == null ? 1.5 : localStorage.getItem("snowSpeed"),
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
document.addEventListener("mousemove", e => {
    mX = e.clientX,
        mY = e.clientY
});

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

init();

function snow_js() {
    flakeCount = 2000
    idSel("snow").style.display = "block";
    idSel("snow_cnt").addEventListener("input", e => {
        if (e.target.value > 5000) {
            idSel("snow_cnt").value = 5000;
            idSel("snow_cnt_ran").value = 5000;
            flakeCount = 5000
            // localStorage.setItem("flakeCount",5000)
            localStorage.setItem("flakeCount", [5000, localStorage.getItem("flakeCount") == null ? "t" : localStorage.getItem("flakeCount").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("flakeCount").substr(-1, 1) : "t"])
        } else {
            idSel("snow_cnt_ran").value = e.target.value;
            flakeCount = e.target.value
            // localStorage.setItem("flakeCount",e.target.value)
            localStorage.setItem("flakeCount", [e.target.value, localStorage.getItem("flakeCount") == null ? "t" : localStorage.getItem("flakeCount").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("flakeCount").substr(-1, 1) : "t"])
        }
    })
    idSel("snow_cnt_ran").addEventListener("input", e => {
        idSel("snow_cnt").value = e.target.value;
        flakeCount = e.target.value
        // localStorage.setItem("flakeCount",e.target.value)
        localStorage.setItem("flakeCount", [e.target.value, localStorage.getItem("flakeCount") == null ? "t" : localStorage.getItem("flakeCount").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("flakeCount").substr(-1, 1) : "t"])
    })
    idSel("snow_speed").addEventListener("input", e => {
        if (e.target.value < 0.5) {
            idSel("snow_speed").value = 0.5;
            idSel("snow_speed_ran").value = 0.5;
            snowSpeed = 0.5
            snow_speed_reset()
            localStorage.setItem("snowSpeed", 0.5)
        } else {
            idSel("snow_speed_ran").value = e.target.value;
            snowSpeed = e.target.value
            snow_speed_reset()
            localStorage.setItem("snowSpeed", e.target.value)
        }
    })
    idSel("snow_speed_ran").addEventListener("input", e => {
        idSel("snow_speed").value = e.target.value;
        snowSpeed = e.target.value
        snow_speed_reset()
        localStorage.setItem("snowSpeed", e.target.value)
    })
    idSel("snow_mouse").addEventListener("input", e => {
        idSel("snow_mouse_ran").value = e.target.value;
        mouseMoveR = e.target.value
        localStorage.setItem("mouseMoveR", e.target.value)
    })
    idSel("snow_mouse_ran").addEventListener("input", e => {
        idSel("snow_mouse").value = e.target.value;
        mouseMoveR = e.target.value
        localStorage.setItem("mouseMoveR", e.target.value)
    })
}

function snow_speed_reset() {
    flakes.forEach(f => {
        f.speed = (Math.random() * snowSpeed) + (snowSpeed / 2);
    })
}