// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    //first Name
    let result = validateLib.checkRequired("fname", userObj.fname);
    if (result.isNotValid) { return result; }
    //last Name
    result = validateLib.checkRequired("lname", userObj.lname);
    if (result.isNotValid) { return result; }
    //email adress
    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }
    //password
    result = validateLib.checkRequired("pwd", userObj.pwd);
    if (result.isNotValid) { return result; }
    //password wiederholen
    result = validateLib.checkRequired("pwd2", userObj.pwd2);
    if (result.isNotValid) { return result; }

    //check length
    //first Name
    result = validateLib.checkLength("fname",userObj.fname, 3, 15);
    if (result.isNotValid) { return result; }
    //last Name
    result = validateLib.checkLength("lname",userObj.lname, 3, 15);
    if (result.isNotValid) { return result; }
    //password
    result = validateLib.checkLength("pwd", userObj.pwd, 6, 25);
    if (result.isNotValid) { return result; }
    //password wiederholen
    result = validateLib.checkLength("pwd2", userObj.pwd2, 6, 25);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check password
    result = validateLib.checkPassword("pwd", userObj.pwd, "pwd2", userObj.pwd2);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

module.exports = {
    validateUser
}
