 export function AtLeastOne(arrFields, errorMessage, validator) {
     validator.validators.push({
         fieldName: arrFields[0],
         field: arrFields,
         rules: [{
             method: function(field) {
                 var val = "";
                 var i;
                 for (i = 0; i < field.length; i++) {
                     val += validator.form.elements[field[i]].value;
                 }
                 return val.length > 0;
             },
             message: errorMessage
         }]
     });
 }