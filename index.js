let home = document.getElementById('div1');
let about = document.getElementById('div2');
let codes = document.getElementById('div3');
let work = document.getElementById('div4');
let github = document.getElementById('div5');
let resume = document.getElementById('div6');

home.style.display = "block"

function showHome(){
    home.style.display = "block";
    about.style.display = "none";
    codes.style.display = "none";
    work.style.display = "none";
    github.style.display = "none";
    resume.style.display= "none";
}

function showAbout(){
    home.style.display = "none";
    about.style.display = "block";
    codes.style.display = "none";
    work.style.display = "none";
    github.style.display = "none";
    resume.style.display= "none";
}

function showCodes(){
    home.style.display = "none";
    about.style.display = "none";
    codes.style.display = "block";
    work.style.display = "none";
    github.style.display = "none";
    resume.style.display= "none";
}

function showWork(){
    home.style.display = "none";
    about.style.display = "none";
    codes.style.display = "none";
    work.style.display = "block";
    github.style.display = "none";
    resume.style.display= "none";
}

function showGit(){
    home.style.display = "none";
    about.style.display = "none";
    codes.style.display = "none";
    work.style.display = "none";
    github.style.display = "block";
    resume.style.display= "none";
}

function showRes(){
    home.style.display = "none";
    about.style.display = "none";
    codes.style.display = "none";
    work.style.display = "none";
    github.style.display = "none"
    resume.style.display= "block";
}