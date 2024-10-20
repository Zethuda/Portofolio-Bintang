const panels = document.querySelectorAll('.panel');
const soundBtn = document.querySelectorAll('.btn-sound');

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
