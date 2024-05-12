
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const digitRegex = /\d/;

class Validation {

    static validateEmail(email: string): boolean {
        return emailRegex.test(email);
    };

    static validatePhoneNumber(phoneNumber: string): boolean {
        return phoneRegex.test(phoneNumber);
    };

    static validatePassword(
        password: string, 
        length: number = 8,
        hasUpperCase: boolean = false,
        hasLowerCase: boolean = false,  
        hasDigit: boolean = false
    ): boolean {
        
        return (
            password.length >= length &&
            (hasUpperCase ? uppercaseRegex.test(password) : true) &&
            (hasLowerCase ? lowercaseRegex.test(password) : true) &&
            (hasDigit ? digitRegex.test(password) : true)
        );
    };

    static validateUrl(url: string): boolean {
        return urlRegex.test(url);
    }

}

export default Validation;