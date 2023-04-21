let abonament = 120;
document.getElementById("nr-cal").innerHTML = abonament;

function onClick() {
    abonament -= 1;
    document.getElementById("nr-cal").innerHTML = abonament;
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("abonamentul").style.visibility = "visible";
    document.getElementById("butonX").style.visibility = "visible";
    let thirty = 60 * 30,
        display = document.querySelector('#time');
    startTimer(thirty, display);
}

function closeMenu() {
    console.log('asdad')
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("abonamentul").style.visibility = "hidden";
    document.getElementById("butonX").style.visibility = "hidden";
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
