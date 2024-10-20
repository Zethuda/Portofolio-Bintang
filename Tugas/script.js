const panels = document.querySelectorAll('.panel')
let currentAudio = null;

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    panels.forEach(panel =>{
        const boxTop = panel.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            panel.classList.add('show')
        }else{
            panel.classList.remove('show')
        }
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        } else {
            removeActiveClasses(); 
            panel.classList.add('active'); 
        }
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function stopCurrentAudio() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
    }
}

function playSound(panel) {
    stopCurrentAudio(); 

    const audio = panel.querySelector('audio');
    if (audio) {
        currentAudio = audio;
        currentAudio.play();
    }
}