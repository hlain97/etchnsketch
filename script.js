// const box = document.createElement('div');
const etch = document.querySelector('#mainContainer');
// box.classList.add("rgbBox");

// etch.appendChild(box);

const tester = function(){
    for (let i = 0; i <= 254; i++){
    let box = document.createElement('div');
    box.classList.add("rgbBox");
    box.addEventListener("click", (e) => {
        box.classList.toggle("tester");
    });
    etch.appendChild(box);
    };
}

tester();



