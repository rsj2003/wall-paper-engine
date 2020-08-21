import localStorage from './localStorage';
import storage from './storage';
import { querySel, querySelAll } from "./utils";
import { ColorService } from "./services";

let time = new Date(), flsp, bltf, bg, x, dop = true;
const winw = window.innerWidth, winh = window.innerHeight;
window.onload = e => {
    snow_js();
    local();
    window.scrollTo(0, 1);
    const
        clock_sp = querySelAll(".clock>span"),
        date_sp = querySelAll(".date>span"),
        time_sp = querySelAll(".time span");
    setInterval(e => {
        time = new Date();
        clock_sp[0].innerHTML = num(time.getHours(), 2);
        clock_sp[2].innerHTML = num(time.getMinutes(), 2);
        clock_sp[4].innerHTML = num(time.getSeconds(), 2);
        date_sp[0].innerHTML = time.getFullYear();
        date_sp[2].innerHTML = num(time.getMonth() + 1, 2);
        date_sp[4].innerHTML = num(time.getDate(), 2);
    })
    setTimeout(e => {
        document.getElementsByClassName("alert")[0].style.transition = "0.5s";
        document.getElementsByClassName("alert")[0].style.opacity = "0";
        setTimeout(e => {
            document.getElementsByClassName("alert")[0].style.display = "none";
        }, 500);
    }, 2000);

    function setime() {
        var tms = Math.floor(Math.random() * 10)
        if (time_sp[tms].classList === ".cl_sp") {
            setime()
            return
        }
        if (hasClass(document.getElementsByClassName("time")[0], "nofl")) return
        setTimeout(e => {
            time_sp[tms].style.opacity = "0.5";
            setTimeout(e => {
                if (hasClass(time_sp[tms], "cl_sp")) {
                    setime()
                    return
                }
                time_sp[tms].style.opacity = "";
                setime()
            }, (Math.floor(Math.random() * 7) + 3) * 10)
        }, (Math.floor(Math.random() * (flsp - (flsp / 10))) + (flsp / 10)) * 100)
    }

    setime()
    setime()
    setime()
    time_sp.forEach(i => i.addEventListener("mousedown", e => {
        i.classList.add("cl_sp");
        i.style.opacity = "0.5";
    }))
    document.addEventListener("mouseup", e => {
        time_sp.forEach(i => {
            if (hasClass(i, "cl_sp")) {
                i.classList.remove("cl_sp");
                i.style.opacity = "";
            }
        })
    })
    // menu
    querySel("#text-color").addEventListener("input", e => {
        querySel("#text-color-text").value = e.target.value;
        querySelAll(".time").forEach(i => i.style.color = e.target.value);
        localStorage.setItem("text-color", [e.target.value, localStorage.getItem("text-color") == null ? "t" : localStorage.getItem("text-color").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("text-color").substr(-1, 1) : "t"]);
    })
    querySel("#text-color-text").addEventListener("input", e => {
        ColorService.setHexColor(e.target.value, querySel("#text-color"), "text-color");
        querySelAll(".time").forEach(i => i.style.color = ColorService.getColor());
    })
    querySel("#text-color-text").addEventListener("blur", e => {
        querySel("#text-color-text").value = querySel("#text-color").value;
    })
    querySel("#text-shadow").addEventListener("input", e => {
        querySel("#text-shadow-text").value = e.target.value;
        querySelAll(".time").forEach(i => i.style.textShadow = `${e.target.value} 0 0 5px,${e.target.value} 0 0 5px,${e.target.value} 0 0 5px`);
        localStorage.setItem("text-shadow", [e.target.value, localStorage.getItem("text-shadow") == null ? "t" : localStorage.getItem("text-shadow").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("text-shadow").substr(-1, 1) : "t"])
    })
    querySel("#text-shadow-text").addEventListener("input", e => {
        ColorService.setHexColor(e.target.value, querySel("#text-shadow"), "text-shadow")
        querySelAll(".time").forEach(i => i.style.textShadow = `${ColorService.getColor()} 0 0 5px,${ColorService.getColor()} 0 0 5px,${ColorService.getColor()} 0 0 5px`);
    })
    querySel("#text-shadow-text").addEventListener("blur", e => {
        querySel("#text-shadow-text").value = querySel("#text-shadow").value;
    })
    querySel("#circle-color").addEventListener("input", e => {
        querySel("#circle-color-text").value = e.target.value;
        querySelAll(".c_line").forEach(i => i.style.borderColor = e.target.value);
        localStorage.setItem("circle-color", [e.target.value, localStorage.getItem("circle-color") == null ? "t" : localStorage.getItem("circle-color").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("circle-color").substr(-1, 1) : "t"])
    })
    querySel("#circle-color-text").addEventListener("input", e => {
        ColorService.setHexColor(e.target.value, querySel("#circle-color"), "circle-color")
        querySelAll(".c_line").forEach(i => i.style.borderColor = ColorService.getColor());
    })
    querySel("#circle-color-text").addEventListener("blur", e => {
        querySel("#circle-color-text").value = querySel("#circle-color").value;
    })
    querySel("#circle-shadow").addEventListener("input", e => {
        querySel("#circle-shadow-text").value = e.target.value;
        querySelAll(".c_line").forEach(i => i.style.boxShadow = `${e.target.value} 0 0 20px 5px,${e.target.value} 0 0 20px 5px inset`);
        localStorage.setItem("circle-shadow", [e.target.value, localStorage.getItem("circle-shadow") == null ? "t" : localStorage.getItem("circle-shadow").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("circle-shadow").substr(-1, 1) : "t"])
    })
    querySel("#circle-shadow-text").addEventListener("input", e => {
        ColorService.setHexColor(e.target.value, querySel("#circle-shadow"), "circle-shadow")
        querySelAll(".c_line").forEach(i => i.style.boxShadow = `${ColorService.getColor()} 0 0 20px 5px,${ColorService.getColor()} 0 0 20px 5px inset`);
    })
    querySel("#circle-shadow-text").addEventListener("blur", e => {
        querySel("#circle-shadow-text").value = querySel("#circle-shadow").value
    })

    querySel("#flickers_speed").addEventListener("input", e => {
        querySel("#flickers_speed_ran").value = e.target.value;
        flsp = e.target.value;
        localStorage.setItem("flsp", [flsp, localStorage.getItem("flsp") == null ? "t" : localStorage.getItem("flsp").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("flsp").substr(-1, 1) : "t"])
    })
    querySel("#flickers_speed_ran").addEventListener("input", e => {
        querySel("#flickers_speed").value = e.target.value;
        flsp = e.target.value;
        localStorage.setItem("flsp", [flsp, localStorage.getItem("flsp") == null ? "t" : localStorage.getItem("flsp").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("flsp").substr(-1, 1) : "t"])
    })
    querySel("#circle_wh").addEventListener("input", e => {
        if (e.target.value < 0) {
            querySel("#circle_wh").value = 0;
            querySel("#circle_wh_ran").value = 0;
            querySelAll(".c_line").forEach(i => {
                i.style.width = `0px`;
                i.style.height = `0px`;
            });
            localStorage.setItem("circle-wh", 0);
        } else {
            querySel("#circle_wh_ran").value = e.target.value;
            querySelAll(".c_line").forEach(i => {
                i.style.width = `${e.target.value}px`;
                i.style.height = `${e.target.value}px`;
            });
            localStorage.setItem("circle-wh", e.target.value);
        }
    })
    querySel("#circle_wh_ran").addEventListener("input", e => {
        querySel("#circle_wh").value = e.target.value;
        querySelAll(".c_line").forEach(i => {
            i.style.width = `${e.target.value}px`;
            i.style.height = `${e.target.value}px`;
        });
        localStorage.setItem("circle-wh", e.target.value);
    })
    querySel("#bg_blur").addEventListener("input", e => {
        if (e.target.value < 0) {
            querySel("#bg_blur").value = 0;
            querySel("#bg_blur_ran").value = 0;
            querySelAll(".c_line").forEach(i => {
                i.style.width = `0px`;
                i.style.height = `0px`;
            });
            localStorage.setItem("bg-blur", 0);
        } else {
            querySel("#bg_blur_ran").value = e.target.value;
            querySelAll(".bg").forEach(i => i.style.filter = `blur(${e.target.value}px)`);
            localStorage.setItem("bg-blur", e.target.value)
        }
    })
    querySel("#bg_blur_ran").addEventListener("input", e => {
        querySel("#bg_blur").value = e.target.value;
        querySelAll(".bg").forEach(i => i.style.filter = `blur(${e.target.value}px)`);
        localStorage.setItem("bg-blur", e.target.value)
    })
    querySel("#bg-color").addEventListener("input", e => {
        querySel("#bg-color-text").value = e.target.value;
        querySel("body").style.backgroundColor = e.target.value;
        localStorage.setItem("bg-color", [e.target.value, localStorage.getItem("bg-color") == null ? "t" : localStorage.getItem("bg-color").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("bg-color").substr(-1, 1) : "t"])
    })
    querySel("#bg-color-text").addEventListener("input", e => {
        ColorService.setHexColor(e.target.value, querySel("#bg-color"), "bg-color")
        querySel("body").style.backgroundColor = ColorService.getColor();
    })
    querySelAll(".bg-img").forEach(i => i.addEventListener("click", e => {
        bg = idx(e.target);
        querySelAll(".bg,.bg-image").forEach(i => i.style.backgroundImage = `url(./images/bg-${bg}.jpg)`);
        localStorage.setItem("bg", [idx(e.target), localStorage.getItem("bg") == null ? "t" : localStorage.getItem("bg").substr(-2, 2) == ",t" || ",f" ? localStorage.getItem("bg").substr(-1, 1) : "t"])
    }))
    // toggle
    querySelAll(".toggle").forEach(i => i.addEventListener("click", e => {
        if (hasClass(e.target, "toggle_false")) {
            e.target.classList.remove("toggle_false");
            switch (idx(e.target)) {
                case 0:
                    querySel("#snow").style.display = "block";
                    storage.toggle("flakeCount", 2000, "t")
                    break
                case 7:
                    querySelAll(".time").forEach(i => i.style.display = "");
                    storage.toggle("text-color", "#ffffff", "t")
                    break
                case 10:
                    ColorService.setColor(querySel("#text-shadow").value);
                    querySelAll(".time").forEach(i => i.style.textShadow = `${ColorService.getColor()} 0 0 5px,${ColorService.getColor()} 0 0 5px,${ColorService.getColor()} 0 0 5px`);
                    storage.toggle("text-shadow", "#77ffbb", "t")
                    break
                case 12:
                    querySelAll(".time").forEach(i => i.classList.remove("nofl"));
                    setime()
                    setime()
                    setime()
                    storage.toggle("flsp", 10, "t")
                    break
                case 14:
                    querySelAll(".c_line").forEach(i => i.style.display = "");
                    storage.toggle("circle-color", "#ffffff", "t")
                    break
                case 19:
                    ColorService.setColor(querySel("#circle-shadow").value);
                    querySelAll(".c_line").forEach(i => i.style.boxShadow = `${ColorService.getColor()} 0 0 20px 5px,${ColorService.getColor()} 0 0 20px 5px inset`);
                    storage.toggle("circle-shadow", "#77ffbb", "t")
                    break
                case 21:
                    querySelAll(".bg").forEach(i => i.style.display = `block`);
                    storage.toggle("bg", "0", "t")
                    break
            }
        } else {
            e.target.classList.add("toggle_false");
            switch (idx(e.target)) {
                case 0:
                    querySel("#snow").style.display = "none";
                    storage.toggle("flakeCount", 2000, "f")
                    break
                case 7:
                    querySelAll(".time").forEach(i => i.style.display = "none");
                    storage.toggle("text-color", "#ffffff", "f")
                    break
                case 10:
                    querySelAll(".time").forEach(i => i.style.textShadow = "none");
                    storage.toggle("text-shadow", "#77ffbb", "f")
                    break
                case 12:
                    querySelAll(".time").forEach(i => i.classList.add("nofl"));
                    storage.toggle("flsp", 10, "f")
                    break
                case 14:
                    querySelAll(".c_line").forEach(i => i.style.display = "none");
                    storage.toggle("circle-color", "#ffffff", "f")
                    break
                case 19:
                    querySelAll(".c_line").forEach(i => i.style.boxShadow = "none");
                    storage.toggle("circle-shadow", "#77ffbb", "f")
                    break
                case 21:
                    querySelAll(".bg").forEach(i => i.style.display = "none");
                    storage.toggle("bg", "0", "f")
                    break
            }
        }
    }))
    querySelAll(".reset").forEach(i => i.addEventListener("click", e => {
        if (confirm("설정한 값을 초기화 하시겠습니까?")) {
            let
                num_p = querySelAll(".menu .num"),
                color_p = querySelAll(".menu .color");
            num_p[0].querySelectorAll("input").forEach(i => i.value = 2000);
            num_p[1].querySelectorAll("input").forEach(i => i.value = 1.5);
            num_p[2].querySelectorAll("input").forEach(i => i.value = 200);
            color_p[0].querySelectorAll("input").forEach(i => i.value = "#ffffff");
            color_p[1].querySelectorAll("input").forEach(i => i.value = "#77ffbb");
            num_p[3].querySelectorAll("input").forEach(i => i.value = 10);
            num_p[4].querySelectorAll("input").forEach(i => i.value = Math.floor((winw / 100) * 40));
            color_p[2].querySelectorAll("input").forEach(i => i.value = "#ffffff");
            color_p[3].querySelectorAll("input").forEach(i => i.value = "#77ffbb");
            color_p[4].querySelectorAll("input").forEach(i => i.value = "#ffffff");
            num_p[5].querySelectorAll("input").forEach(i => i.value = 5);
            flakeCount = 2000
            snowSpeed = 1.5
            mouseMoveR = 200
            flsp = 10
            localStorage.clear()
            snow_speed_reset()
            querySelAll(".time").forEach(i => i.style.color = "#ffffff");
            querySelAll(".time").forEach(i => i.style.textShadow = `#77ffbb 0 0 5px,#77ffbb 0 0 5px,#77ffbb 0 0 5px`);
            querySelAll(".c_line").forEach(i => {
                i.style.width = `${Math.floor((winw / 100) * 40)}px`;
                i.style.height = `${Math.floor((winw / 100) * 40)}px`;
            });
            querySelAll(".c_line").forEach(i => i.style.borderColor = "#ffffff");
            querySelAll(".c_line").forEach(i => i.style.boxShadow = `#77ffbb 0 0 20px 5px,#77ffbb 0 0 20px 5px inset`);
            querySel("body").style.background = "#ffffff";
            querySelAll(".bg").forEach(i => i.style.filter = `blur(5px)`);
            querySelAll(".toggle").forEach(i => i.classList.remove("toggle_false"));
            querySelAll(".flickers_t").forEach(i => i.classList.add("toggle_false"));
            querySel("#snow").style.display = `block`;
            querySelAll(".time").forEach(i => i.style.display = `block`);
            querySelAll(".time").forEach(i => i.classList.add("nofl"));
            querySelAll(".c_line").forEach(i => i.style.display = `block`);
            querySelAll(".bg").forEach(i => i.style.display = `block`);
            querySelAll(".bg,.bg-image").forEach(i => i.style.backgroundImage = `url(./images/bg-0.jpg)`);
        }
    }))
    querySelAll(".bg-image").forEach(i => i.addEventListener("click", e => {
        querySelAll(".sub_menu").forEach(i => i.classList.toggle("tab"));
    }))
}

function num(n, w) {
    n = n + ""
    return n.length >= w ? n : new Array(w - n.length + 1).join("0") + n
}

document.addEventListener("keydown", function (key) {
    if (key.keyCode == 9) {
        key.preventDefault();
        querySelAll(".menu").forEach(i => i.classList.toggle("tab"));
        querySel("#sub_menu").classList.toggle("toggletab");
        querySelAll(".sub_menu").forEach(i => i.classList.remove("tab"));
    }
})
document.addEventListener("mousedown", function (e) {
    if (e.target.localName == "input" || hasClass(e.target, "toggle") || hasClass(e.target, "bg-image")) {
        dop = false
    } else {
        x = e.pageX
    }
})
document.addEventListener("mouseup", function (e) {
    if (dop == true) {
        if (e.pageX - x > 0) {
            if (hasClass(querySelAll(".menu")[0], "tab")) {
                querySelAll(".sub_menu").forEach(i => i.classList.add("tab"));
            } else {
                querySelAll(".menu").forEach(i => i.classList.add("tab"));
                querySel("#sub_menu").classList.add("toggletab");
            }
        } else if (x - e.pageX > 0) {
            if (hasClass(querySelAll(".sub_menu")[0], "tab")) {
                querySelAll(".sub_menu").forEach(i => i.classList.remove("tab"));
            } else {
                querySelAll(".menu").forEach(i => i.classList.remove("tab"));
                querySel("#sub_menu").classList.remove("toggletab");
            }
        }
    } else {
        dop = true
    }
})
