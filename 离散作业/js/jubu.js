function loadDataFromServer()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/1.txt", true);
    xhr.send();
}
function loadDataFromServer3()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/3.txt", true);
    xhr.send();
}
function loadDataFromServer2()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/2.txt", true);
    xhr.send();
}
function loadDataFromServer4()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/4.txt", true);
    xhr.send();
}
function loadDataFromServert1()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/2.1.txt", true);
    xhr.send();
}
function loadDataFromServert2()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/2.2.txt", true);
    xhr.send();
}
function loadDataFromServert3()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/2.3.txt", true);
    xhr.send();
}
function loadDataFromServert4()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/2.4.txt", true);
    xhr.send();
}
function loadDataFromServert5()
{
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
       }
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/text/2.5.txt", true);
    xhr.send();
}
var MySong=document.getElementById("MySong");
var icon=document.getElementById("icon");
    icon.onclick=function()
    {
        if(MySong.paused)
        {
            MySong.play();
            icon.src="/img/begin.png";
        }
        else{
            MySong.pause();
            icon.src="/img/stop.png"
        }
    }