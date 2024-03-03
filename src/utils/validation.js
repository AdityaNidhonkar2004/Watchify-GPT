export const checkValidation = (email, password, name) => {
    const isValidEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isValidPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password);
    const isValidName = /^[a-z\s]{1,255}$/i.test(name);

    const validationObj = {
        'email': { isValid: true },
        'password': { isValid: true },
        'name': { isValid: true },
    };
    if (!isValidEmail) validationObj['email'] = { isValid: false, message: "Enter valid email" };
    if (!isValidPassword) validationObj['password'] = { isValid: false, message: "Enter valid password" };
    if (!isValidName) validationObj['name'] = { isValid: false, message: "Enter valid name" };

    return [validationObj,isValidEmail && isValidName && isValidPassword];

}