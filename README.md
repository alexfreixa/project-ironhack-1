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