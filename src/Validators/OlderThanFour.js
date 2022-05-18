import dayjs from "dayjs";

export function OlderThanFour(bDay, bMonth, bYear, dDay, dMonth, dYear,  validator) {
    var fieldArr = [
                   bDay,
                   bMonth,
                   bYear,
                   dDay,
                   dMonth,
                   dYear                  
               ];
    validator.validators.push({
        fieldName: bYear,
        field: fieldArr,
        rules: [{
            method: function(field) {
                var dValue = validator.form.elements[field[0]].value.padStart(2, '0');
                var mValue = validator.form.elements[field[1]].value.padStart(2, '0');
                var yValue = validator.form.elements[field[2]].value;
                if(validator.form.elements[field[0]].value.length  <= 0 || validator.form.elements[field[1]].value.length  <= 0
                    || validator.form.elements[field[2]].value.length < 4){                       
                    
                    return ;
                }
                var dob = [yValue, mValue, dValue].join('-');
             
                if (dValue !== "" && mValue !== "" && yValue !== "") {
                    var ddValue = validator.form.elements[field[3]].value.padStart(2, '0');
                    var dmValue = validator.form.elements[field[4]].value.padStart(2, '0');
                    var dyValue = validator.form.elements[field[5]].value;
                    if(ddValue !== "" && dmValue !== "" && dyValue !== ""){                          

                            var dod = [dyValue, dmValue, ddValue].join('-');
                           
                            var diff2 = dayjs(dod, 'YYYY-MM-DD').diff(dayjs(dob, 'YYYY-MM-DD'), 'years');                     
                           
                            return diff2 >= 4;
                    }else{
                        var diff = dayjs().diff(dayjs(dob, 'YYYY-MM-DD'), 'years');
                       
                        return diff >= 4;
                    }
                   
                } else {
                    return true;
                }
            },
            message: "The year provided is younger than four"
        }]
    })
}
