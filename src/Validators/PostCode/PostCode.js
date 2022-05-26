 export function PostCode(fieldName, errorMessage, validator) {
     validator.addValidator(fieldName, [{
         method: function(field) {
             var postcode = field.value.replace(/\s/g, "");
             var regex = /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/i
             return regex.test(postcode);
         },
         message: errorMessage
     }]);
 }