export function NhsNumber(field, validator) {
    validator.addValidator(field, [{
        method: function(field) {
            return field.value.trim().length > 0;
        },
        message: 'No NHS number supplied'
    }]);

    validator.addValidator(field, [{
        method: function(field) {
            var f = field.value.replace(/\s+/g, '');
            return !isNaN(Number(f));
        },
        message: 'Non-numerical input'
    }]);

    validator.addValidator(field, [{
        method: function(field) {
            var f = field.value.replace(/\s+/g, '');
            return f.length === 10 || !f.length < 10;
        },
        message: 'NHS number too long'
    }]);

    validator.addValidator(field, [{
        method: function(field) {
            var f = field.value.replace(/\s+/g, '');
          
           return f.length === 10 || f.length === 0;
        },
        message: 'NHS number too short'
    }]);


    validator.addValidator(field, [{
        method: function(field) {
            if(field.value.length != 10){
                return;
            }
            function addTogether(previousValue, currentValue) {
                return previousValue + currentValue;
            }

            function multiplyByPosition(digit, index) {
                return digit * (11 - (index + 1));
            }
            var nhsNumber = field.value.replace(/\s+/g, '');
            if (Number.isInteger(nhsNumber)) {
                nhsNumber = nhsNumber.toString();
            }
            var nhsNumberAsArray = nhsNumber.split('');
            var remainder = nhsNumberAsArray.slice(0, 9)
                .map(multiplyByPosition)
                .reduce(addTogether, 0) % 11;

            var checkDigit = 11 - remainder;

            // replace 11 for 0
            if (checkDigit === 11) {
                checkDigit = 0;
            }

            var providedCheckDigit = nhsNumberAsArray[9];

            // Do the check digits match?
            return checkDigit === Number(providedCheckDigit);
        },
        message: 'NHS number supplied is not valid'
    }]);
}