# Ironhack Project 1 by Àlex Freixa

This project deals with the development of a simple web page. For it's development I used HTML, CSS and JavaScript, in addition to image files, icons and an API for consulting the single projects data.

## File Structure

    .
    ├── css                    # CSS files
    ├── images                 # Image files
    ├── js                     # JS files
    ├── projects               # Single project pages
    └── README.md

## JavaScript files

The project has multiple JavaScript files to add some functionalities.

### form-validator.js

- `Event Listeners for Input Fields`: When the value of an input field of the contact form changes, the corresponding validateField function is called.

- `Function to validate inputs`: validateField(field) function checks the validity of the input field based on its type (name, email, phone, or message) and displays an error message if the input is invalid. 

- `Check all inputs before submision`: beforeSubmit function checks the validity of all fields before allowing the form submission.

- `Textarea input counter`: This function updates a character counter based on the length of the text in the message field.

- `Custom message for each input`: The error message is customized for every input individually. We display them basically 

### form-validator.js

- `Event listener on DOM load`: sets event listener to all form inputs with specific parameters. This listeners wait for a click and call the functions validateField() or the form us submitted

- `validateField(field)`: this function checks for the input where there are currently changes made. It displays an error message if some data in the input value is invalid.

- `beforeSubmit`: Prevents the submit to being submitted before validating. If it's valid then it submits.

- `textLength()`: updates the message characters limit counter.

### script.js

- `Event listener for burguer menu`: sets an event listener to the mobile menu button. It toggles the menu to be shown or hidden after click.
- `Event listener after page loading`: loads the data from the API and then calls the function displayProjects().
- `displayProjects(X)`: Gets "X" projects from the API and updates the HTML accordingly. If it fails it displays a message where data couldnt be found.
