function displayProjects() {
    document.getElementById("projects").style.display = "block";
    document.getElementById("display-btn__projects").style.borderBottom = "#03d8c6 solid 3px";
    
    document.getElementById("about-me").style.display = "none";
    document.getElementById("display-btn__about-me").style.borderBottom = "none";

    document.getElementById("contact").style.display = "none";
    document.getElementById("display-btn__contact").style.borderBottom = "none";

}

function displayAboutMe() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("display-btn__projects").style.borderBottom = "none";

    document.getElementById("about-me").style.display = "block";
    document.getElementById("display-btn__about-me").style.borderBottom = "#03d8c6 solid 3px";

    document.getElementById("contact").style.display = "none";
    document.getElementById("display-btn__contact").style.borderBottom = "none";
}

function displayContact() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("display-btn__projects").style.borderBottom = "none";
    
    document.getElementById("about-me").style.display = "none";
    document.getElementById("display-btn__about-me").style.borderBottom = "none";

    document.getElementById("contact").style.display = "block";
    document.getElementById("display-btn__contact").style.borderBottom = "#03d8c6 solid 3px";
}