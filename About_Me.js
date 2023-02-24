const software = ["QGIS", "ArcGIS Pro", "ArcGIS Online", "ENVI", "MS Office", "MS Power (Power BI)"];
const languages = ["Python", "C#", "SQL", "PostgreSQL", "HTML", "CSS", "JavaScript"];
const GeoDaAnl = ["Python", "QGIS", "ArcGIS Pro", "GeoDa", "Tableau", "ENVI"];

var firstLastName = "HLAMARISA NDLOVU";
var fullName = "Hlamarisa Niven Jnr Ndlovu"
var uni = "University of Pretoria";
var deg = "BSc Geoinformatics";
var age = "22";
var career = "Geospatial Developer";
var aboutMe = "I am a dedicated worker/student. I am always excited to learn new things that are outside of my comfort zone. I mostly deal with spatial data because of the field I am working in. My goal is to obtain a Master's degree in Geoinformatics, and to be a proficient geospatial developer.";

document.getElementById("fullName").innerHTML = fullName;
document.getElementById("age").innerHTML = age;
document.getElementById("uni").innerHTML = uni;
document.getElementById("career").innerHTML = career;
document.getElementById("aboutMe").innerHTML = aboutMe;
document.getElementById("firstNameLastName").innerHTML = firstLastName;
document.getElementById("deg").innerHTML = deg;
var list1 = document.getElementById("softwares");

software.forEach((item) => {
    var li = document.createElement("li");
    li.innerText = item;
    list1.appendChild(li);
})

var list2 = document.getElementById("lang");

languages.forEach((item) => {
    var li2 = document.createElement("li");
    li2.innerText = item;
    list2.appendChild(li2);
})

var list3 = document.getElementById("geodaAna");

GeoDaAnl.forEach((item) => {
    var li3 = document.createElement("li");
    li3.innerText = item;
    list3.appendChild(li3);
})

