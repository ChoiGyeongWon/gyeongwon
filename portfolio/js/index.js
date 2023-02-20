let menu_toggle = document.querySelector(".menu");
let menu_box = document.querySelector(".responsive_nav");
menu_toggle.addEventListener("click",function(e){
    e.preventDefault();
    menu_box.classList.toggle("show");
});
let typed = "방문해 주셔서 감사합니다. \n 웹 퍼블리셔 최경원입니다.";
let text = document.querySelector(".intro");
let i = 0;
function typing(){
    // if(i < typed.length){
    //     let txt = typed.charAt(i);
    //     text.innerHTML += txt;
    //     i++;
    // }

    // let txt = typed[i++];
    // text.innerHTML += txt === "\n" ? "<br/>" : txt;
    // if(i > typed.length){
    //     text.textContent = "";
    //     i = 0;
    // }

    if(i<typed.length){
        let txt = typed.charAt(i);
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        i++;
    }
}
setInterval(typing, 150);