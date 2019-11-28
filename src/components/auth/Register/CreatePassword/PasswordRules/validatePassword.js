export default (p) => {
    let errors = [];
    if (p.length < 8) {
        //Password must not be less than 8 characters long"
        errors.push(1);
    }

    if (p.search(/[a-z]/) === -1) {
        // Password must contain at least one lower case letter.
        errors.push(2);
    }

    if (p.search(/[A-Z]/) === -1) {
        // Password must contain at least one upper case letter.
        errors.push(3);
    }

    if (p.search(/[0-9]/) < 0) {
        // Password must contain at least one number
        errors.push(4);
    }

    if (p.search(/.*[!@#$%~^&*() =+_-]/) < 0) {
        // Password must contain at least one special character, (/~!@#$%^&*_-+=)
        errors.push(5);
    }

    if (p.length > 50) {
        // Password should not be above 50 characters
        errors.push(6);
    }

    return errors;
}