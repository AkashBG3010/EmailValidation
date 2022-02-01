let email = prompt('Enter the Email-id to be validated: ')
const emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$')
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
//Test Cases ----->
let testEmail = 'kira@bridgelabz.co.in'

console.log('Valid Email Tests: ')
validateEmail(testEmail)

testEmail = 'abc@gmail.com.com'
validateEmail(testEmail)

testEmail = 'abc@yahoo.com'
validateEmail(testEmail)

testEmail = 'abc@1.com'
validateEmail(testEmail)

testEmail = 'abc-100@yahoo.com'
validateEmail(testEmail)

testEmail = 'abc.100@yahoo.com'
validateEmail(testEmail)

testEmail = 'abc111@abc.com'
validateEmail(testEmail)

testEmail = 'abc-100@abc.net'
validateEmail(testEmail)

testEmail = 'abc.100@abc.com.au'
validateEmail(testEmail)

testEmail = 'abc+100@gmail.com'
validateEmail(testEmail)

console.log('Invalid Email Tests: ')
try {
    testEmail = '.abc@abc.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc@.com.my'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc@abc@gmail.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc()*@gmail.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc..2002@gmail.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc.@gmail.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc123@.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc123@.com.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc123@gmail.a'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc@%*.com'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
    testEmail = 'abc@gmail.com.1a'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}
try {
testEmail = 'abc@gmail.com.aa.au'
validateEmail(testEmail)
}
catch (e) {
    console.error(e)
}