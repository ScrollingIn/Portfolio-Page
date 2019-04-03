//Created by Malina de Jonge

//The entire head
let head = document.createElement('div');
head.style.display = "flex";
head.style.flexDirection = "row";
head.style.width = "100%";
head.style.backgroundColor = "black";
head.style.color = "white";
document.body.appendChild(head);

//The div for the pic
let div1 = document.createElement('div');
div1.style.height = "100px";
div1.style.width = "100px";
div1.style.display = "flex";
div1.style.flexWrap = "nowrap";
div1.style.justifyContent = "center";
head.appendChild(div1);

let pic = document.createElement('img');
pic.src = "favicon.png";
pic.style.width = "100px";
div1.appendChild(pic);

//The div for the title
let div2 = document.createElement('div');
div2.style.height = "100px";
div2.style.width = "inherit";
div2.style.display = "flex";
div2.style.flexWrap = "nowrap";
div2.style.justifyContent = "center";
head.appendChild(div2);

let header = document.createElement('h1');
header.innerHTML = "Malina's Portofolio Page";
header.style.fontSize = "40px";
header.style.paddingTop = "15px";
div2.appendChild(header);

//The navbar
let navbar = document.createElement('div');
navbar.id = "navbar";
navbar.style.backgroundColor = "black";
navbar.style.height = "40px";
navbar.style.display = "flex";
navbar.style.flexWrap = "nowrap";
document.body.appendChild(navbar);

//This is the reggae bar under the navbar
let greenbar = document.createElement('div');
greenbar.style.height = "20px";
greenbar.style.backgroundColor = "#296330";
document.body.appendChild(greenbar);

let yellowbar = document.createElement('div');
yellowbar.style.height = "20px";
yellowbar.style.backgroundColor = "#f6c81d";
document.body.appendChild(yellowbar);

let redbar = document.createElement('div');
redbar.style.height = "20px";
redbar.style.backgroundColor = "#b21f1f";
document.body.appendChild(redbar);

//The navigation buttons
let nav3 = document.createElement('a');
nav3.href = "#Codes";
nav3.id = "codes";
nav3.innerHTML = "Codes";
nav3.style.width = "20%";
nav3.style.height = "40px";
nav3.style.textAlign = "center";
nav3.style.paddingTop = "6px";
nav3.style.borderTopLeftRadius = "10px";
nav3.style.borderTopRightRadius = "10px";
navbar.appendChild(nav3);

let nav4 = document.createElement('a');
nav4.href = "#Work";
nav4.id = "work";
nav4.innerHTML = "Work";
nav4.style.width = "20%";
nav4.style.height = "40px";
nav4.style.textAlign = "center";
nav4.style.paddingTop = "6px";
nav4.style.borderTopLeftRadius = "10px";
nav4.style.borderTopRightRadius = "10px";
navbar.appendChild(nav4);

let nav1 = document.createElement('a');
nav1.href = "#Home";
nav1.id = "home";
nav1.innerHTML = "Home";
nav1.style.width = "20%";
nav1.style.height = "40px";
nav1.style.textAlign = "center";
nav1.style.paddingTop = "6px";
nav1.style.backgroundColor = "#296330";
nav1.style.borderTopLeftRadius = "10px";
nav1.style.borderTopRightRadius = "10px";
navbar.appendChild(nav1);

let nav2 = document.createElement('a');
nav2.href = "#About";
nav2.id = "about";
nav2.innerHTML = "About";
nav2.style.width = "20%";
nav2.style.height = "40px";
nav2.style.textAlign = "center";
nav2.style.paddingTop = "6px";
nav2.style.borderTopLeftRadius = "10px";
nav2.style.borderTopRightRadius = "10px";
navbar.appendChild(nav2);

let nav5 = document.createElement('a');
nav5.href = "#Resume";
nav5.id = "resume";
nav5.innerHTML = "Resume";
nav5.style.width = "20%";
nav5.style.height = "40px";
nav5.style.textAlign = "center";
nav5.style.paddingTop = "6px";
nav5.style.borderTopLeftRadius = "10px";
nav5.style.borderTopRightRadius = "10px";
navbar.appendChild(nav5);

//The text area's
let homediv = document.createElement('div');
homediv.id = "homediv";
homediv.style.display = "block";
homediv.style.textAlign = "center";
let pic1 = document.createElement('img');
pic1.src = "stick figure.png";
homediv.appendChild(pic1);
document.body.appendChild(homediv);

let aboutdiv = document.createElement('div');
aboutdiv.id = "aboutdiv";
aboutdiv.style.display = "none";
document.body.appendChild(aboutdiv);

let codesdiv = document.createElement('div');
codesdiv.id = "codesdiv";
codesdiv.style.display = "none";
document.body.appendChild(codesdiv);

let workdiv = document.createElement('div');
workdiv.id = "workdiv";
workdiv.style.display = "none";
document.body.appendChild(workdiv);

let resumediv = document.createElement('div');
resumediv.id = "resumediv";
resumediv.style.display = "none";
document.body.appendChild(resumediv);