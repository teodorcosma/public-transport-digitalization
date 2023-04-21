let abonament = 120;
document.getElementById("nr-cal").innerHTML = abonament;

function onClick() {
    abonament -= 1;
    document.getElementById("nr-cal").innerHTML = abonament;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("abonamentul").style.display = "block";
    document.getElementById("butonX").style.display = "block";
}

function closeMenu() {
    console.log('asdad')
    document.getElementById("overlay").style.display = "none";
    document.getElementById("abonamentul").style.display = "none";
    document.getElementById("butonX").style.display = "none";
}