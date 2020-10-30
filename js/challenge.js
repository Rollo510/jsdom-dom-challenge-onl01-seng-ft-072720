

document.addEventListener("DOMContentLoaded", function() {


    let counter_img = document.getElementById("counter")
    let life = true;
    let timer = 0

    const interval = setInterval(function () {
        if (life) {
        counter_img.innerText = timer;
        timer += 1;
        }
    }, 1000);

    //pause function
    clearInterval(interval);





})

