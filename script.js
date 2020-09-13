


document.getElementById("opens").addEventListener("click", function() {
    const topbar = document.getElementById("topbar");
    
    if(topbar.style.display === "none"){
        topbar.style.display="block";
    }else{
        topbar.style.display="none";
    }
})