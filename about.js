document.getElementById('about').addEventListener('click', function () {
    if (aboutdiv.style.display === "none") {
        //This is the display div codes
        document.getElementById('aboutdiv');
        homediv.style.display = "none";
        aboutdiv.style.display = "block";

        //this is the header of the about section
        let abouthead = document.createElement('div');
        abouthead.innerHTML = "this is the about section";
        abouthead.style.textAlign = "center";
        abouthead.style.fontSize = "25px";
        aboutdiv.appendChild(abouthead);
    }
    //This clears the div when the button is pressed again so it won't duplicate
    else if (aboutdiv.style.display === "block") {
        aboutdiv.style.display = "none";
        aboutdiv.innerHTML = "";
    }
})