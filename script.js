let pos = document.getElementById("pos_btn");
let neg = document.getElementById("neg_btn");
let reset = document.getElementById("reset_btn");
let count = document.getElementById("counter");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
   
let counter = 0;
function increaseCount(){
    audio.play();
    counter++;
    count.classList.add('h2');
     count.innerText = counter;
      
}
function reduceCount(){
    audio.play();
        --counter;
         count.classList.add('h2');
         console.log(count);
        count.innerText = counter;
}
function resetCount(){
    audio.play();
    counter = 0;
    count.innerText = counter;
}

pos.addEventListener("click" , increaseCount);
neg.addEventListener("click",   reduceCount);
reset.addEventListener("click", resetCount);