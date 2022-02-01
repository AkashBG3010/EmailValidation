let email = prompt('Enter the Email-id to be validated: ')
const emailRegex = RegExp('^[abc.]+[A-Za-z.]+@+[a-zA-Z].[a-zA-Z.]$')
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