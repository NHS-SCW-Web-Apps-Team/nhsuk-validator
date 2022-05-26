export function NumberRequired(fieldName, errorMessage, validator) {
    validator.addValidator(fieldName, [{
        method: function(field) {
            var val = field.value === undefined ? '' : field.value;

            return val.trim().length > 0 && /^[0-9]*$/.test(val.trim());
        },
        message: errorMessage
    }]);
}
