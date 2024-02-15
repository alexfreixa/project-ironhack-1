
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', () => {
        const menuMobile = document.getElementById("links-mobile");
        //const linksMobile = document.getElementById("links-mobile"); 
        if (menuMobile.style.display === "flex") {
            menuMobile.style.display = "none";
        } else {
            menuMobile.style.display = "flex";
        }
    });
});

