document.addEventListener("DOMContentLoaded", () => {

    const menuLink = document.getElementById('menuLink');
    const menuMobile = document.getElementById("links-mobile");

    menuLink.addEventListener('click', function () {
        if (menuMobile.style.display === "flex") {
            menuMobile.style.display = "none";
        } else {
            menuMobile.style.display = "flex";
        }
    });

});



window.addEventListener("load", (event) => {
    displayProjects(3);
});


async function displayProjects(limit = 0) {
    
    const container = document.getElementById('cards-container');
    var buildHtml = '';
    
    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        const jsonResponse = await response.json();

        const publicProjects = jsonResponse.slice(0, limit);


        publicProjects.forEach((project) => {

            buildHtml +=
            `<article class="span4">
                <div class="card">
                    <div class="project-img">
                        <img class="max-w-100" src="${project.image}">
                    </div>
                    <div class="card-text">
                        <h3 class="intro medium">${project.name}</h3>
                        <p>${project.description}</p>
                        <a href="/projects/1.html" class="link medium">Learn more</a>
                    </div>
                </div>
            </article>`;

        });

        container.innerHTML = buildHtml;

    } catch (error) {

        buildHtml += `<div class="notfound w-full">There was an error when loading this content. Please try later.</div>`;
        container.innerHTML = buildHtml;
        
    }
}