export function NumberGreaterThanOrEqual(field, number, errorMessage, validator) {
    var vals = [
        field, number
    ];
    validator.validators.push({
        fieldName: field,
        field: vals,
        rules: [{
            method: function(field) {
                var val = validator.form.elements[field[0]].value;
                if (val) {
                    return val >= field[1];
                } else {
                    return false;
                }
            },
            message: errorMessage
        }]
    })
}
