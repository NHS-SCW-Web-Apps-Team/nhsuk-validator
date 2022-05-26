# nhsuk-validator

Originally forked from [Ministry of Justice Frontend package](https://design-patterns.service.justice.gov.uk/components/form-validator/) and updated to use the [NHS Service Manual](https://service-manual.nhs.uk/) styles. 

## When to use

Use the form validator component to validate forms without a server-side round-trip while also conforming to the established standards set out in the [NHS Service Manual](https://service-manual.nhs.uk/).

## How to use

In alignment with established NHS Design System standards:

- validation is performed on submit. Forms should never be validated as the user types or blurs the field.
- when the form is submitted with errors, focus moves to the error summary; errors are shown above the field and the `<title>` is prefixed with the error count.
- submit buttons are never disabled.

### Initial setup

Firstly ensure that the script is includiing in the page:
`  <script src="/js/nhs-validator.js"></script> ` 

Ensure that on the page to be validated, the fields are all within a `<form method="post"></form>` block.

Add the following placeholder error div to the top of the page, or where you with the error messages to be displayed:
`<div tabindex="-1" role="group" id="error-summary-title" class="nhsuk-error-summary nhsuk-u-visually-hidden" aria-labelledby="error-summary-title" data-module="error-summary"> </div>`

Create a script section within the page to contain the setup for the validator, the instantiation of a validator instance is required: 
`var validator = new nhsValidator.FormValidator(document.forms[0]);`
The index of the form can be changed if there are multiple on the page. 

Use the documentation for each validator for the steps to set them up and the required parameters. 

### Currently available validators

The following validators are currently available within the package:

- [AtLeastOne](src/Validators/AtLeastOne/README.md)
- BornBeforeDeath
- CheckboxRequired
- Date
- DateInFuture
- EmailVaildator
- MustBeDifferent
- NhsNumber
- NumberGreaterThan
- NumberGreaterThanOrEqual
- OlderThanFour
- PhoneNumber
- PostCode
- StringRequired
