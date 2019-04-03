document.getElementById('home').addEventListener('click', function(){
    if (homediv.style.display === "none"){
        //This is the display div codes
        document.getElementById('homediv');
        homediv.style.display = "block";
        aboutdiv.style.display = "none";
        codesdiv.style.display = "none";
        workdiv.style.display = "none";
        resumediv.style.display = "none";
        aboutdiv.innerHTML = "";
        codesdiv.innerHTML = "";
        workdiv.innerHTML = "";
        resumediv.innerHTML = "";
        nav1.style.backgroundColor = "#296330";
        nav2.style.backgroundColor = "transparent";
        nav3.style.backgroundColor = "transparent";
        nav4.style.backgroundColor = "transparent";
        nav5.style.backgroundColor = "transparent";

        let pic1 = document.createElement('img');
        pic1.src = "stick figure.png";
        homediv.appendChild(pic1);

        //This is the inside element of the div
    }
})