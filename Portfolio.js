document.getElementById("themeimg").src = "moon.png";
document.body.style.backgroundColor = "#202023";
document.body.style.color = "#FFFFFF"
function themeToggle() {
    ti = document.getElementById("themeimg").src;
    if (ti.includes("sun.png")) { //
        document.getElementById("themeimg").src = "moon.png";
        document.body.style.backgroundColor = "#202023";
        document.body.style.color = "#FFFFFF"
    }
    else { //
        document.getElementById("themeimg").src = "sun.png";
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#202023"
    }
}
