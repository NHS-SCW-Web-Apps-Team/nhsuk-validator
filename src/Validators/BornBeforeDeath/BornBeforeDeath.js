import dayjs from "dayjs";

export function BornBeforeDeath(dDay, dMonth, dYear,bDay, bMonth, bYear, validator) {
 var fieldArr = [
        dDay,
        dMonth,
        dYear,
        bDay,
        bMonth,
        bYear
    ];
    validator.validators.push(
        {
            fieldName: dDay,
            field: fieldArr,
            rules: [{
                method: function (field) {
                    console.log(field);
                    var ddValue = validator.form.elements[field[0]].value.padStart(2, '0');
                    var dmValue = validator.form.elements[field[1]].value.padStart(2, '0');
                    var dyValue = validator.form.elements[field[2]].value;
                    if(validator.form.elements[field[0]].value.length  <= 0 || validator.form.elements[field[1]].value.length  <= 0
                        || validator.form.elements[field[2]].value.length < 4){

                        return ;
                    }
                    var bdValue = validator.form.elements[field[3]].value.padStart(2, '0');
                    var bmValue = validator.form.elements[field[4]].value.padStart(2, '0');
                    var byValue = validator.form.elements[field[5]].value;
                    if(validator.form.elements[field[3]].value.length <= 0 || validator.form.elements[field[4]].value.length <= 0
                        || validator.form.elements[field[5]].value.length < 4){

                        return ;
                    }
                    var dob = [byValue, bmValue, bdValue].join('-');
                    var dod = [dyValue, dmValue, ddValue].join('-');

                    var diff = dayjs(dod, 'YYYY-MM-DD').diff(dayjs(dob, 'YYYY-MM-DD'), 'day');
                    return diff > 0;
                },
                message: "Date of death is before date of birth"
            }]
        });
}
