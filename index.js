let head = document.createElement('div');
head.style.display = "flex";
head.style.flexDirection = "row";
head.style.width = "100%";
document.body.appendChild(head);

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



let navbar = document.createElement('div');
navbar.id = "navbar";
navbar.style.backgroundColor = "black";
navbar.style.color = "white";
navbar.style.height = "40px";
navbar.style.display = "flex";
navbar.style.flexWrap = "nowrap";
navbar.style.justifyContent = "space-between";
document.body.appendChild(navbar);

//This is the green bar under the navbar
let greenbar = document.createElement('div');
greenbar.style.height = "20px";
greenbar.style.backgroundColor = "green";
document.body.appendChild(greenbar);

let nav1 = document.createElement('a');
nav1.href = "#Home";
nav1.id = "home";
nav1.innerHTML = "Home";
nav1.style.width = "16%";
nav1.style.height = "40px";
nav1.style.textAlign = "center";
nav1.style.paddingTop = "6px";
navbar.appendChild(nav1);

let nav2 = document.createElement('a');
nav2.href = "#About";
nav2.id = "about";
nav2.innerHTML = "About";
nav2.style.width = "16%";
nav2.style.height = "40px";
nav2.style.textAlign = "center";
nav2.style.paddingTop = "6px";
navbar.appendChild(nav2);

let nav3 = document.createElement('a');
nav3.href = "#Codes";
nav3.id = "codes";
nav3.innerHTML = "Codes";
nav3.style.width = "16%";
nav3.style.height = "40px";
nav3.style.textAlign = "center";
nav3.style.paddingTop = "6px";
navbar.appendChild(nav3);

let nav4 = document.createElement('a');
nav4.href = "#Work";
nav4.id = "work";
nav4.innerHTML = "Work";
nav4.style.width = "16%";
nav4.style.height = "40px";
nav4.style.textAlign = "center";
nav4.style.paddingTop = "6px";
navbar.appendChild(nav4);

let nav5 = document.createElement('a');
nav5.href = "#Github";
nav5.id = "github";
nav5.innerHTML = "Github";
nav5.style.width = "16%";
nav5.style.height = "40px";
nav5.style.textAlign = "center";
nav5.style.paddingTop = "6px";
navbar.appendChild(nav5);

let nav6 = document.createElement('a');
nav6.href = "#Resume";
nav6.id = "resume";
nav6.innerHTML = "Resume";
nav6.style.width = "16%";
nav6.style.height = "40px";
nav6.style.textAlign = "center";
nav6.style.paddingTop = "6px";
navbar.appendChild(nav6);

let homediv = document.createElement('div');
homediv.id = "homediv";
homediv.style.display = "block";
homediv.innerHTML = "this is the home section";
document.body.appendChild(homediv);

let aboutdiv = document.createElement('div');
aboutdiv.id = "aboutdiv";
aboutdiv.style.display = "none";
document.body.appendChild(aboutdiv);
