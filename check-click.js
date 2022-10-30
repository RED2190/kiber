var btn_l = document.getElementById('contrl-l');
var btn_r = document.getElementById('contrl-r');

var slide1 = document.getElementsByClassName('sl1');
var slide2 = document.getElementsByClassName('sl2');

slide1[0].style.position = "relative";
slide1[0].style.left = "0%";
slide1[0].style.transition = "1s";

slide2[0].style.position = "relative";
slide2[0].style.left = "0%";
slide2[0].style.transition = "1s";

btn_l.onclick = function(){
    slide1[0].style.position = "relative";
    slide1[0].style.left = "0%";
    slide1[0].style.transition = "1s";

    slide2[0].style.position = "relative";
    slide2[0].style.left = "0%";
    slide2[0].style.transition = "1s";
};
btn_r.onclick = function(){
    slide1[0].style.position = "relative";
    slide1[0].style.left = "-100%";
    slide1[0].style.transition = "1s";

    slide2[0].style.position = "relative";
    slide2[0].style.left = "-85%";
    slide2[0].style.transition = "1s";
}
