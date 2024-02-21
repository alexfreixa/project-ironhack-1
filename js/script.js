
document.addEventListener("DOMContentLoaded", () => {

    const menuLink = document.getElementById('menuLink');
    const menuMobile = document.getElementById("links-mobile");

    menuLink.addEventListener('click', function () {
        //const linksMobile = document.getElementById("links-mobile"); 
        if (menuMobile.style.display === "flex") {
            menuMobile.style.display = "none";
        } else {
            menuMobile.style.display = "flex";
        }
    });

});

