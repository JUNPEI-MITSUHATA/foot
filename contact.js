// 体験＆試合コンタクトフォームの表示

const taikenButton = document.getElementById("taikenButton");
const   siaiButton = document.getElementById("siaiButton");
const taikenForm = document.getElementById("contact_form_taiken");
const   siaiForm = document.getElementById("contact_form_siai");

taikenButton.addEventListener("click",() => {
    if(taikenForm.style.display === ""){
    taikenForm.style.display = "block";
      siaiForm.style.display = ""
    }else{
        taikenForm.style.display = ""
    }
});

siaiButton.addEventListener("click",() => {
    if(siaiForm.style.display === ""){
    taikenForm.style.display = ""
      siaiForm.style.display = "block";

    }else{
        siaiForm.style.display = ""
    }
});