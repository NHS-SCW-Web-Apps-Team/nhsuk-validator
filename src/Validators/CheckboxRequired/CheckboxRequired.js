 export function CheckboxRequired(field, errorMessage, validator) {
     validator.validators.push({
         fieldName: field,
         field: validator.form.elements[field],
         rules: [{
             method: function(field) {
                 var valid = false;
                 var i;
                 for (i = 0; i < field.length; i++) {
                     if (field[i].checked) {
                         valid = true;
                     }
                 }
                 return valid;
             },
             message: errorMessage
         }]
     });
 }