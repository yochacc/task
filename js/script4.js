function validateForm(element) {
    const name = element.name.value;
    const email = element.email.value;
    const last_name = element.message.value;

    var errorMsg = '';

    if (name === '' || email === '' || last_name === '') {
        errorMsg = 'Все поля должны быть заполнены';

    } else if (!isValidEmail(email)) {
        errorMsg = 'Введите корректный email';
    }

    if (errorMsg !== '') {
        document.getElementById('error-msg').innerHTML = errorMsg;
        return false;
    }


}
function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}