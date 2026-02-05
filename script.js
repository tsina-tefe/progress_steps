let progress = 1;

renderProgress();

document.querySelector('#previous').addEventListener('click', () => {
    if(progress > 1) {
        progress--;
    }

    renderProgress('backward');
});

document.querySelector('#next').addEventListener('click', () => {
    if(progress < 4) {
        progress++;
    }

    renderProgress('forward');
});

function renderProgress(direction) {
    if(direction === 'backward') {
        document.querySelectorAll('.label').forEach((lab, index) => {
            if(index >= progress) {
                lab.classList.remove('progress');
            }
        });
        document.querySelectorAll('.connecter').forEach((con, index) => {
            if(index >= progress -1) {
                con.classList.remove('progress');
            }
        });
    } else {
        document.querySelectorAll('.label').forEach((lab, index) => {
            if(index < progress) {
                lab.classList.add('progress');
            }
        });
        document.querySelectorAll('.connecter').forEach((con, index) => {
            if(index < progress - 1) {
                con.classList.add('progress');
            }
        });
    }

    if(progress === 4) {
        document.querySelector('#next').classList.add('disabled');
    }else if(progress === 1) {
        document.querySelector('#previous').classList.add('disabled');
    } else {
        document.querySelector('#next').classList.remove('disabled');
        document.querySelector('#previous').classList.remove('disabled');
    }
}