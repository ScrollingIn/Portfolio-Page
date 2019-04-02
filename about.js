
let aboutdiv = document.createElement('div');

// aboutdiv.style.backgroundColor = "green";
// aboutdiv.style.display = "block";
// aboutdiv.innerHTML = "this is the about section";
// document.body.appendChild(aboutdiv);

document.getElementById('about').addEventListener('click',function(){
    homediv.style.display = "none";
    aboutdiv.style.backgroundColor = "green";
    aboutdiv.style.height = "20px";
})