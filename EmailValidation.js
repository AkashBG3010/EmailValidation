let email = prompt('Enter the Email-id to be validated: ')
const emailRegex = RegExp('^[a-zA-Z0-9][- . + _]?[a-zA-Z0-9]*[@]{1}[bridgelabz][.]{1}[co.][a-z]*$')
function validationOfEmail(email) {
    if (emailRegex.test(email)) {
        console.log('Entered Email is valid!!')
    }
    else {
        throw 'Entered Email is invalid!!'
    }
}

try {
    validationOfEmail(email);
}
catch (e) {
    console.error(e);
}