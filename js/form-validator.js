document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('contacte');
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const message = form.querySelector('#message');
    const counter = form.querySelector('#textCount');

    name.addEventListener('change', function() {
        validateField(name);
    });

    email.addEventListener('change', function() {
        validateField(email);
    });

    phone.addEventListener('change', function() {
        validateField(phone);
    });

    message.addEventListener('change', function() {
        validateField(message);
    });

    message.addEventListener('input', function() {
        textLength(message, counter);
    });

    form.addEventListener('submit', function(e) {
        if(beforeSubmit(name, email, phone, message)){
            form.submit();
        } else {
            e.preventDefault();
        }
    });

});

function beforeSubmit(name, email, phone, message){
    if(validateField(name) && validateField(email) && validateField(phone) && validateField(message)) {
        return true
    } else {
        return false;
    }
}

function validateField(field) {

    const value = field.value;
    const id = field.id;
    const msg = document.querySelector('.msg-error.input-'+id);

    //Name validation
    if(id === 'name') if(value === 'Ironhack') {
        msg.classList.remove('hidden');
        msg.innerHTML = "You cannot be Ironhack, because I am Ironhack.";
        field.insertAdjacentElement('afterend', msg);
        return false;
    } else {
        msg.classList.add('hidden');
        return true;
    }

    //Email validation
    if(id === 'email') if(value.includes("@yopmail")){
        msg.classList.remove('hidden');
        msg.innerHTML = "This temporary email address is not accepted.";
        field.insertAdjacentElement('afterend', msg);
        return false;
    }  else {
        msg.classList.add('hidden');
        return true;
    }

    //Phone validation
    if(id === 'phone') if(value.length < 9){
        msg.classList.remove('hidden');
        msg.innerHTML = "The phone number is too short.";
        field.insertAdjacentElement('afterend', msg);
        return false;
    }  else {
        msg.classList.add('hidden');
        return true;
    }

    //Message validation
    if(id === 'message') if(value.length < 10){
        msg.classList.remove('hidden');
        msg.innerHTML = "We\'re sure you have something longer to say :(.";
        field.insertAdjacentElement('afterend', msg);
        return false;
    }  else {
        msg.classList.add('hidden');
        return true;
    }

}

function textLength(field, counter) {
    const charsLeft = counter.querySelector('#charsLeft');
    charsLeft.innerHTML = field.value.length;
}