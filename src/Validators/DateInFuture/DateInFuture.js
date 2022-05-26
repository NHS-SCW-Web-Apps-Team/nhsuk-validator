import dayjs from "dayjs";

export function DateInFuture(bDay, bMonth, bYear, validator) {
    var fieldArr = [
        bDay,
        bMonth,
        bYear
    ];
    validator.validators.push({
        fieldName: bDay,
        field: fieldArr,
        rules: [{
            method: function(field) {
                console.log(field);
                var bdValue = validator.form.elements[field[0]].value.padStart(2, '0');
                var bmValue = validator.form.elements[field[1]].value.padStart(2, '0');
                var byValue = validator.form.elements[field[2]].value;
                if(validator.form.elements[field[0]].value.length  <= 0 || validator.form.elements[field[1]].value.length  <= 0
                    || validator.form.elements[field[2]].value.length < 4){

                    return ;
                }
                //var dob = [byValue, bmValue, bdValue].join('-');

                if (bdValue !== "" && bmValue !== "" && byValue !== "") {
                    //var diff = dayjs(dob, 'YYYY-MM-DD').diff(dayjs(), 'day'); // no working well, today and tomorrow return zero, that means two different days with the same result

                    var CurrentDate = new Date();
                    var GivenDate = new Date(byValue,bmValue - 1,bdValue);

                    return GivenDate <= CurrentDate; // diff < 0;

                } else {

                    return true;
                }
            },
            message: "Date is in the future"
        }]
    });
}
