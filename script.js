"use strict"

// ＝＝＝＝＝スライドショー

const images = ["image/slide1.jpg","image/slide3.jpg","image/slide4.jpg","image/slide5.jpg","image/slide6.jpg","image/slide7.jpg","image/slide8.jpg","image/slide9.jpg"];
let current = 0;
const targetImg = document.getElementById("slide_image");
/* console.log(targetImg.src);
const orgWidth = targetImg.width;
const orgHeight = targetImg.height;
targetImg.height = orgHeight * (targetImg.width/orgWidth); */
function changImage(num){
    if(current + num >= 0 && current + num <images.length){
        current += num;
        targetImg.src = images[current];
    }else if(current + num >= images.length){
        current = 0;
        targetImg.src = images[0];
    }else{
        current = images.length - 1;
        targetImg.src = images[images.length - 1];
    }
};
const $prev = document.getElementById("prev");
const $next = document.getElementById("next");

$prev.addEventListener("click",() => {
    changImage(-1)
});
$next.addEventListener("click",() => {
    changImage(1)
});
  

// ==========ログイン＝＝＝＝＝
const button = document.querySelector(".login");
button.addEventListener("click",onclickButton);

function onclickButton(){
const pasword = window.prompt("パスワード");
if(pasword === "1112"){
    window.location.href = "https://fasap.web.fc2.com/login_ttpk.html";
}
else{
    window.alert("パスワードが違います。");
}    
};

// ＝＝＝＝今月の予定＝＝＝＝
// console.log("こんにちは");

/* const element = document.querySelector("#monthSchedule");
const value = element.value;
console.log("value");
 */
/* const element = document.getElementById("#monthSchedule");
element.addEventListener("input",handleChange);

function handleChange(event){
    const value = event.target.value;
    document.getElementById("#sample").innerHTML = value;
}
 */