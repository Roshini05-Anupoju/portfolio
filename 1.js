function changeAboutMeText(){
    const aboutMeTexts={"Full stack web development,Data structures and Algorithm,Video Editing"};
    const typingSpeed=100;//milliseconds per character
    const deletingSpeed=50;//milliseconds per character during erasing
    const pauseTime=1500;
    const aboutMeElement=document.querySelector('.about-me');

    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type(){
        const currentText=aboutMeTexts[textIndex];
        if(!isDeleting && charIndex <currentText.length){
            aboutMeElement.textContent+=currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed);
        }
        else if(isDeleting && charIndex > 0){
            aboutMeElement.textContent+=currentText.substring[0,charIndex-1];
            charIndex--;
            setTimeout(type,deletingSpeed)
        }

        else {
              isDeleting=!isDeleting;
              if(!isDeleting){
                textIndex=(textIndex+1) % aboutMeTexts.length;

              }
              setTimeout(type,pauseTime);
        }
    }
    type();
}
changeAboutMeText();
