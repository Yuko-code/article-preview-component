const shareBtn=document.querySelector("#shareBtn");
const shareBrnDark=document.querySelector("#shareBtnDark")

shareBtn.addEventListener('click', (e)=>{
    const author=document.querySelector("#author");
    const share=document.querySelector("#share");
    const footer=document.querySelector(".card-footer");
    author.style.display="none";
    share.style.display="flex";
    footer.style.backgroundColor="hsl(217, 19%, 35%)";
});

shareBtnDark.addEventListener('click', (e)=>{
    const author=document.querySelector("#author");
    const share=document.querySelector("#share");
    const footer=document.querySelector(".card-footer");
    share.style.display="none";
    author.style.display="flex";
    footer.style.backgroundColor="#fff";
})
