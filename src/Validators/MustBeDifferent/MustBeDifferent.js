export function MustBeDifferent(fieldName, comparison, errorMessage, validator) {
    var vals = [
        fieldName, comparison
    ];
    validator.validators.push({
        fieldName: fieldName,
        field: vals,
        rules: [{
            method: function(field) {
                var val = validator.form.elements[field[0]].value === undefined ? '' : validator.form.elements[field[0]].value;
                return val.trim() !== field[1].trim();
            },
            message: errorMessage
        }]
    })
}
