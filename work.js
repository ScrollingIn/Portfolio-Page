// document.getElementById('work').addEventListener('click',function(){
//     if (workdiv.style.display === "none"){
//         //This is the display div codes
//         document.getElementById('workdiv');
//         homediv.style.display = "none";
//         aboutdiv.style.display = "none";
//         codesdiv.style.display = "none";
//         workdiv.style.display = "block";
//         resumediv.style.display = "none";
//         homediv.innerHTML = "";
//         aboutdiv.innerHTML = "";
//         codesdiv.innerHTML = "";
//         resumediv.innerHTML = "";
//         nav1.style.backgroundColor = "transparent";
//         nav2.style.backgroundColor = "transparent"
//         nav3.style.backgroundColor = "transparent"
//         nav4.style.backgroundColor = "#296330";
//         nav5.style.backgroundColor = "transparent";

//         //This is the worknavbar
//         let worknav = document.createElement('div');
//         worknav.id = "worknav";
//         worknav.style.height = "20px";
//         worknav.style.display = "flex";
//         worknav.style.flexWrap = "nowrap";
//         worknav.style.backgroundColor = "white";
//         workdiv.appendChild(worknav);

//         let worknav2 = document.createElement('a');
//         worknav2.id = "work2";
//         worknav2.href = "#Work2";
//         worknav2.innerHTML = "Work2";
//         worknav2.style.width = "20%";
//         worknav2.style.height = "20px";
//         worknav2.style.textAlign = "center";
//         // worknav2.style.paddingTop = "6px";
//         worknav2.style.backgroundColor = "white";
//         worknav2.style.borderBottomLeftRadius = "10px";
//         worknav2.style.borderBottomRightRadius = "10px";
//         worknav.appendChild(worknav2);

//         let worknav1 = document.createElement('a');
//         worknav1.id = "work1";
//         worknav1.href = "#Work1";
//         worknav1.innerHTML = "Work1";
//         worknav1.style.width = "20%";
//         worknav1.style.height = "20px";
//         worknav1.style.textAlign = "center";
//         worknav1.style.backgroundColor = "firebrick";
//         worknav1.style.borderBottomLeftRadius = "10px";
//         worknav1.style.borderBottomRightRadius = "10px";
//         worknav.appendChild(worknav1);

//         let worknav3 = document.createElement('a');
//         worknav3.id = "work3";
//         worknav3.href = "#Work3";
//         worknav3.innerHTML = "Work3";
//         worknav3.style.width = "20%";
//         worknav3.style.height = "20px";
//         worknav3.style.textAlign = "center";
//         // worknav3.style.paddingTop = "6px";
//         worknav3.style.backgroundColor = "white";
//         worknav3.style.borderBottomLeftRadius = "10px";
//         worknav3.style.borderBottomRightRadius = "10px";
//         worknav.appendChild(worknav3);

//         let worknav4 = document.createElement('a');
//         worknav4.id = "work4";
//         worknav4.href = "#Work4";
//         worknav4.innerHTML = "Work4";
//         worknav4.style.width = "20%";
//         worknav4.style.height = "20px";
//         worknav4.style.textAlign = "center";
//         // worknav4.style.paddingTop = "6px";
//         worknav4.style.backgroundColor = "white";
//         worknav4.style.borderBottomLeftRadius = "10px";
//         worknav4.style.borderBottomRightRadius = "10px";
//         worknav.appendChild(worknav4);

//         let worknav5 = document.createElement('a');
//         worknav5.id = "work5";
//         worknav5.href = "#Work5";
//         worknav5.innerHTML = "Work5";
//         worknav5.style.width = "20%";
//         worknav5.style.height = "20px";
//         worknav5.style.textAlign = "center";
//         // worknav5.style.paddingTop = "6px";
//         worknav5.style.backgroundColor = "white";
//         worknav5.style.borderBottomLeftRadius = "10px";
//         worknav5.style.borderBottomRightRadius = "10px";
//         worknav.appendChild(worknav5);

//         //this is the header of the about section
//         let workhead = document.createElement('div');
//         workhead.innerHTML = "this is the work section";
//         workhead.style.textAlign = "center";
//         workhead.style.fontSize = "30px";
//         workdiv.appendChild(workhead);

//         let workdiv1 = document.createElement('div');
//         workdiv1.id = "workdiv1";
//         workdiv1.style.display = "block";
//         workdiv1.style.fontSize = "20px";
//         workdiv1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dolor sed eros pellentesque tempus. Phasellus eu libero odio. Pellentesque enim erat, consectetur sed lorem eget, scelerisque sollicitudin erat. Proin a arcu eget lorem dignissim mattis eget quis nisl. Proin vitae placerat tortor, vel tempor leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut id metus urna. Pellentesque nec facilisis quam, sed vehicula dolor. Vivamus venenatis diam eget dui placerat congue. Sed ante ligula, venenatis suscipit placerat a, viverra in urna. In consectetur, dolor sed vestibulum viverra, orci ipsum facilisis erat, non cursus erat ex sollicitudin quam. Nam massa quam, pretium hendrerit urna at, condimentum varius nisl. Cras id accumsan lorem. Nullam aliquam nec sapien vel elementum. Cras tempus augue in augue varius, eget efficitur felis condimentum."
//         workdiv.appendChild(workdiv1);
//     }
//      //This clears the div when the button is pressed again so it won't duplicate
//      else if (workdiv.style.display === "block") {
//         homediv.style.display = "block";
//         workdiv.style.display = "none";
//         workdiv.innerHTML = "";
//         nav4.style.backgroundColor = "transparent";
//         nav1.style.backgroundColor = "#296330";
//      }

// })

// // let spheres = document.getElementById('spheres');
// // spheres.style.display = "none";

// // function showSpheres() {
// //     if(spheres.style.display == "none"){
// //         spheres.style.display = "block";
// //     } else {
// //         spheres.style.display = "none";
// //     }
// // }