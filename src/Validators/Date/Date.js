import dayjs from "dayjs";

export function Date(day, month, year, typeOfDate, validator) {
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
                    console.log(field);
                    
                    if(validator.form.elements[field[0]].value.length <= 0 || validator.form.elements[field[1]].value.length <= 0
                                       || validator.form.elements[field[2]].value.length < 4){                     
                        return ;
                    }

                    var dValue = validator.form.elements[field[0]].value.padStart(2, '0');
                    var mValue = validator.form.elements[field[1]].value.padStart(2, '0');
                    var yValue = validator.form.elements[field[2]].value;
                    var d = yValue.concat('-', mValue, '-', dValue);
                    var d2 = [yValue, mValue, dValue].join('-');
                    var valid = dayjs(d2, 'YYYY-MM-DD').format('YYYY-MM-DD') === d2;
                   
                    return valid;
                },                   
                
                message: "The date of "+typeOfDate+" supplied is an invalid date"
            }]
        });   


    validator.addValidator(day, [{
        method: function(field, params) {
          return (params.day.value.trim().length > 0 && params.month.value.trim().length > 0 && params.year.value.trim().length === 4);
        },
        message: "Please enter a valid date of "+typeOfDate,
        params: {
          day: document.getElementById(day),
          month: document.getElementById(month),
          year: document.getElementById(year)
        }
      }]);

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