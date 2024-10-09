
document.getElementById("nameButton").addEventListener("click", function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("nameDisplay").innerText = `Hello, ${userName} Check Out My Portfolio`;
    } else {
        document.getElementById("nameDisplay").innerText = "Check Out My Portfolio!";
    }
});




document.getElementById("profileImage").addEventListener("click", function() {
    this.classList.toggle("enlarged");
});


function menuHover(element) {
    element.style.backgroundColor = "#f0f0f0";
}

function menuOut(element) {
    element.style.backgroundColor = "";
}