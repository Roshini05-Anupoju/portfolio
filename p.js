function changeAboutMeText() {
    const aboutMeTexts = ["Full stack web development", "Data structures and Algorithm", "Video Editing"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 2000;
    const aboutMeElement = document.querySelector('.about-me');

    if (!aboutMeElement) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];

        if (isDeleting) {
            charIndex--;
            aboutMeElement.textContent = currentText.substring(0, charIndex);
        } else {
            charIndex++;
            aboutMeElement.textContent = currentText.substring(0, charIndex);
        }

        let delay = isDeleting ? eraseSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            delay = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % aboutMeTexts.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    type();
}

document.addEventListener("DOMContentLoaded", changeAboutMeText);
