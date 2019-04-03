document.getElementById('resume').addEventListener('click', function(){
    if(resumediv.style.display === "none"){
        //This is the display div codes
        document.getElementById('resumediv');
        homediv.style.display = "none";
        aboutdiv.style.display = "none";
        codesdiv.style.display = "none";
        workdiv.style.display = "none";
        resumediv.style.display = "block";
        homediv.innerHTML = "";
        aboutdiv.innerHTML = "";
        codesdiv.innerHTML = "";
        workdiv.innerHTML = "";
        nav1.style.backgroundColor = "transparent";
        nav2.style.backgroundColor = "transparent"
        nav3.style.backgroundColor = "transparent"
        nav4.style.backgroundColor = "transparent";
        nav5.style.backgroundColor = "#296330";
    }
    //This clears the div when the button is pressed again so it won't duplicate
    else if (resumediv.style.display === "block") {
        homediv.style.display = "block";
        workdiv.style.display = "none";
        workdiv.innerHTML = "";
        nav5.style.backgroundColor = "transparent";
        nav1.style.backgroundColor = "#296330";
    }
})