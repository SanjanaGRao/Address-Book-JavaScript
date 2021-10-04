let firstNameCheck = (firstName) => {
    let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
    if (regex.test(firstName))
        return true;
    else throw "Please enter valid first Name.";
};
let lastNameCheck = (lastName) => {
    let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
    if (regex.test(lastName))
        return true;
    else throw "Please enter valid last Name.";
};
let addressCheck = (address) => {
    let regex = RegExp("^[a-zA-Z]");
    if (regex.test(address))
        return true;
    else throw "Please enter valid address.";
};
let cityCheck = (city) => {
    let regex = RegExp("^[a-zA-Z]");
    if (regex.test(city))
        return true;
    else throw "Please enter valid city.";
};
let stateCheck = (state) => {
    let regex = RegExp("^[a-zA-Z]");
    if (regex.test(state))
        return true;
    else throw "Please enter valid state.";
};
let pinCheck = (pin) => {
    let regex = RegExp("^[0-9]{5}[ ]?[0-9]{4}$");
    if (regex.test(pin))
        return true;
    else throw "Please enter valid PIN Code.";
};
let phoneCheck = (phNumber) => {
    let regex = RegExp("^91 [1-9][0-9]{9}$");
    if (regex.test(phNumber))
        return true;
    else throw "Please enter valid contact number.";
};
let emailCheck = (email) => {
    let regex = RegExp("^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$");
    if (regex.test(email))
        return true;
    else throw "Please enter valid email ID.";
};
module.exports =
{
    firstNameCheck,
    lastNameCheck,
    addressCheck,
    cityCheck,
    stateCheck,
    pinCheck,
    phoneCheck,
    emailCheck
};