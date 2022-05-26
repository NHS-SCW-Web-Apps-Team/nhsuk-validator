export function EmailValidator(fieldName, validator) {
  validator.addValidator(fieldName, [{
    method: function(field) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
    },
    message: 'Please enter a valid email address'
  }]);
}
