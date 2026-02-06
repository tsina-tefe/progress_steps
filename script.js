const labels = document.querySelectorAll('.label');
const connectors = document.querySelectorAll('.connecter-bar');
const prev = document.querySelector('#previous');
const next = document.querySelector('#next');
let progress = 1;

renderProgress();

prev.addEventListener('click', () => {
    if(progress > 1) {
        progress--;
    }

    renderProgress('backward');
});

next.addEventListener('click', () => {
    if(progress < labels.length) {
        progress++;
    }

    renderProgress('forward');
});

function renderProgress(direction) {
    if(direction === 'backward') {
        labels.forEach((label, index) => {
            if(index >= progress) {
                label.classList.remove('progress');
            }
        });
        connectors.forEach((connecter, index) => {
            if(index >= progress -1) {
                connecter.classList.remove('progress-bar');
            }
        });
    } else {
        labels.forEach((label, index) => {
            if(index < progress) {
                label.classList.add('progress');
            }
        });
        connectors.forEach((connecter, index) => {
            if(index < progress - 1) {
                connecter.classList.add('progress-bar');
            }
        });
    }

    if(progress === 4) {
        next.classList.add('disabled');
    }else if(progress === 1) {
        prev.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
        prev.classList.remove('disabled');
    }
}