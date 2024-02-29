window.addEventListener("load", (event) => {
    displaySingleProject("1");
  });


  async function displaySingleProject(uuid) {
  try {
      const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
      const jsonResponse = await response.json();

      const singleProject = jsonResponse.find(project => project.uuid === uuid);

      const title = document.getElementById('ptitle');
      const description = document.getElementById('pdescription');
      const date = document.getElementById('pdate');
      const image = document.getElementById('pimage');
      const content = document.getElementById('pcontent');

        title.innerHTML = singleProject.name; // Use singleProject instead of project
        description.innerHTML = singleProject.description;
        date.innerHTML = singleProject.completed_on;
        image.src = singleProject.image; // Use src for an image element
        content.innerHTML = singleProject.content;

  } catch (error) {
      // Handle error or a rejected Promise
      console.log("Something went wrong!", error);
  }
}