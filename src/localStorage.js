import storage from './storage/Storage';

export function local() {
    flakeCount=lotf("flakeCount",2000)
    mouseMoveR = storage.get("mouseMoveR") || 200;

    flsp=lotf("flsp",10)
    bg=lotf("bg",0)

    const winw = window.innerWidth,
          winh = window.innerHeight;
    const numPa = querySelAll(".menu .num"),
          colorPa = querySelAll(".menu .color");

    numPa[0].querySelectorAll("input").forEach(i => i.value = flakeCount);
    numPa[1].querySelectorAll("input").forEach(i => i.value = snowSpeed);
    numPa[2].querySelectorAll("input").forEach(i => i.value = mouseMoveR);
    colorPa[0].querySelectorAll("input").forEach(i => i.value = lotf("text-color","#ffffff"));
    colorPa[1].querySelectorAll("input").forEach(i => i.value = lotf("text-shadow","#77ffbb"));
    numPa[3].querySelectorAll("input").forEach(i => i.value = flsp);
    numPa[4].querySelectorAll("input").forEach(i => i.value = localStorage.getItem("circle-wh")==null?Math.floor((winw/100)*40):localStorage.getItem("circle-wh"));
    colorPa[2].querySelectorAll("input").forEach(i => i.value = lotf("circle-color","#ffffff"));
    colorPa[3].querySelectorAll("input").forEach(i => i.value = lotf("circle-shadow","#77ffbb"));
    numPa[5].querySelectorAll("input").forEach(i => i.value = localStorage.getItem("bg-blur")==null?5:localStorage.getItem("bg-blur"));
    colorPa[4].querySelectorAll("input").forEach(i => i.value = lotf("bg-color","#ffffff"));
    querySelAll(".time").forEach(i => i.style.color = idSel("text-color").value);
    querySelAll(".time").forEach(i => i.style.textShadow = `${idSel("text-shadow").value} 0 0 5px,${idSel("text-shadow").value} 0 0 5px,${idSel("text-shadow").value} 0 0 5px`);
    querySelAll(".c_line").forEach(i => {
        i.style.width = `${idSel("circle_wh").value}px`;
        i.style.height = `${idSel("circle_wh").value}px`;
    });
    querySelAll(".c_line").forEach(i => i.style.borderColor = idSel("circle-color").value);
    querySelAll(".c_line").forEach(i => i.style.boxShadow = `${idSel("circle-shadow").value} 0 0 20px 5px,${idSel("circle-shadow").value} 0 0 20px 5px inset`);
    querySelAll(".bg").forEach(i => i.style.filter = `blur(${idSel("bg_blur").value}px)`);
    querySel("body").style.background = idSel("bg-color").value
    querySelAll(".bg,.bg-image").forEach(i => i.style.backgroundImage = `url(./images/bg-${bg}.jpg)`);

    idSel("snow").style.display = lotrfa("flakeCount")
    querySelAll(".time").forEach(i => i.style.display = lotrfa("text-color"));
    querySelAll(".time").forEach(i => i.style.textShadow = lotrfa("text-shadow"));
    if(lotrfa("flsp")){
        querySelAll(".time").forEach(i => i.classList.add("nofl"));
    }
    querySelAll(".c_line").forEach(i => i.style.display = lotrfa("circle-color"));
    querySelAll(".c_line").forEach(i => i.style.boxShadow = lotrfa("circle-shadow"));
    if(lotrfa("flakeCount")=="none"){
        idSel("rain").style.display = lotrfa("flakeCount")
        querySelAll(".toggle").forEach(i => i.eq(0).classList.add("toggle_false"));
    }
    if(lotrfa("text-color")=="none"){
        querySelAll(".time").forEach(i => i.style.display = lotrfa("text-color"));
        querySelAll(".toggle").forEach(i => i.eq(1).classList.add("toggle_false"));
    }
    if(lotrfa("text-shadow")=="none"){
        querySelAll(".time").forEach(i => i.style.textShadow = lotrfa("text-shadow"));
        querySelAll(".toggle").forEach(i => i.eq(2).classList.add("toggle_false"));
    }
    if(lotrfa("flsp")=="none"){
        querySelAll(".time").forEach(i => i.classList.add("nofl"));
        querySelAll(".toggle").forEach(i => i.eq(3).classList.add("toggle_false"));
    }
    if(lotrfa("circle-color")=="none"){
        querySelAll(".c_line").forEach(i => i.style.display = lotrfa("circle-color"));
        querySelAll(".toggle").forEach(i => i.eq(4).classList.add("toggle_false"));
    }
    if(lotrfa("circle-shadow")=="none"){
        querySelAll(".c_line").forEach(i => i.style.boxShadow = lotrfa("circle-shadow"));
        querySelAll(".toggle").forEach(i => i.eq(5).classList.add("toggle_false"));
    }
    if(lotrfa("bg")=="none"){
        querySelAll(".bg").forEach(i => i.style.display = lotrfa("bg"));
        querySelAll(".toggle").forEach(i => i.eq(6).classList.add("toggle_false"));
    }
    querySelAll(".time").forEach(i => i.style.fontSize = `${Math.floor(winh/10)}px`);
    querySelAll(".time").forEach(i => i.style.width = `${winw}px`);
}

export function lotf(l,n){
    return localStorage.getItem(l)==null?n:localStorage.getItem(l).substr(-2,2)==",t"||",f"?localStorage.getItem(l).substr(0,localStorage.getItem(l).length-2):localStorage.getItem(l)
}
export function lotrfa(l){
    // console.log(localStorage.getItem(l)==null?"block":localStorage.getItem(l).substr(-2,2))
    return localStorage.getItem(l)==null?"block":localStorage.getItem(l).substr(-2,2)==",t"?"block":"none"
}
export function fn(s){
    let result
    result = s.replace(/[^0-9]/g,"")
    return result
}