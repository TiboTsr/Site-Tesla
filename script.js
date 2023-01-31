function agrandir() {
    var teslamodels = document.getElementById("teslamodels");
    var width = teslamodels.clientWidth;
    if (width == 600) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        teslamodels.style.width = (width + 20) + "px";
    }
}

function diminuer() {
    var teslamodels = document.getElementById("teslamodels");
    var width = teslamodels.clientWidth;
    if (width == 40) {
        alert("Vous avez atteint le niveau de zoom minimal.");
    } else {
        teslamodels.style.width = (width - 20) + "px";
    }
}
