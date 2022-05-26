export function StringRequired(fieldName, length, errorMessage, validator) {
    var vals = [
        fieldName, length
    ];
    validator.validators.push({
        fieldName: fieldName,
        field: vals,
        rules: [{
            method: function(field) {
                var val = validator.form.elements[field[0]].value === undefined ? '' : validator.form.elements[field[0]].value;
                return val.trim().length > field[1];
            },
            message: errorMessage
        }]
    })
}
