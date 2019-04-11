// document.getElementById('codes').addEventListener('click', function(){
//     if (codesdiv.style.display === "none"){
//         //This is the display div codes
//         document.getElementById('codesdiv');
//         homediv.style.display = "none";
//         aboutdiv.style.display = "none";
//         codesdiv.style.display = "block";
//         workdiv.style.display = "none";
//         resumediv.style.display = "none";
//         homediv.innerHTML = "";
//         aboutdiv.innerHTML = "";
//         workdiv.innerHTML = "";
//         resumediv.innerHTML = "";
//         nav1.style.backgroundColor = "transparent";
//         nav2.style.backgroundColor = "transparent";
//         nav3.style.backgroundColor = "#296330";
//         nav4.style.backgroundColor = "transparent";
//         nav5.style.backgroundColor = "transparent";

//         //this is the header of the about section
//         let codeshead = document.createElement('div');
//         codeshead.innerHTML = "this is the codes section";
//         codeshead.style.textAlign = "center";
//         codeshead.style.fontSize = "25px";
//         codesdiv.appendChild(codeshead);
//     } 
//     //This clears the div when the button is pressed again so it won't duplicate
//     else if (codesdiv.style.display === "block") {
//         homediv.style.display = "block";
//         codesdiv.style.display = "none";
//         codesdiv.innerHTML = "";
//         nav3.style.backgroundColor = "transparent";
//         nav1.style.backgroundColor = "#296330";
//     }
// })