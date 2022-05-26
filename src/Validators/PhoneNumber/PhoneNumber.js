// import isValidPhoneNumber from 'libphonenumber-js';
export function PhoneNumber(fieldName, errorMessage, validator) {
    // validator.validators.push({
    //     fieldName: fieldName,
    //     field: fieldName,
    //     rules: [{
    //         method: function(field) {
    //             var val = validator.form.elements[field].value === undefined ? '' : validator.form.elements[field].value;
    //             return isValidPhoneNumber(val, 'GB');
    //         },
    //         message: errorMessage
    //     }]
    // });



    validator.addValidator(fieldName, [{
        method: function(field) {
            var phone = field.value.replace(/\s/g, "");
            var regex = /(\s*\(?(0|\+44)(\s*|-)\d{4}\)?(\s*|-)\d{3}(\s*|-)\d{3}\s*)|(\s*\(?(0|\+44)(\s*|-)\d{3}\)?(\s*|-)\d{3}(\s*|-)\d{4}\s*)|(\s*\(?(0|\+44)(\s*|-)\d{2}\)?(\s*|-)\d{4}(\s*|-)\d{4}\s*)|(\s*(7|8)(\d{7}|\d{3}(\-|\s{1})\d{4})\s*)|(\s*\(?(0|\+44)(\s*|-)\d{3}\s\d{2}\)?(\s*|-)\d{4,5}\s*)$/;
            return regex.test(phone);
        },
        message: errorMessage
    }]);
}
