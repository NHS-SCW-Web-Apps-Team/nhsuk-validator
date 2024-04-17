import dayjs from "dayjs";

export function Date(day, month, year, typeOfDate, required = true, validator) {
  var fieldArr = [
    day,
    month,
    year
  ];
  validator.validators.push(
    {
      fieldName: day,
      field: fieldArr,
      rules: [{
        method: function (field) {

          function validateDate() {
            console.log('in ValidateDate');
            var dValue = validator.form.elements[day].value.padStart(2, '0');
            var mValue = validator.form.elements[month].value.padStart(2, '0');
            var yValue = validator.form.elements[year].value;
            var d = yValue.concat('-', mValue, '-', dValue);
            var d2 = [yValue, mValue, dValue].join('-');
            var valid = dayjs(d2, 'YYYY-MM-DD').format('YYYY-MM-DD') === d2;
            return valid;
          }

          function isDirty() {
            console.log('isDirty')
            var d = validator.form.elements[day].value.length > 0;
            var m = validator.form.elements[month].value.length > 0;
            var y = validator.form.elements[year].value.length > 0;
            console.log(d + m + y);
            return d + m + y;
          }

          var isDirty = isDirty();
          if (required) {
            console.log('required is true')
            return validateDate();
          }
          else if (isDirty > 0) {
            console.log('date dirty so validate');
            return validateDate();
          }
          else {
            console.log('required is false');
            return true;
          }
        },

        message: "The date of " + typeOfDate + " supplied is an invalid date"
      }]
    });


  // validator.addValidator(day, [{
  //     method: function(field, params) {
  //       return (params.day.value.trim().length > 0 && params.month.value.trim().length > 0 && params.year.value.trim().length === 4);
  //     },
  //     message: "Please enter a valid date of "+typeOfDate,
  //     params: {
  //       day: document.getElementById(day),
  //       month: document.getElementById(month),
  //       year: document.getElementById(year)
  //     }
  //   }]);

  //   validator.addValidator(day, [{
  //     method: function (field) {
  //         return field.value.trim().length > 0;
  //     },
  //     message: 'No day has been supplied.'
  //    }]);
  // validator.addValidator(month, [{
  //     method: function (field) {
  //         return field.value.trim().length > 0;
  //     },
  //     message: 'No month has been supplied.'
  // }]);
  // validator.addValidator(year, [{
  //     method: function (field) {
  //         return field.value.trim().length === 4;
  //     },
  //     message: 'No year has been supplied'
  // }]);
}
