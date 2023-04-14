function prepa() {
    document.getElementById("CheckBox").onclick = function() {
        if (document.getElementById("CheckBox").checked) {
            document.getElementById("inscription").style.display = "block";
        }
        else {
            document.getElementById("inscription").style.display = "none";
        }
    };

    document.getElementById("inscription").style.display = "none";
}

window.onload = function() {
    prepa();
}