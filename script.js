document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#f4f4f4", "#ff33a8"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
