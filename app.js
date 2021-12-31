const shareBtn=document.querySelector("#shareBtn");
const shareBrnDark=document.querySelector("#shareBtnDark")
const shareBtnLg=document.querySelector("#shareBtn-lg");
const shareBrnDarkLg=document.querySelector("#shareBtnDark-lg")

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

shareBtnLg.addEventListener('click', (e)=>{
    const share=document.querySelector("#share");
    const newSquare=document.createElement('div');
    const shareBtnLgOff=document.createElement('a');
    const author=document.querySelector("#author");
    share.appendChild(newSquare);
    newSquare.classList.add('square');
    share.classList.add('bubble');
    shareBtnLg.remove();
    author.appendChild(shareBtnLgOff);
    shareBtnLgOff.classList.add("fa");
    shareBtnLgOff.classList.add("fa-share");

        shareBtnLgOff.addEventListener('click',(e)=>{
            newSquare.remove();
            newSquare.classList.remove('square');
            share.classList.remove('bubble');
            shareBtnLgOff.remove();
            author.appendChild(shareBtnLg);
})

});




