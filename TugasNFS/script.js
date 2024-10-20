const panels = document.querySelectorAll('.panel');
const soundBtn = document.querySelectorAll('.btn-sound');
let scrollButton = document.getElementById('scroll-button');
let targetSection = document.getElementById('target-section');
let scrollBtn = document.getElementById('scroll');
let targetSec = document.getElementById('target');
let currentAudio = null;

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    panels.forEach(panel => {
        const boxTop = panel.getBoundingClientRect().top;
        const boxBottom = panel.getBoundingClientRect().bottom;
        // Check if panel is in the viewport or almost in the viewport
        if (boxTop < triggerBottom && boxBottom > 0) {
            panel.classList.add('show');
        } else {
            panel.classList.remove('show');
        }
    });
}

soundBtn.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        const panel = button.closest('.panel');
        playSound(panel);
    })
})


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
            stopCurrentAudio();
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

scrollButton.addEventListener('click', function() {
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

scrollBtn.addEventListener('click', function() {
    targetSec.scrollIntoView({
        behavior: 'smooth'
    });
});
