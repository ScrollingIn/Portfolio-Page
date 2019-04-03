document.getElementById('about').addEventListener('click', function () {
    if (aboutdiv.style.display === "none") {
        //This is the display div codes
        document.getElementById('aboutdiv');
        homediv.style.display = "none";
        aboutdiv.style.display = "block";
        codesdiv.style.display = "none";
        workdiv.style.display = "none";
        resumediv.style.display = "none";
        homediv.innerHTML = "";
        codesdiv.innerHTML = "";
        workdiv.innerHTML = "";
        resumediv.innerHTML = "";
        nav1.style.backgroundColor = "transparent";
        nav2.style.backgroundColor = "#296330";
        nav3.style.backgroundColor = "transparent";
        nav4.style.backgroundColor = "transparent";
        nav5.style.backgroundColor = "transparent";

        //this is the header of the about section
        let abouthead = document.createElement('div');
        abouthead.innerHTML = "this is the about section";
        abouthead.style.textAlign = "center";
        abouthead.style.fontSize = "25px";
        aboutdiv.appendChild(abouthead);
    }
    //This clears the div when the button is pressed again so it won't duplicate
    else if (aboutdiv.style.display === "block") {
        homediv.style.display = "block";
        aboutdiv.style.display = "none";
        aboutdiv.innerHTML = "";
        nav2.style.backgroundColor = "transparent";
        nav1.style.backgroundColor = "#296330";
    }
})