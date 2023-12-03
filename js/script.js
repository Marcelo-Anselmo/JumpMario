const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const restartBtn = document.querySelector(".restartBtn");

function jump() {
    mario.classList.add("jump");
    
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        restartBtn.style.display = "flex";

        clearInterval(loop);
    }
}, 10)

function Restart() {
    window.location.reload(true);
}

document.addEventListener('keydown', jump);