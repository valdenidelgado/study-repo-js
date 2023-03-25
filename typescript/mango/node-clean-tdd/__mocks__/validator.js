module.exports = {
    isEmailValid: true,
    email: 'any_email@mail.com',
    isEmail(email) {
        this.email = email;
        return this.isEmailValid;
    }
}