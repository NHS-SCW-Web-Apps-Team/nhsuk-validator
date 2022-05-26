# NHS Number

## When to use

Used to validate that the input of a given field passes the required NHS Number checks, including length, character types and the mod11 check.

## How to use

- Ensure that you have an instance of the validator on the page. 

- Add the validator for the field: 
  ` nhsValidator.NhsNumber('{Field}', {instance of validator});`
