import {DisplayService, StyleService} from "./services";
import { color } from './domain';
import {querySel, querySelAll} from "./utils";

const styleBy = (key, value = null) => {
    const style = value === null ? 'block' : StyleService.get(key);
    return DisplayService.get(key) ? style : 'none';
}
const styleByBlock = (key, value = null) => {
    return styleBy(key, 'block');
}

export function init() {
    const flakeCount = StyleService.get("flakeCount") || 2000;
    const mouseMoveR = StyleService.get("mouseMoveR") || 200;
    const flsp = StyleService.get("flsp") || 10;
    const bg = StyleService.get("bg") || 0;

    const windowWidth = window.innerWidth,
          windowHeight = window.innerHeight;
    const numPa = querySelAll(".menu .num"),
          colorPa = querySelAll(".menu .color"),
          timeElements = querySelAll(".time"),
          cLine = querySelAll(".c_line"),
          bgs = querySelAll(".bg"),
          toggles = querySelAll(".toggle");

    numPa[0].querySelectorAll("input").forEach(i => i.value = flakeCount);
    numPa[1].querySelectorAll("input").forEach(i => i.value = snowSpeed);
    numPa[2].querySelectorAll("input").forEach(i => i.value = mouseMoveR);
    colorPa[0].querySelectorAll("input").forEach(i => i.value = StyleService.get("text-color") || color.WHITE);
    colorPa[1].querySelectorAll("input").forEach(i => i.value = StyleService.get("text-shadow") || color.LIME);
    numPa[3].querySelectorAll("input").forEach(i => i.value = flsp);
    numPa[4].querySelectorAll("input").forEach(i => i.value = StyleService.get("circle-wh") || Math.floor((windowWidth / 100 ) * 40 ));
    colorPa[2].querySelectorAll("input").forEach(i => i.value = StyleService.get("circle-color")  || color.WHITE );
    colorPa[3].querySelectorAll("input").forEach(i => i.value = StyleService.get("circle-shadow")  || color.LIME );
    numPa[5].querySelectorAll("input").forEach(i => i.value = StyleService.get("bg-blur") || 5);
    colorPa[4].querySelectorAll("input").forEach(i => i.value = StyleService.get("bg-color") || color.WHITE);

    timeElements.forEach(i => i.style.color = querySel("#text-color").value);
    timeElements.forEach(i => {
        const val = querySel("#text-shadow").value;
        const iterable = `${val} 0 0 5px`;
        i.style.textShadow = `${iterable},${iterable},${iterable}`;
    });

    cLine.forEach(i => {
        i.style.width = `${querySel("#circle_wh").value}px`;
        i.style.height = `${querySel("#circle_wh").value}px`;
    });
    cLine.forEach(i => i.style.borderColor = querySel("#circle-color").value);
    cLine.forEach(i => {
        const val = querySel("#circle-shadow").value;
        const iterable = `${val} 0 0 20px 5px`;
        i.style.boxShadow = `${iterable},${iterable} inset`;
    });
    bgs.forEach(i => i.style.filter = `blur(${querySel("#bg_blur").value}px)`);
    querySel("body").style.background = querySel("#bg-color").value
    querySelAll(".bg, .bg-image").forEach(i => i.style.backgroundImage = `url(./images/bg-${bg}.jpg)`);

    querySel("#snow").style.display = DisplayService.get("flakeCount") ? 'block' : 'none';
    timeElements.forEach(i => i.style.display = DisplayService.get("text-color") ? 'block' : 'none');
    timeElements.forEach(i => i.style.textShadow = DisplayService.get("text-shadow") ? StyleService.get("text-shadow") : 'none');

    if(DisplayService.get("flsp")){
        timeElements.forEach(i => i.classList.add("nofl"));
    }

    cLine.forEach(i => i.style.display = styleByBlock("circle-color"));
    cLine.forEach(i => i.style.boxShadow = styleBy("circle-shadow"));
    if(!DisplayService.get("flakeCount")){
        querySel("#rain").style.display = styleBy("flakeCount")
        toggles.forEach(i => i[0].classList.add("toggle_false"));
    }
    if(!DisplayService.get("text-c")){
        timeElements.forEach(i => i.style.display = styleByBlock("text-color"));
        toggles.forEach(i => i[1].classList.add("toggle_false"));
    }
    if(!DisplayService.get("text-s")){
        timeElements.forEach(i => i.style.textShadow = styleBy("text-shadow"));
        toggles.forEach(i => i[2].classList.add("toggle_false"));
    }
    if(!DisplayService.get("flsp")){
        timeElements.forEach(i => i.classList.add("nofl"));
        toggles.forEach(i => i[3].classList.add("toggle_false"));
    }
    if(!DisplayService.get("circle-c")){
        cLine.forEach(i => i.style.display = styleByBlock("circle-color"));
        toggles.forEach(i => i[4].classList.add("toggle_false"));
    }
    if(!DisplayService.get("circle-s")){
        cLine.forEach(i => i.style.boxShadow = styleBy("circle-shadow"));
        toggles.forEach(i => i[5].classList.add("toggle_false"));
    }
    if(!DisplayService.get("bg")){
        bgs.forEach(i => i.style.display = styleByBlock("bg"));
        toggles.forEach(i => i[6].classList.add("toggle_false"));
    }

    timeElements.forEach(i => i.style.fontSize = `${Math.floor(windowHeight/10)}px`);
    timeElements.forEach(i => i.style.width = `${windowWidth}px`);
}